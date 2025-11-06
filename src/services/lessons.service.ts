import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  Timestamp,
  QuerySnapshot,
  DocumentData,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { COLLECTIONS } from '../config/constants';
import { Lesson } from '../types';

class LessonsService {
  private collection = collection(db, COLLECTIONS.LESSONS);

  async createLesson(
    lessonData: Omit<Lesson, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<void> {
    const newLesson = {
      ...lessonData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    await addDoc(this.collection, newLesson);
  }

  async updateLesson(
    lessonId: string,
    lessonData: Partial<Omit<Lesson, 'id' | 'createdAt'>>
  ): Promise<void> {
    const lessonRef = doc(db, COLLECTIONS.LESSONS, lessonId);
    await updateDoc(lessonRef, {
      ...lessonData,
      updatedAt: Timestamp.now(),
    });
  }

  async deleteLesson(lessonId: string): Promise<void> {
    const lessonRef = doc(db, COLLECTIONS.LESSONS, lessonId);
    await deleteDoc(lessonRef);
  }

  subscribeToLessons(
    callback: (lessons: Lesson[]) => void,
    onError?: (error: Error) => void
  ): () => void {
    const q = query(this.collection);

    const unsubscribe = onSnapshot(
      q,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const lessons = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Lesson[];

        // Sort by updatedAt descending (client-side)
        lessons.sort(
          (a, b) => b.updatedAt.toMillis() - a.updatedAt.toMillis()
        );

        callback(lessons);
      },
      (error) => {
        console.error('Error fetching lessons:', error);
        onError?.(error);
      }
    );

    return unsubscribe;
  }
}

export const lessonsService = new LessonsService();
