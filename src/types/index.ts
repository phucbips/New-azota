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
  lastDevice?: string;
  lastLoginAt?: Timestamp; // New field for detailed last login tracking
  enrolledCourses?: string[]; // IDs of courses the user has access to
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

export type AssignmentType = 'embed' | 'video' | 'native_code';

export interface Assignment {
  id?: string;
  title: string;
  subject: string; // New: Subject (Math, etc.)
  topic: string; // Topic/Chapter
  description?: string; // Optional/Deprecated
  type?: AssignmentType; // Make optional for backward compatibility
  embedUrl: string; // Renamed from embedCode (holds URL for embed/video, or default HTML for native_code)
  coverImageUrl?: string; // New
  teacherId: string; // Renamed from createdByTeacherId
  creatorName?: string; // Optional field for displaying the creator name without a lookup
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
