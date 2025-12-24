import { UserRole } from '../types';

interface TestAccount {
  email: string;
  role: UserRole;
  isWhitelisted: boolean;
}

export const TEST_ACCOUNTS: TestAccount[] = [
  {
    email: 'test13@gmail.com',
    role: 'teacher',
    isWhitelisted: true,
  },
  {
    email: 'tet@gmail.com',
    role: 'student',
    isWhitelisted: true,
  },
];
