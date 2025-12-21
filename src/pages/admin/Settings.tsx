import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { PlaceholderPage } from '../../components/shared/PlaceholderPage';

export const AdminSettings: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Settings" subtitle="Configure system preferences." />
      <PlaceholderPage title="Settings đang được hoàn thiện" />
    </div>
  );
};
