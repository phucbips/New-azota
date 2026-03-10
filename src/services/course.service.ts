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
import { Course } from '../types';

const COLLECTION_NAME = 'courses';

class CourseService {
  /**
   * Subscribes to all courses, ordered by creation date (newest first).
   */
  subscribeToAllCourses(callback: (courses: Course[]) => void) {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));

    return onSnapshot(q, (snapshot) => {
      const courses = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Course[];
      callback(courses);
    }, (error) => {
      console.error("Error subscribing to courses:", error);
      callback([]);
    });
  }

  /**
   * Subscribes to active courses only.
   */
  subscribeToActiveCourses(callback: (courses: Course[]) => void) {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('isActive', '==', true),
      orderBy('createdAt', 'desc')
    );

    return onSnapshot(q, (snapshot) => {
      const courses = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Course[];
      callback(courses);
    }, (error) => {
      console.error("Error subscribing to active courses:", error);
      callback([]);
    });
  }

  async getCourse(id: string): Promise<Course | null> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Course;
      }
      return null;
    } catch (error) {
      console.error("Error fetching course:", error);
      throw error;
    }
  }

  async createCourse(courseData: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const now = Timestamp.now();
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...courseData,
        createdAt: now,
        updatedAt: now
      });
      return docRef.id;
    } catch (error) {
      console.error("Error creating course:", error);
      throw error;
    }
  }

  async updateCourse(id: string, updates: Partial<Omit<Course, 'id' | 'createdAt'>>): Promise<void> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error("Error updating course:", error);
      throw error;
    }
  }

  async deleteCourse(id: string): Promise<void> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting course:", error);
      throw error;
    }
  }
}

export const courseService = new CourseService();
