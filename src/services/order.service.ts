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
    const orderCode = `EDU-${Math.floor(10000 + Math.random() * 90000)}`;

    const data = {
      ...orderData,
      id: newDoc.id,
      orderCode,
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

  async getOrder(id: string): Promise<Order | null> {
      const docRef = doc(db, 'orders', id);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
          return { id: snap.id, ...snap.data() } as Order;
      }
      return null;
  }

  subscribeToOrders(callback: (orders: Order[]) => void): () => void {
    const q = query(this.collection);
    return onSnapshot(q, (snapshot) => {
      const orders = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Order));
      orders.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());
      callback(orders);
    });
  }

  subscribeToUserOrders(userId: string, callback: (orders: Order[]) => void) {
    const q = query(this.collection, where('userId', '==', userId));
    return onSnapshot(q, (snapshot) => {
      const orders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));
      orders.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());
      callback(orders);
    });
  }
}

export const orderService = new OrderService();
