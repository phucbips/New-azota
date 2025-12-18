import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { AssignmentManagement } from '../../components/teacher/AssignmentManagement';

export const TeacherAssignments: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Quản lý Bài tập"
        subtitle="Tạo và quản lý các bài tập Azota cho học sinh"
      />

      <div className="max-w-3xl mx-auto w-full">
        <AssignmentManagement />
      </div>
    </div>
  );
};
