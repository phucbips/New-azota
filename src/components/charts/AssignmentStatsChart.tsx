import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Assignment } from '../../types';
import { format, subDays, startOfDay, isSameDay } from 'date-fns';
import { vi } from 'date-fns/locale';

interface AssignmentStatsChartProps {
  assignments: Assignment[];
}

export const AssignmentStatsChart: React.FC<AssignmentStatsChartProps> = ({ assignments }) => {
  const data = React.useMemo(() => {
    const today = startOfDay(new Date());
    const chartData = [];

    for (let i = 6; i >= 0; i--) {
      const date = subDays(today, i);
      const count = assignments.filter(a => {
        const createDate = a.createdAt.toDate();
        return isSameDay(createDate, date);
      }).length;

      chartData.push({
        date: format(date, 'dd/MM', { locale: vi }),
        count: count,
      });
    }
    return chartData;
  }, [assignments]);

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Bài tập mới (7 ngày qua)</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Area type="monotone" dataKey="count" stroke="#10b981" fill="#10b981" fillOpacity={0.2} name="Bài tập mới" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
