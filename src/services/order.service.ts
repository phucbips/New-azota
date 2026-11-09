import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  serverTimestamp,
  onSnapshot,
  where,
  arrayUnion,
  limit,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { financeService } from './finance.service';

export type OrderStatus = 'pending' | 'paid' | 'pay_later' | 'cancelled';
export type PaymentMethod = 'bank_transfer' | 'cash';

export interface OrderItem {
  courseId: string;
  courseTitle: string;
  price: number;
}

export interface Order {
  id: string;
  orderCode: string;
  previousOrderCodes?: string[];
  displayCode?: string;
  checkoutUrl?: string | null;
  userId: string;
  userEmail: string;
  userName: string;
  items: OrderItem[];
  amount: number; // Final amount after discount
  originalAmount?: number;
  discount?: number;
  voucherCode?: string | null;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  createdAt: Date | any;
  updatedAt: Date | any;
  paidAt?: Date | any;
  notes?: string;
  // Backward compatibility:
  courseId?: string;
  courseTitle?: string;
}

/**
 * Returns true if the order is a 0đ free enrollment that did NOT use a voucher or discount.
 * Orders that became 0đ because of a voucher/discount return false so they are still tracked.
 */
export function isFreeNonVoucherOrder(order: Partial<Order>): boolean {
  const finalAmount = Number(order.amount ?? 0);
  if (finalAmount > 0) return false;

  const hasVoucher = Boolean(order.voucherCode && String(order.voucherCode).trim() !== '');
  const hasDiscount = Number(order.discount ?? 0) > 0;
  const origAmount = Number(order.originalAmount ?? 0);

  if (hasVoucher || hasDiscount || origAmount > 0) {
    return false;
  }

  if (Array.isArray(order.items) && order.items.some((item) => Number(item.price ?? 0) > 0)) {
    return false;
  }

  return true;
}

/** Returns the unique list of courseIds contained in an order (supports legacy single-course orders). */
export function getOrderCourseIds(order: Partial<Order>): string[] {
  const ids: string[] = [];
  if (order.courseId) ids.push(order.courseId);
  if (Array.isArray(order.items)) {
    order.items.forEach((item) => {
      if (item.courseId) ids.push(item.courseId);
    });
  }
  return Array.from(new Set(ids));
}

/** True if the order has ever had a PayOS QR generated (only those can be paid via PayOS). */
export function hasPayOSAttempt(order: Partial<Order>): boolean {
  return Boolean(order.checkoutUrl) || (order.previousOrderCodes?.length || 0) > 1;
}

class OrderService {
  private collection = collection(db, 'orders');

  async createOrder(
    orderData: Omit<Order, 'id' | 'orderCode' | 'createdAt' | 'updatedAt'>
  ): Promise<string> {
    const newDoc = doc(this.collection);
    const orderCodeNum = Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 9000);
    const orderCode = String(orderCodeNum);
    const userSuffix = orderData.userId
      ? orderData.userId.substring(0, 4).toUpperCase()
      : 'GUst';
    const displayCode = `DH${String(orderCodeNum).slice(-4)} KH${userSuffix}`;

    const data = {
      ...orderData,
      id: newDoc.id,
      orderCode,
      previousOrderCodes: [orderCode],
      displayCode,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    await setDoc(newDoc, data);
    return newDoc.id;
  }

  /**
   * Generates a fresh PayOS orderCode while preserving the old orderCode in `previousOrderCodes`
   * so that if the user pays an older QR code or a new QR code, both match this order.
   */
  async rotateOrderCode(order: Order): Promise<{ orderCode: string; displayCode: string }> {
    const newOrderCodeNum =
      Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 9000);
    const newOrderCode = String(newOrderCodeNum);
    const userSuffix = order.userId
      ? order.userId.substring(0, 4).toUpperCase()
      : 'GUst';
    const displayCode = `DH${String(newOrderCodeNum).slice(-4)} KH${userSuffix}`;

