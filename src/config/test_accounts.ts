import { UserRole } from '../types';

export const TEST_ACCOUNTS: { email: string; role: UserRole; isWhitelisted: boolean }[] = [
  {
    email: 'test13@gmail.com',
    role: 'teacher',
    isWhitelisted: true
  },
  {
    email: 'tet@gmail.com',
    role: 'student',
    isWhitelisted: true
  }
];
