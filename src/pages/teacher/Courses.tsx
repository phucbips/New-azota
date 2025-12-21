import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { PlaceholderPage } from '../../components/shared/PlaceholderPage';

export const TeacherCourses: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Courses" subtitle="Create and organize teaching materials." />
      <PlaceholderPage title="Courses đang được cập nhật" />
    </div>
  );
};
