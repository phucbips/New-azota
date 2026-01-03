export const TEST_ACCOUNTS: Record<string, { role: 'teacher' | 'student'; grade?: string; isWhitelisted: boolean }> = {
  'test13@gmail.com': {
    role: 'teacher',
    isWhitelisted: true,
  },
  'tet@gmail.com': {
    role: 'student',
    grade: '12',
    isWhitelisted: true,
  },
};
