import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { AssignmentManagement } from '../components/teacher/AssignmentManagement';

export const TeacherDashboard: React.FC = () => {
  return (
    <DashboardLayout role="teacher">
      <PageHeader
        title="Quản lý Bài tập"
        subtitle="Tạo và quản lý các bài tập Azota cho học sinh"
      />

      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <AssignmentManagement />
      </div>
    </DashboardLayout>
  );
};
