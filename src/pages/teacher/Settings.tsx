import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { PlaceholderPage } from '../../components/shared/PlaceholderPage';

export const TeacherSettings: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Settings" subtitle="Manage your teaching preferences." />
      <PlaceholderPage title="Settings đang được chuẩn bị" />
    </div>
  );
};
