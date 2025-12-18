import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { Outlet } from 'react-router-dom';

export const StudentLayout: React.FC = () => {
  return (
    <DashboardLayout role="student">
      <Outlet />
    </DashboardLayout>
  );
};
