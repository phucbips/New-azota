import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { Outlet } from 'react-router-dom';
import { GradeOnboardingModal } from '../components/student/GradeOnboardingModal';

export const StudentLayout: React.FC = () => {
  return (
    <DashboardLayout role="student">
      <GradeOnboardingModal />
      <Outlet />
    </DashboardLayout>
  );
};
