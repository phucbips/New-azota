import { collection, doc, getDocs, getDoc, setDoc, updateDoc, deleteDoc, query, orderBy, serverTimestamp, onSnapshot, where } from 'firebase/firestore';
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
  displayCode?: string;
  checkoutUrl?: string;
  userId: string;
  userEmail: string;
  userName: string;
  items: OrderItem[];
  amount: number; // Final amount after discount
  originalAmount?: number;
  discount?: number;
  voucherCode?: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  createdAt: Date | any;
  updatedAt: Date | any;
  notes?: string;
  // Backward compatibility:
  courseId?: string;
  courseTitle?: string;
}

class OrderService {
  private collection = collection(db, 'orders');

  async createOrder(orderData: Omit<Order, 'id' | 'orderCode' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const newDoc = doc(this.collection);
    // Generate a readable order code like "EDU-12345"
    // PayOS requires orderCode to be an Int32 number
    const orderCodeNum = Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 9000);
    const orderCode = String(orderCodeNum);
    // Generate a human readable display code (e.g. DH1234 KH5678)
    const userSuffix = orderData.userId ? orderData.userId.substring(0, 4).toUpperCase() : 'GUst';
    const displayCode = `DH${String(orderCodeNum).slice(-4)} KH${userSuffix}`;

    const data = {
      ...orderData,
      id: newDoc.id,
      orderCode,
      displayCode,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    await setDoc(newDoc, data);
    return newDoc.id;
  }

  async updateOrderStatus(id: string, status: OrderStatus): Promise<void> {
    const docRef = doc(db, 'orders', id);

    // In a real scenario, if status becomes 'paid', we would also update the student's enrollments
    // This could be done via a Cloud Function, or here directly in client (less secure but works for demo).

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
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));
  }

  subscribeToOrders(callback: (orders: Order[]) => void): () => void {
    const q = query(this.collection);
    return onSnapshot(q, (snapshot) => {
      const orders = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Order));
      orders.sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
      callback(orders);
    });
  }

  subscribeToUserOrders(userId: string, callback: (orders: Order[]) => void) {
    const q = query(this.collection, where('userId', '==', userId));
    return onSnapshot(q, (snapshot) => {
      const orders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));
      orders.sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
      callback(orders);
    });
  }
}

export const orderService = new OrderService();
