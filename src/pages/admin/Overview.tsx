import React, { useEffect, useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatCard } from '../../components/ui/StatCard';
import { Users, BookOpen, Monitor, Smartphone, Tablet } from 'lucide-react';
import { userService } from '../../services/user.service';
import { assignmentService } from '../../services/assignment.service';

export const AdminOverview: React.FC = () => {
  const [totalUsers, setTotalUsers] = useState<number | string>('--');
  const [totalAssignments, setTotalAssignments] = useState<number | string>('--');
  const [deviceStats, setDeviceStats] = useState({ PC: 0, iOS: 0, Android: 0 });

  useEffect(() => {
    const unsubscribeUsers = userService.subscribeToAllUsers((users) => {
      setTotalUsers(users.length);

      const stats = { PC: 0, iOS: 0, Android: 0 };
      users.forEach(u => {
        const dev = u.lastDevice;
        if (dev === 'PC') stats.PC++;
        else if (dev === 'iOS') stats.iOS++;
        else if (dev === 'Android') stats.Android++;
        // else ignore or count as PC/Unknown
      });
      setDeviceStats(stats);
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

      <div className="mt-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Thống kê thiết bị</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
                title="PC / Desktop"
                value={deviceStats.PC}
                icon={<Monitor className="w-6 h-6 text-blue-600" />}
                trend="Máy tính"
            />
            <StatCard
                title="iOS (iPhone/iPad)"
                value={deviceStats.iOS}
                icon={<Smartphone className="w-6 h-6 text-gray-600" />}
                trend="Apple Mobile"
            />
            <StatCard
                title="Android"
                value={deviceStats.Android}
                icon={<Smartphone className="w-6 h-6 text-green-600" />}
                trend="Android Mobile"
            />
        </div>
      </div>
    </div>
  );
};
