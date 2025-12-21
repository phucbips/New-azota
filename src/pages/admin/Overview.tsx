import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatCard } from '../../components/ui/StatCard';
import { Users, BookOpen } from 'lucide-react';

export const AdminOverview: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Quản lý Hệ thống"
        subtitle="Tổng quan và thống kê"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
};
