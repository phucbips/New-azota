import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  query,
  where,
  getDocs,
  Timestamp,
  deleteDoc,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { COLLECTIONS } from '../config/constants';
import { User, UserRole } from '../types';

class UserService {
  private collection = collection(db, COLLECTIONS.USERS);

  async createUser(uid: string, userData: Omit<User, 'uid'>): Promise<void> {
    const userRef = doc(db, COLLECTIONS.USERS, uid);
    await setDoc(userRef, {
      uid,
      ...userData,
      email: userData.email.toLowerCase(),
      joinedAt: userData.joinedAt || Timestamp.now(),
    });
  }

  // Pre-creates a user document (invitation) without a UID (uses email as ID initially or a random ID)
  async createInvitation(email: string, role: UserRole, grade: string | null): Promise<void> {
    const normalizedEmail = email.toLowerCase();
    const existing = await this.findUserByEmail(normalizedEmail);
    if (existing) {
       throw new Error('User with this email already exists.');
    }

    const newDocRef = doc(this.collection); // Auto ID

    const userData: Omit<User, 'uid'> = {
        email: normalizedEmail,
        displayName: normalizedEmail.split('@')[0],
        photoURL: `https://ui-avatars.com/api/?name=${normalizedEmail[0]}&background=667eea&color=fff&size=200`,
        role,
        grade,
        isWhitelisted: true, // Auto whitelist invited users
        sessionId: '',
        joinedAt: Timestamp.now(),
        isActive: true,
    };

    await setDoc(newDocRef, {
        ...userData,
        uid: newDocRef.id // Temporary UID until real signup
    });
  }

  async deleteUser(uid: string): Promise<void> {
      const userRef = doc(db, COLLECTIONS.USERS, uid);
      await deleteDoc(userRef);
  }

  async getUser(uid: string): Promise<User | null> {
    const userRef = doc(db, COLLECTIONS.USERS, uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      // Ensure uid is always present even if missing in data
      return { uid: userSnap.id, ...userSnap.data() } as User;
    }
    return null;
  }

  async updateUser(
    uid: string,
    userData: Partial<Omit<User, 'uid'>>
  ): Promise<void> {
    const userRef = doc(db, COLLECTIONS.USERS, uid);
    // If email is being updated (rare), normalize it
    const updates = { ...userData };
    if (updates.email) {
        updates.email = updates.email.toLowerCase();
    }
    await updateDoc(userRef, updates);
  }

  subscribeToUser(
    uid: string,
    callback: (user: User | null) => void,
    onError?: (error: Error) => void
  ): () => void {
    const userRef = doc(db, COLLECTIONS.USERS, uid);

    const unsubscribe = onSnapshot(
      userRef,
      (docSnap) => {
        if (docSnap.exists()) {
          // SAFEGUARD: Inject uid from docSnap.id to prevent undefined errors
          callback({ uid: docSnap.id, ...docSnap.data() } as User);
        } else {
          callback(null);
        }
      },
      (error) => {
        console.error('Error subscribing to user:', error);
        onError?.(error);
      }
    );

    return unsubscribe;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const normalizedEmail = email.toLowerCase();
    const q = query(this.collection, where('email', '==', normalizedEmail), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      return { uid: userDoc.id, ...userDoc.data() } as User;
    }

    return null;
  }

  subscribeToAllUsers(
      callback: (users: User[]) => void,
      onError?: (error: Error) => void
  ): () => void {
      // Server-side ordering. Requires index if mixed with filters, but plain sort is fine.
      const q = query(this.collection, orderBy('joinedAt', 'desc'));
      return onSnapshot(q, (snapshot) => {
          const users = snapshot.docs.map(d => ({ uid: d.id, ...d.data() } as User));
          callback(users);
      }, onError);
  }

  // Utility to backfill joinedAt for existing users
  async runMigration(): Promise<void> {
    console.log("Starting user migration...");
    // Get all users (no order)
    const q = query(this.collection);
    const snapshot = await getDocs(q);
    let count = 0;

    for (const docSnap of snapshot.docs) {
      const data = docSnap.data();
      if (!data.joinedAt) {
        console.log(`Migrating user ${docSnap.id} (missing joinedAt)`);
        await updateDoc(docSnap.ref, {
          joinedAt: Timestamp.now()
        });
        count++;
      }
    }
    console.log(`Migration complete. Updated ${count} users.`);
  }

  // Deprecated/Modified methods below to support legacy or specific needs

  async whitelistStudent(email: string): Promise<boolean> {
     // Re-implement if needed, but createInvitation handles new users.
     // For existing users:
     const user = await this.findUserByEmail(email);
     if (!user) return false;
     await this.updateUser(user.uid, { isWhitelisted: true, role: 'student' });
     return true;
  }
}

export const userService = new UserService();
