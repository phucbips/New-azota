import { UserRole } from '../types';

interface TestAccountConfig {
  role: UserRole;
  grade?: string | null;
  isWhitelisted: boolean;
}

export const TEST_ACCOUNTS: Record<string, TestAccountConfig> = {
  'test13@gmail.com': {
    role: 'teacher',
    grade: null,
    isWhitelisted: true
  },
  'tet@gmail.com': {
    role: 'student',
    grade: '12',
    isWhitelisted: true
  }
};
