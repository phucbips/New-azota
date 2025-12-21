import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { Outlet } from 'react-router-dom';

export const AdminLayout: React.FC = () => {
  return (
    <DashboardLayout role="admin">
      <Outlet />
    </DashboardLayout>
  );
};
