import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatCard } from '../../components/ui/StatCard';
import { BookOpen, Users } from 'lucide-react';

export const TeacherOverview: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Tổng quan Giáo viên"
        subtitle="Theo dõi hoạt động lớp học"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard
          title="Bài tập đang kích hoạt"
          value="--"
          icon={<BookOpen className="w-6 h-6" />}
        />
        <StatCard
          title="Tổng học sinh"
          value="--"
          icon={<Users className="w-6 h-6" />}
        />
      </div>
    </div>
  );
};
