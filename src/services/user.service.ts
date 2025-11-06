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
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { COLLECTIONS } from '../config/constants';
import { User } from '../types';

class UserService {
  private collection = collection(db, COLLECTIONS.USERS);

  async createUser(uid: string, userData: Omit<User, 'uid'>): Promise<void> {
    const userRef = doc(db, COLLECTIONS.USERS, uid);
    await setDoc(userRef, {
      uid,
      ...userData,
      joinedAt: Timestamp.now(),
    });
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
      return { uid: userDoc.id, ...userDoc.data() } as User;
    }

    return null;
  }

  async whitelistStudent(email: string): Promise<boolean> {
    const user = await this.findUserByEmail(email);

    if (!user) {
      throw new Error('Không tìm thấy người dùng. Họ phải đăng nhập ít nhất 1 lần.');
    }

    if (user.role !== 'student') {
      throw new Error('Chỉ có thể kích hoạt tài khoản học sinh.');
    }

    if (user.isWhitelisted) {
      throw new Error('Tài khoản đã được kích hoạt trước đó.');
    }

    await this.updateUser(user.uid, { isWhitelisted: true });
    return true;
  }

  async removeFromWhitelist(uid: string): Promise<void> {
    await this.updateUser(uid, { isWhitelisted: false });
  }

  subscribeToWhitelistedStudents(
    callback: (students: User[]) => void,
    onError?: (error: Error) => void
  ): () => void {
    const q = query(
      this.collection,
      where('isWhitelisted', '==', true),
      where('role', '==', 'student')
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const students = snapshot.docs.map(
          (doc) => ({ uid: doc.id, ...doc.data() } as User)
        );
        callback(students);
      },
      (error) => {
        console.error('Error fetching whitelisted students:', error);
        onError?.(error);
      }
    );

    return unsubscribe;
  }
}

export const userService = new UserService();
