// This file allows configuring specific roles and permissions for test accounts
// which might not have been set up via the admin interface.

import { UserRole } from '../types';

interface TestAccountConfig {
  role: UserRole;
  isWhitelisted: boolean;
  grade?: number | null;
}

export const TEST_ACCOUNTS: Record<string, TestAccountConfig> = {
  'test13@gmail.com': {
    role: 'teacher',
    isWhitelisted: true,
  },
  'tet@gmail.com': {
    role: 'student',
    isWhitelisted: true,
    grade: 12, // Pre-assign grade to skip onboarding for testing
  },
};
