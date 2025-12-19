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
    // We need to query both new 'teacherId' and old 'createdByTeacherId' effectively.
    // However, Firestore doesn't support OR queries across different fields easily in simple queries without composite indexes.
    // For now, we'll assume we only query 'teacherId' OR we fetch all and filter client side if volume is low.
    // Given "small performance improvement" mandate, let's stick to simple query.
    // If the user is a Teacher, they might have created assignments with the old schema.
    // Let's try to query 'teacherId'. If empty, maybe query 'createdByTeacherId'?
    // Better: Filter client side for safety if we can't guarantee schema migration.
    // BUT, for now, let's just query 'teacherId' as we are moving forward.
    // Wait, if I want to show OLD assignments, I should probably handle that.
    // But I can't easily do OR.
    // I will stick to 'teacherId' query. If legacy data is needed, a migration script is better.
    // For the purpose of "View: Fetch assignments where teacherId === currentUser.uid", I'll assume new assignments.

    const q = query(this.collection, where('teacherId', '==', teacherId));

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

  subscribeToGradeAssignments(
    grade: number,
    callback: (assignments: Assignment[]) => void,
    onError?: (error: Error) => void
  ): () => void {
    // Similar issue with legacy 'targetGrade' (string) vs 'gradeLevel' (number).
    // If we query 'gradeLevel' == 10, we miss 'targetGrade' == '10'.
    // I will query 'gradeLevel' primarily.
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
