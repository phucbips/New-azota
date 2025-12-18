import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { Outlet } from 'react-router-dom';

export const TeacherLayout: React.FC = () => {
  return (
    <DashboardLayout role="teacher">
      <Outlet />
    </DashboardLayout>
  );
};
