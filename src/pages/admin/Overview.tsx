import React, { useEffect, useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatCard } from '../../components/ui/StatCard';
import { Users, BookOpen } from 'lucide-react';
import { userService } from '../../services/user.service';
import { assignmentService } from '../../services/assignment.service';

export const AdminOverview: React.FC = () => {
  const [totalUsers, setTotalUsers] = useState<number | string>('--');
  const [totalAssignments, setTotalAssignments] = useState<number | string>('--');

  useEffect(() => {
    const unsubscribeUsers = userService.subscribeToAllUsers((users) => {
      setTotalUsers(users.length);
    });

    const unsubscribeAssignments = assignmentService.subscribeToAllAssignments((assignments) => {
      setTotalAssignments(assignments.length);
    });

    return () => {
      unsubscribeUsers();
      unsubscribeAssignments();
    };
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Quản lý Hệ thống"
        subtitle="Tổng quan và thống kê"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard
          title="Tổng người dùng"
          value={totalUsers}
          icon={<Users className="w-6 h-6" />}
          trend="Cập nhật real-time"
        />
        <StatCard
          title="Tổng bài tập"
          value={totalAssignments}
          icon={<BookOpen className="w-6 h-6" />}
          trend="Toàn hệ thống"
        />
      </div>
    </div>
  );
};
