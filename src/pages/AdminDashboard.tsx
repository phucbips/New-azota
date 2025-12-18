import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { StatCard } from '../components/ui/StatCard';
import { UserManagement } from '../components/admin/UserManagement';
import { Users, BookOpen } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  return (
    <DashboardLayout role="admin">
      <PageHeader
        title="Quản lý Hệ thống"
        subtitle="Tổng quan và quản lý người dùng"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatCard
          title="Tổng người dùng"
          value="--"
          icon={<Users className="w-6 h-6" />}
          trend="Cập nhật real-time"
        />
        <StatCard
          title="Tổng bài tập"
          value="--"
          icon={<BookOpen className="w-6 h-6" />}
          trend="Toàn hệ thống"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-6">Danh sách Người dùng</h2>
        <UserManagement />
      </div>
    </DashboardLayout>
  );
};
