import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { UserManagement } from '../../components/admin/UserManagement';

export const AdminUsers: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <PageHeader
        title="Quản lý Học sinh & Người dùng"
        subtitle="Phân loại học sinh theo khối lớp, khóa học và cấp quyền truy cập hệ thống."
      />

      <div className="bg-card rounded-xl shadow-sm border border-border p-6">
        <UserManagement />
      </div>
    </div>
  );
};
