import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { PlaceholderPage } from '../../components/shared/PlaceholderPage';

export const StudentCourses: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Courses" subtitle="Explore available courses." />
      <PlaceholderPage title="Courses đang được cập nhật" />
    </div>
  );
};
