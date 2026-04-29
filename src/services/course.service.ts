import { collection, doc, getDocs, getDoc, setDoc, updateDoc, deleteDoc, query, orderBy, serverTimestamp, onSnapshot, where } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
  category?: string;
  assignmentIds: string[]; // The lessons/assignments bundled in this course
  createdBy: string;
  createdAt: Date | any;
  updatedAt: Date | any;
  isActive: boolean;
  enrollmentCount: number;
}

class CourseService {
  private collection = collection(db, 'courses');

  async createCourse(courseData: Omit<Course, 'id' | 'createdAt' | 'updatedAt' | 'enrollmentCount'>): Promise<string> {
    const newDoc = doc(this.collection);
    const data = {
      ...courseData,
      id: newDoc.id,
      enrollmentCount: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    await setDoc(newDoc, data);
    return newDoc.id;
  }

  async updateCourse(id: string, courseData: Partial<Omit<Course, 'id' | 'createdAt'>>): Promise<void> {
    const docRef = doc(db, 'courses', id);
    await updateDoc(docRef, {
      ...courseData,
      updatedAt: serverTimestamp(),
    });
  }

  async deleteCourse(id: string): Promise<void> {
    await deleteDoc(doc(db, 'courses', id));
  }

  async getCourses(): Promise<Course[]> {
    const q = query(this.collection, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Course));
  }

  async getActiveCourses(): Promise<Course[]> {
    const q = query(this.collection, where('isActive', '==', true));
    const snapshot = await getDocs(q);
    const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Course));
    // Sort in memory to avoid needing a composite index [isActive, createdAt]
    return courses.sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
  }

  subscribeToCourses(callback: (courses: Course[]) => void): () => void {
    const q = query(this.collection);
    return onSnapshot(q, (snapshot) => {
      const courses = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Course));
      courses.sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
      callback(courses);
    });
  }
}

export const courseService = new CourseService();
