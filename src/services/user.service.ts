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
      joinedAt: userData.joinedAt || Timestamp.now(),
    });
  }

  // Pre-creates a user document (invitation) without a UID (uses email as ID initially or a random ID)
  // Actually, to make lookup easy, let's use the email as the document ID if we can,
  // BUT `createUser` above uses UID.
  // So for invitations, we can create a doc where ID is the email, or just query by email.
  // The plan in AuthContext is to query by email.
  // So we can just create a document with a random ID, but with the email field set.
  async createInvitation(email: string, role: UserRole, grade: string | null): Promise<void> {
    const existing = await this.findUserByEmail(email);
    if (existing) {
       throw new Error('User with this email already exists.');
    }

    // We create a doc with a random ID (auto-generated)
    // We can't set the ID to email because the eventual user doc will be keyed by UID.
    // So we just create a placeholder doc.
    // Wait, `addDoc` is for auto ID. `setDoc` needs ID.
    const newDocRef = doc(this.collection); // Auto ID

    const userData: Omit<User, 'uid'> = {
        email,
        displayName: email.split('@')[0],
        photoURL: `https://ui-avatars.com/api/?name=${email[0]}&background=667eea&color=fff&size=200`,
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
      return userSnap.data() as User;
    }
    return null;
  }

  async updateUser(
    uid: string,
    userData: Partial<Omit<User, 'uid'>>
  ): Promise<void> {
    const userRef = doc(db, COLLECTIONS.USERS, uid);
    await updateDoc(userRef, userData);
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
          callback(docSnap.data() as User);
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
    const q = query(this.collection, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      // We must return the doc data, but also ensure uid is correct if it's the ID
      // If the doc was created with auto-ID (invitation), doc.id is the ID.
      return { uid: userDoc.id, ...userDoc.data() } as User;
    }

    return null;
  }

  subscribeToAllUsers(
      callback: (users: User[]) => void,
      onError?: (error: Error) => void
  ): () => void {
      const q = query(this.collection);
      return onSnapshot(q, (snapshot) => {
          const users = snapshot.docs.map(d => ({ uid: d.id, ...d.data() } as User));
          callback(users);
      }, onError);
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
