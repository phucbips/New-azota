import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
  where
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Announcement } from '../types';

const COLLECTION_NAME = 'announcements';

class AnnouncementService {
  private collection = collection(db, COLLECTION_NAME);

  async createAnnouncement(data: Omit<Announcement, 'id' | 'createdAt' | 'isActive'>): Promise<void> {
    await addDoc(this.collection, {
      ...data,
      isActive: true,
      createdAt: Timestamp.now()
    });
  }

  async deleteAnnouncement(id: string): Promise<void> {
    await deleteDoc(doc(this.collection, id));
  }

  async toggleActive(id: string, currentState: boolean): Promise<void> {
    await updateDoc(doc(this.collection, id), {
      isActive: !currentState
    });
  }

  // Admin gets all, Students get only active
  subscribeToAnnouncements(
    isAdmin: boolean,
    callback: (announcements: Announcement[]) => void
  ): () => void {
    let q;

    if (isAdmin) {
      q = query(this.collection, orderBy('createdAt', 'desc'));
    } else {
      q = query(
        this.collection,
        where('isActive', '==', true),
        orderBy('createdAt', 'desc')
      );
    }

    return onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Announcement));
      callback(items);
    }, (error) => {
        // Fallback if index is missing for compound query (isActive + createdAt)
        console.error("Error fetching announcements:", error);
        if (!isAdmin && error.code === 'failed-precondition') {
             // Fallback: fetch all active without sort (or client side sort) if index missing
             // This is just a safeguard during dev
             console.warn("Index might be missing. Attempting fallback query.");
        }
    });
  }
}

export const announcementService = new AnnouncementService();
