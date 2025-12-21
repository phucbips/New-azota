import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { UserManagement } from '../../components/admin/UserManagement';
import { useDashboardSearch } from '../../contexts/DashboardSearchContext';

export const AdminUsers: React.FC = () => {
  const { searchQuery, setSearchQuery } = useDashboardSearch();

  return (
    <div className="flex flex-col gap-6 h-full">
      <PageHeader
        title="Quản lý User"
        subtitle="Manage system access and roles across the organization."
      />

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <UserManagement
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
        />
      </div>
    </div>
  );
};
