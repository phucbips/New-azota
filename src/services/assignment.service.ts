import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  Timestamp,
  getDocs,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { COLLECTIONS } from '../config/constants';
import { Assignment } from '../types';

class AssignmentService {
  private collection = collection(db, COLLECTIONS.ASSIGNMENTS);

  async createAssignment(assignment: Omit<Assignment, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const docRef = await addDoc(this.collection, {
      ...assignment,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  }

  async updateAssignment(id: string, updates: Partial<Omit<Assignment, 'id' | 'createdAt'>>): Promise<void> {
    const docRef = doc(db, COLLECTIONS.ASSIGNMENTS, id);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now(),
    });
  }

  async deleteAssignment(id: string): Promise<void> {
    const docRef = doc(db, COLLECTIONS.ASSIGNMENTS, id);
    await deleteDoc(docRef);
  }

  subscribeToTeacherAssignments(
    teacherId: string,
    callback: (assignments: Assignment[]) => void,
    onError?: (error: Error) => void
  ): () => void {
    const q = query(this.collection, where('createdByTeacherId', '==', teacherId));

    return onSnapshot(q, (snapshot) => {
      const assignments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Assignment));
      // Client-side sort by createdAt desc if index not available yet
      assignments.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());
      callback(assignments);
    }, onError);
  }

  subscribeToGradeAssignments(
    grade: string,
    callback: (assignments: Assignment[]) => void,
    onError?: (error: Error) => void
  ): () => void {
    const q = query(this.collection, where('targetGrade', '==', grade));

    return onSnapshot(q, (snapshot) => {
      const assignments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Assignment));
      assignments.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());
      callback(assignments);
    }, onError);
  }
}

export const assignmentService = new AssignmentService();
