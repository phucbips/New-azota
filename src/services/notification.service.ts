import {
  collection,
  doc,
  addDoc,
  updateDoc,
  arrayUnion,
  query,
  where,
  orderBy,
  onSnapshot,
  Timestamp,
  limit
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Notification, User } from '../types';

const COLLECTION_NAME = 'notifications';

class NotificationService {
  private collection = collection(db, COLLECTION_NAME);

  async createNotification(notification: Omit<Notification, 'id' | 'createdAt' | 'readBy'>): Promise<void> {
    await addDoc(this.collection, {
      ...notification,
      readBy: [],
      createdAt: Timestamp.now()
    });
  }

  async markAsRead(notificationId: string, userId: string): Promise<void> {
    const ref = doc(this.collection, notificationId);
    await updateDoc(ref, {
      readBy: arrayUnion(userId)
    });
  }

  subscribeToNotifications(
    user: User,
    callback: (notifications: Notification[]) => void
  ): () => void {
    // Complex query: Firestore doesn't support logical OR directly in where clauses easily for mixed fields without multiple queries.
    // However, we can fetch broadly and filter client-side or use separate subscriptions.
    // Strategy: Listen to last 50 notifications and filter in client. simpler for this scale.
    // Or better: Since "targetAudience" is a single field, we can't easily query "all OR role OR specific".

    // Improved Strategy for Firestore:
    // We will listen to all notifications created in the last 30 days (or limit 100)
    // and filter them client side to see if they apply to the user.
    // This avoids complex indexing for now.

    const q = query(
      this.collection,
      orderBy('createdAt', 'desc'),
      limit(100)
    );

    return onSnapshot(q, (snapshot) => {
      const allNotifications = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Notification));

      const userNotifications = allNotifications.filter(n => {
        // Check if user already read it? No, we want to show history too, just marked as read.

        // Audience check
        if (n.targetAudience === 'all') return true;
        if (n.targetAudience === user.role) return true;
        if (n.targetAudience === 'specific' && n.receiverId === user.uid) return true;

        return false;
      });

      callback(userNotifications);
    });
  }
}

export const notificationService = new NotificationService();
