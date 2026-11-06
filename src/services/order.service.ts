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
} from 'firebase/firestore';
import { db } from '../config/firebase';

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
