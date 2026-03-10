import { Timestamp } from 'firebase/firestore';

export type UserRole = 'admin' | 'teacher' | 'student';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: UserRole;
  grade: string | null; // null for admin/teacher, '10', '11', '12' for student. Keeping as string for now to avoid massive refactor of user service.
  isWhitelisted: boolean;
  sessionId: string;
  joinedAt: Timestamp;
  isActive?: boolean;
  lastDevice?: string;
  lastLoginAt?: Timestamp; // New field for detailed last login tracking
  deviceHistory?: {
    device: string;
    timestamp: Timestamp;
  }[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success';
  targetAudience: 'all' | 'admin' | 'teacher' | 'student' | 'specific';
  receiverId?: string; // If specific
  readBy: string[]; // Array of user UIDs
  createdAt: Timestamp;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  authorId: string;
  createdAt: Timestamp;
  isActive: boolean;
}

export interface Assignment {
  id?: string;
  title: string;
  subject: string; // New: Subject (Math, etc.)
  topic: string; // Topic/Chapter
  description?: string; // Optional/Deprecated
  embedUrl: string; // Renamed from embedCode
  coverImageUrl?: string; // New
  teacherId: string; // Renamed from createdByTeacherId
  gradeLevel: number; // Changed from targetGrade (string) to number
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

export interface Course {
  id?: string;
  title: string;
  description: string;
  price: number;
  teacherId: string;
  coverImageUrl?: string;
  isActive: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Enrollment {
  id?: string;
  courseId: string;
  studentId: string;
  status: 'pending' | 'paid' | 'cancelled';
  amount: number;
  paymentMethod?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
