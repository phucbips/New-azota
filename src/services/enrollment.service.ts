import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  Timestamp,
  onSnapshot
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Enrollment } from '../types';

const COLLECTION_NAME = 'enrollments';

class EnrollmentService {
  /**
   * Subscribes to all enrollments.
   */
  subscribeToAllEnrollments(callback: (enrollments: Enrollment[]) => void) {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));

    return onSnapshot(q, (snapshot) => {
      const enrollments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Enrollment[];
      callback(enrollments);
    }, (error) => {
      console.error("Error subscribing to enrollments:", error);
      callback([]);
    });
  }

  /**
   * Subscribes to enrollments for a specific student.
   */
  subscribeToStudentEnrollments(studentId: string, callback: (enrollments: Enrollment[]) => void) {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('studentId', '==', studentId),
      orderBy('createdAt', 'desc')
    );

    return onSnapshot(q, (snapshot) => {
      const enrollments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Enrollment[];
      callback(enrollments);
    }, (error) => {
      console.error("Error subscribing to student enrollments:", error);
      callback([]);
    });
  }

  /**
   * Subscribes to enrollments for a specific course.
   */
  subscribeToCourseEnrollments(courseId: string, callback: (enrollments: Enrollment[]) => void) {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('courseId', '==', courseId),
      orderBy('createdAt', 'desc')
    );

    return onSnapshot(q, (snapshot) => {
      const enrollments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Enrollment[];
      callback(enrollments);
    }, (error) => {
      console.error("Error subscribing to course enrollments:", error);
      callback([]);
    });
  }

  async createEnrollment(enrollmentData: Omit<Enrollment, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const now = Timestamp.now();
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...enrollmentData,
        createdAt: now,
        updatedAt: now
      });
      return docRef.id;
    } catch (error) {
      console.error("Error creating enrollment:", error);
      throw error;
    }
  }

  async updateEnrollmentStatus(id: string, status: Enrollment['status'], paymentMethod?: string): Promise<void> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const updates: any = {
        status,
        updatedAt: Timestamp.now()
      };
      if (paymentMethod) {
          updates.paymentMethod = paymentMethod;
      }
      await updateDoc(docRef, updates);
    } catch (error) {
      console.error("Error updating enrollment status:", error);
      throw error;
    }
  }

  async deleteEnrollment(id: string): Promise<void> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting enrollment:", error);
      throw error;
    }
  }
}

export const enrollmentService = new EnrollmentService();
