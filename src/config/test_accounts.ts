import { UserRole } from '../types';

interface TestAccount {
  email: string;
  role: UserRole;
  isWhitelisted: boolean;
  grade?: string;
}

export const TEST_ACCOUNTS: Record<string, TestAccount> = {
  'test13@gmail.com': {
    email: 'test13@gmail.com',
    role: 'teacher',
    isWhitelisted: true
  },
  'tet@gmail.com': {
    email: 'tet@gmail.com',
    role: 'student',
    isWhitelisted: true,
    grade: '12'
  }
};
