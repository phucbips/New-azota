import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { PlaceholderPage } from '../../components/shared/PlaceholderPage';

export const AdminCourses: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Courses" subtitle="Manage course content and structure." />
      <PlaceholderPage title="Courses đang được chuẩn bị" />
    </div>
  );
};
