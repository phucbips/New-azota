import { UserRole } from '../types';

export const TEST_ACCOUNTS: Record<string, { role: UserRole; isWhitelisted: boolean; grade?: string | null }> = {
  'test13@gmail.com': {
    role: 'teacher',
    isWhitelisted: true,
    grade: null,
  },
  'tet@gmail.com': {
    role: 'student',
    isWhitelisted: true,
    grade: '12',
  },
};
