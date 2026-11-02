import { Timestamp } from 'firebase/firestore';

export type UserRole = 'admin' | 'teacher' | 'student';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: UserRole;
  grade: string | null;
  sessionId: string;
  joinedAt: Timestamp;
  lastDevice?: string;
  lastLoginAt?: Timestamp;
  enrolledCourses?: string[];
  isActive?: boolean;
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
  receiverId?: string;
  readBy: string[];
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

export type AssignmentType = 'embed' | 'video' | 'native_code' | 'smart_exam';
export type QuestionType = 'multiple_choice' | 'checkbox' | 'true_false' | 'short_answer' | 'essay';
export type CognitiveLevel = 'NB' | 'TH' | 'VD' | 'VDC';

export interface TrueFalseStatement {
  id: string;
  label: string; // 'a', 'b', 'c', 'd'
  text: string;
  isTrue: boolean;
  level?: CognitiveLevel;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  section?: string; // e.g., "PHẦN I. Trắc nghiệm"
  level?: CognitiveLevel; // NB, TH, VD, VDC
  options?: string[]; // for multiple_choice, checkbox (up to 8 options A-H)
  correctAnswers: string[]; // exact option text(s) for MC/checkbox, or acceptable answers for short_answer (split by |)
  subQuestions?: TrueFalseStatement[]; // for true_false (a, b, c, d)
  explanation?: string; // Lời giải chi tiết
  points: number;
}

export interface Assignment {
  id?: string;
  title: string;
  subject: string;
  topic: string;
  description?: string;
  courseId?: string;
  type?: AssignmentType;
  embedUrl: string;
  questions?: Question[];
  totalPoints?: number;
  timeLimit?: number;
  duration?: number;
  shuffleQuestions?: boolean;
  shuffleOptions?: boolean;
  coverImageUrl?: string;
  teacherId: string;
  creatorName?: string;
  gradeLevel: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
