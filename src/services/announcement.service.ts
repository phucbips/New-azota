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
      // To avoid requiring a composite index in Firebase (isActive ASC, createdAt DESC),
      // we just filter by isActive and sort on the client side.
      q = query(
        this.collection,
        where('isActive', '==', true)
      );
    }

    return onSnapshot(q, (snapshot) => {
      let items = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Announcement));

      if (!isAdmin) {
          // Client-side sort by createdAt desc
          items = items.sort((a, b) => {
              const timeA = a.createdAt?.toMillis?.() || 0;
              const timeB = b.createdAt?.toMillis?.() || 0;
              return timeB - timeA;
          });
      }

      callback(items);
    }, (error) => {
        console.error("Error fetching announcements:", error);
    });
  }
}

export const announcementService = new AnnouncementService();
