// Gemini API Configuration
export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
export const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

// Collections
export const COLLECTIONS = {
  USERS: 'users',
  ASSIGNMENTS: 'assignments',
} as const;

// Routes
export const ROUTES = {
  LOGIN: '/',
  ADMIN: '/admin',
  TEACHER: '/teacher',
  STUDENT: '/student',
} as const;
