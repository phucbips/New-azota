import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { UserManagement } from '../../components/admin/UserManagement';

export const AdminUsers: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <PageHeader
        title="Quản lý User"
        subtitle="Manage system access and roles across the organization."
      />

      <div className="bg-card rounded-xl shadow-sm border border-border p-6">
        <UserManagement />
      </div>
    </div>
  );
};
