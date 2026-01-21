import React, { useEffect, useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatCard } from '../../components/ui/StatCard';
import { Users, BookOpen, Monitor, Smartphone, AlertCircle, Clock } from 'lucide-react';
import { userService } from '../../services/user.service';
import { assignmentService } from '../../services/assignment.service';
import { useTranslation } from 'react-i18next';
import { User, Assignment } from '../../types';
import { UserActivityChart } from '../../components/charts/UserActivityChart';
import { AssignmentStatsChart } from '../../components/charts/AssignmentStatsChart';

export const AdminOverview: React.FC = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [deviceStats, setDeviceStats] = useState({ PC: 0, iOS: 0, Android: 0 });

  useEffect(() => {
    const unsubscribeUsers = userService.subscribeToAllUsers((fetchedUsers) => {
      setUsers(fetchedUsers);

      const stats = { PC: 0, iOS: 0, Android: 0 };
      fetchedUsers.forEach(u => {
        const dev = u.lastDevice;
        if (dev === 'PC') stats.PC++;
        else if (dev === 'iOS') stats.iOS++;
        else if (dev === 'Android') stats.Android++;
      });
      setDeviceStats(stats);
    });

    const unsubscribeAssignments = assignmentService.subscribeToAllAssignments((fetchedAssignments) => {
      setAssignments(fetchedAssignments);
    });

    return () => {
      unsubscribeUsers();
      unsubscribeAssignments();
    };
  }, []);

  // Mock "Due Soon" logic (taking latest 3 created assignments as a placeholder for due dates)
  const recentAssignments = assignments.slice(0, 3);

  return (
    <div className="flex flex-col gap-6 pb-10">
      <PageHeader
        title={t('admin.title')}
        subtitle={t('admin.subtitle')}
      />

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title={t('admin.total_users')}
          value={users.length}
          icon={<Users className="w-6 h-6" />}
          trend={t('admin.trend_realtime')}
        />
        <StatCard
          title={t('admin.total_assignments')}
          value={assignments.length}
          icon={<BookOpen className="w-6 h-6" />}
          trend={t('admin.trend_system')}
        />
         <StatCard
          title="Thiết bị PC"
          value={deviceStats.PC}
          icon={<Monitor className="w-6 h-6 text-blue-600" />}
          trend="Đang hoạt động"
        />
         <StatCard
          title="Thiết bị Mobile"
          value={deviceStats.iOS + deviceStats.Android}
          icon={<Smartphone className="w-6 h-6 text-green-600" />}
          trend="iOS & Android"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <UserActivityChart users={users} />
        <AssignmentStatsChart assignments={assignments} />
      </div>

      {/* Bottom Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        {/* Recent/Due Soon Widget */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-4">
             <Clock className="w-5 h-5 text-amber-500" />
             <h3 className="text-lg font-bold text-slate-800">Bài tập mới nhất</h3>
          </div>
          {recentAssignments.length > 0 ? (
            <div className="flex flex-col gap-3">
              {recentAssignments.map(a => (
                <div key={a.id} className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-medium text-slate-800">{a.title}</p>
                    <p className="text-xs text-slate-500">{a.subject} - {a.gradeLevel ? `Khối ${a.gradeLevel}` : 'Chung'}</p>
                  </div>
                  <span className="text-xs bg-white px-2 py-1 rounded border border-slate-200">Mới</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-sm italic">Chưa có dữ liệu.</p>
          )}
        </div>

        {/* System Health / Alerts Widget */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
           <div className="flex items-center gap-2 mb-4">
             <AlertCircle className="w-5 h-5 text-red-500" />
             <h3 className="text-lg font-bold text-slate-800">Cần chú ý</h3>
          </div>
          <div className="flex flex-col gap-3">
             <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                Không có cảnh báo hệ thống nghiêm trọng.
             </div>
             <div className="p-3 bg-blue-50 text-blue-700 rounded-lg text-sm">
                Hệ thống hoạt động bình thường.
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
