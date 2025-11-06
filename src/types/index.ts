import { Timestamp } from 'firebase/firestore';

export type UserRole = 'admin' | 'student';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: UserRole;
  isWhitelisted: boolean;
  sessionId: string;
  joinedAt: Timestamp;
  isActive?: boolean;
}

export interface Lesson {
  id?: string;
  name: string;
  description: string;
  embedCode: string;
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