    const oldCodes = [String(order.orderCode), newOrderCode].filter(Boolean);

    await updateDoc(doc(db, 'orders', order.id), {
      orderCode: newOrderCode,
      previousOrderCodes: arrayUnion(...oldCodes),
      displayCode,
      checkoutUrl: null,
      updatedAt: serverTimestamp(),
    });

    return { orderCode: newOrderCode, displayCode };
  }

  async updateOrderStatus(id: string, status: OrderStatus): Promise<void> {
    const docRef = doc(db, 'orders', id);
    await updateDoc(docRef, {
      status,
      updatedAt: serverTimestamp(),
    });
  }

  async deleteOrder(id: string): Promise<void> {
    const docRef = doc(db, 'orders', id);
    await deleteDoc(docRef);
  }

  async updateCheckoutUrl(id: string, checkoutUrl: string): Promise<void> {
    const docRef = doc(db, 'orders', id);
    await updateDoc(docRef, { checkoutUrl });
  }

  async getOrder(id: string): Promise<Order | null> {
    const docRef = doc(db, 'orders', id);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return { id: snap.id, ...snap.data() } as Order;
    }
    return null;
  }

  /**
   * Finds an order by its current `orderCode` or any historical code in `previousOrderCodes`.
   * Works regardless of which user (student or admin) is currently logged in.
   */
  async findOrderByOrderCode(orderCode: string): Promise<Order | null> {
    const cleanCode = String(orderCode || '').trim();
    if (!cleanCode) return null;

    let snap = await getDocs(
      query(this.collection, where('orderCode', '==', cleanCode), limit(1))
    );
    if (snap.empty && !isNaN(Number(cleanCode))) {
      snap = await getDocs(
        query(this.collection, where('orderCode', '==', Number(cleanCode)), limit(1))
      );
    }
    if (snap.empty) {
      snap = await getDocs(
        query(
          this.collection,
          where('previousOrderCodes', 'array-contains', cleanCode),
          limit(1)
        )
      );
    }

    if (!snap.empty) {
      const d = snap.docs[0];
      return { id: d.id, ...d.data() } as Order;
    }
    return null;
  }

  /**
   * Marks a pending order as 'pay_later' (Ghi nợ / Trả sau) and immediately unlocks
   * all courses in `users/{order.userId}.enrolledCourses` so the student can study right away
   * while still being able to pay via QR or cash later.
   */
  async approveOrderPayLater(order: Order): Promise<void> {
    const courseIds = getOrderCourseIds(order);

    await updateDoc(doc(db, 'orders', order.id), {
      status: 'pay_later',
      updatedAt: serverTimestamp(),
    });

    if (order.userId && courseIds.length > 0) {
      await updateDoc(doc(db, 'users', order.userId), {
        enrolledCourses: arrayUnion(...Array.from(new Set(courseIds))),
      }).catch((err) => {
        console.warn('Could not update enrolledCourses on user doc:', err);
      });
    }
  }

  /**
   * Idempotently marks an order as 'paid', unlocks all courses in `users/{order.userId}.enrolledCourses`,
   * and syncs the revenue transaction into the active sales batch.
   */
  async completePaidOrder(order: Order, paymentMethod?: PaymentMethod): Promise<void> {
    const courseIds = getOrderCourseIds(order);
    const finalMethod: PaymentMethod = paymentMethod || order.paymentMethod || 'bank_transfer';

    if (order.status !== 'paid') {
      await updateDoc(doc(db, 'orders', order.id), {
        status: 'paid',
        paymentMethod: finalMethod,
        paidAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }

    // Unlock courses for the actual buyer (order.userId), even if triggered by Admin browser
    if (order.userId && courseIds.length > 0) {
      await updateDoc(doc(db, 'users', order.userId), {
        enrolledCourses: arrayUnion(...courseIds),
      }).catch((err) => {
        console.warn('Could not update enrolledCourses on user doc:', err);
      });
    }

    // Sync into financial_transactions & active sales batch
    if (!isFreeNonVoucherOrder(order) && Number(order.amount || 0) > 0) {
      const paidOrder: Order = { ...order, status: 'paid', paymentMethod: finalMethod };
      await financeService.syncPaidOrdersToTransactions([paidOrder]).catch((err) => {
        console.warn('Could not sync paid order to finance transactions:', err);
      });
    }

    // Tự động hủy các đơn chưa thanh toán bị trùng khóa học với đơn vừa thanh toán
    await this.cancelDuplicateUnpaidOrders(order).catch((err) => {
      console.warn('Could not cancel duplicate unpaid orders:', err);
    });
  }

  /**
   * Cancels other unpaid orders (`pending` / `pay_later`) of the same user whose courses
   * are fully covered by `paidOrder`. Prevents the same course from lingering in a second
   * "Chờ thanh toán" order after the student already paid.
   */
  async cancelDuplicateUnpaidOrders(paidOrder: Order): Promise<number> {
    if (!paidOrder.userId) return 0;
    const paidIds = new Set(getOrderCourseIds(paidOrder));
    if (paidIds.size === 0) return 0;

    const snap = await getDocs(query(this.collection, where('userId', '==', paidOrder.userId)));
    let cancelled = 0;
    for (const d of snap.docs) {
      if (d.id === paidOrder.id) continue;
      const other = { id: d.id, ...d.data() } as Order;
      if (other.status !== 'pending' && other.status !== 'pay_later') continue;
      const otherIds = getOrderCourseIds(other);
      if (otherIds.length === 0 || !otherIds.every((id) => paidIds.has(id))) continue;

      await updateDoc(d.ref, {
        status: 'cancelled',
        notes: `Tự động hủy: trùng khóa học với đơn ${paidOrder.displayCode || paidOrder.orderCode} đã thanh toán`,
        updatedAt: serverTimestamp(),
      });
      cancelled++;
    }
    return cancelled;
  }

  /**
   * Queries PayOS API directly via `/api/create-payment-link` (`action: 'check-status'`)
   * for `order.orderCode` and `order.previousOrderCodes`.
   * If PayOS confirms payment (`PAID` or `amountPaid >= amount`), automatically completes the order!
   */
  async verifyOrderWithPayOS(order: Order): Promise<boolean> {
    if (!order || order.status === 'paid') return true;

    const candidateCodes = Array.from(
      new Set(
        [String(order.orderCode || ''), ...(order.previousOrderCodes || []).map(String)]
          .map((c) => c.trim())
          .filter((c) => c && !isNaN(Number(c)) && Number(c) > 0)
      )
    );

    if (candidateCodes.length === 0) return false;

    try {
      const res = await fetch('/api/create-payment-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'check-status',
          orderCodes: candidateCodes,
        }),
      });

      if (!res.ok) return false;

      const data = await res.json();
      if (data && data.anyPaid) {
        await this.completePaidOrder(order, 'bank_transfer');
        return true;
      }
    } catch (err) {
      console.warn('verifyOrderWithPayOS error:', err);
    }

    return false;
  }

  async getOrders(): Promise<Order[]> {
    const snapshot = await getDocs(this.collection);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Order));
  }

  subscribeToOrders(callback: (orders: Order[]) => void): () => void {
    const q = query(this.collection);
    return onSnapshot(q, (snapshot) => {
      const orders = snapshot.docs.map((d) => ({ ...d.data(), id: d.id } as Order));
      orders.sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
      callback(orders);
    });
  }

  subscribeToUserOrders(userId: string, callback: (orders: Order[]) => void) {
    const q = query(this.collection, where('userId', '==', userId));
    return onSnapshot(q, (snapshot) => {
      const orders = snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Order));
      orders.sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
      callback(orders);
    });
  }
}

export const orderService = new OrderService();
