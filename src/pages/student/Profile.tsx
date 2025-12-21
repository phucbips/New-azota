import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { ProfilePage } from '../../components/shared/ProfilePage';

export const StudentProfile: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Profile" subtitle="Manage your personal profile." />
      <ProfilePage />
    </div>
  );
};
