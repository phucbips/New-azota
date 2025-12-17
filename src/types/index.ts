import { Timestamp } from 'firebase/firestore';

export type UserRole = 'admin' | 'teacher' | 'student';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: UserRole;
  grade: string | null; // null for admin/teacher, '10', '11', '12' for student
  isWhitelisted: boolean;
  sessionId: string;
  joinedAt: Timestamp;
  isActive?: boolean;
}

export interface Assignment {
  id?: string;
  title: string;
  description: string;
  embedCode: string; // The Azota link
  targetGrade: string; // '10', '11', '12'
  createdByTeacherId: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
