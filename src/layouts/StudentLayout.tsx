import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { Outlet } from 'react-router-dom';
import { GradeOnboardingModal } from '../components/student/GradeOnboardingModal';
import { SupportWidget } from '../components/student/SupportWidget';

export const StudentLayout: React.FC = () => {
  return (
    <DashboardLayout role="student">
      <GradeOnboardingModal />
      <SupportWidget />
      <Outlet />
    </DashboardLayout>
  );
};
