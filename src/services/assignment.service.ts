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
  orderBy,
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
    // Note: Querying by 'teacherId' (new field)
    // Using orderBy for server-side sorting. May require Composite Index in Firestore.
    const q = query(this.collection, where('teacherId', '==', teacherId), orderBy('createdAt', 'desc'));

    return onSnapshot(q, (snapshot) => {
      const assignments = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          // Legacy field mapping fallback
          teacherId: data.teacherId || data.createdByTeacherId,
          embedUrl: data.embedUrl || data.embedCode,
          gradeLevel: data.gradeLevel || data.targetGrade,
        } as Assignment;
      });
      callback(assignments);
    }, onError);
  }

  subscribeToGradeAssignments(
    grade: number, // Changed to number
    callback: (assignments: Assignment[]) => void,
    onError?: (error: Error) => void
  ): () => void {
    const q = query(this.collection, where('gradeLevel', '==', grade), orderBy('createdAt', 'desc'));

    return onSnapshot(q, (snapshot) => {
      const assignments = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          // Legacy field mapping fallback
          teacherId: data.teacherId || data.createdByTeacherId,
          embedUrl: data.embedUrl || data.embedCode,
          gradeLevel: data.gradeLevel || data.targetGrade,
        } as Assignment;
      });
      callback(assignments);
    }, onError);
  }

  subscribeToAllAssignments(
    callback: (assignments: Assignment[]) => void,
    onError?: (error: Error) => void
  ): () => void {
    const q = query(this.collection, orderBy('createdAt', 'desc'));

    return onSnapshot(q, (snapshot) => {
      const assignments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Assignment));
      callback(assignments);
    }, onError);
  }
}

export const assignmentService = new AssignmentService();
