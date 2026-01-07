import { UserRole } from '../types';

interface TestAccountConfig {
  role: UserRole;
  isWhitelisted: boolean;
  grade?: string | null;
}

export const TEST_ACCOUNTS: Record<string, TestAccountConfig> = {
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
