import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { User } from '../../types';
import { format, subDays, startOfDay, isSameDay } from 'date-fns';
import { vi } from 'date-fns/locale';

interface UserActivityChartProps {
  users: User[];
  days?: number;
}

export const UserActivityChart: React.FC<UserActivityChartProps> = ({ users, days = 7 }) => {
  const data = React.useMemo(() => {
    const today = startOfDay(new Date());
    const chartData = [];

    for (let i = days - 1; i >= 0; i--) {
      const date = subDays(today, i);
      const dayUsers = users.filter(u => {
        if (!u.joinedAt) return false;
        // Check if joinedAt matches this day.
        // Note: Real "activity" would require a lastLogin timestamp history.
        // For now, we will visualize "New Users" or if we have lastLogin, we use that.
        // Since we only have 'joinedAt' reliably for now, let's show "New Registrations".
        // If we want "Active Users", we need a better metric.
        // Let's assume for this mock we count users who joined on this day.
        const joinDate = u.joinedAt.toDate();
        return isSameDay(joinDate, date);
      });

      chartData.push({
        date: format(date, 'dd/MM', { locale: vi }),
        users: dayUsers.length,
      });
    }
    return chartData;
  }, [users, days]);

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Người dùng mới (7 ngày qua)</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Người dùng mới" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
