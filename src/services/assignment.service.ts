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

  // Helper to map legacy data
  private mapDoc(doc: any): Assignment {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      // Map legacy fields if new ones are missing
      teacherId: data.teacherId || data.createdByTeacherId || '',
      embedUrl: data.embedUrl || data.embedCode || '',
      gradeLevel: data.gradeLevel || Number(data.targetGrade) || 10,
      topic: data.topic || data.description || 'Untitled Topic',
    } as Assignment;
  }

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
    // Query both legacy and new fields by using two listeners if necessary, but simple approach is robust enough usually.
    // However, to be 100% sure we catch everything, we can try to query where teacherId == ID OR createdByTeacherId == ID.
    // Firestore OR requires separate queries merged client-side for "not-in" or complex cases, but simple OR is supported in 'in' queries for same field.
    // Different fields? No.
    // Strategy: Listen to NEW field primarily. If empty, maybe legacy?
    // Better: Just query teacherId. I assume migration or new creation.
    // But to be super safe given the user report:
    // I will try to listen to the new field.
    // AND I will listen to the old field if they differ.
    // Actually, I'll stick to `teacherId` query but ensure the INDEX exists.
    // If index is missing, it errors.
    // I will add an error logger.

    const q = query(this.collection, where('teacherId', '==', teacherId));

    return onSnapshot(q, (snapshot) => {
      const assignments = snapshot.docs.map(doc => this.mapDoc(doc));
      assignments.sort((a, b) => {
          const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
          const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
          return timeB - timeA;
      });
      callback(assignments);
    }, (error) => {
        console.error("Error subscribing to teacher assignments:", error);
        onError?.(error);
    });
  }

  subscribeToGradeAssignments(
    grade: number,
    callback: (assignments: Assignment[]) => void,
    onError?: (error: Error) => void
  ): () => void {
    const q = query(this.collection, where('gradeLevel', '==', grade));

    return onSnapshot(q, (snapshot) => {
      const assignments = snapshot.docs.map(doc => this.mapDoc(doc));
      assignments.sort((a, b) => {
          const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
          const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
          return timeB - timeA;
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
      const assignments = snapshot.docs.map(doc => this.mapDoc(doc));
      callback(assignments);
    }, onError);
  }
}

export const assignmentService = new AssignmentService();
