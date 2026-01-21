import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { format, parseISO } from 'date-fns';
import { vi } from 'date-fns/locale';

interface TrafficChartProps {
  data: { date: string; visitors: number }[];
}

export const TrafficChart: React.FC<TrafficChartProps> = ({ data }) => {
  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col h-[350px]">
      <div className="mb-6">
          <h3 className="text-lg font-bold text-card-foreground">Visitors</h3>
          <p className="text-sm text-muted-foreground">Lưu lượng truy cập 7 ngày qua</p>
      </div>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
            <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                tickFormatter={(str) => {
                    try {
                        return format(parseISO(str), 'dd/MM', { locale: vi });
                    } catch { return str; }
                }}
            />
            <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                allowDecimals={false}
            />
            <Tooltip
                cursor={{ fill: 'hsl(var(--muted)/0.2)' }}
                contentStyle={{
                    borderRadius: '8px',
                    border: '1px solid hsl(var(--border))',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    backgroundColor: 'hsl(var(--popover))',
                    color: 'hsl(var(--popover-foreground))'
                }}
            />
            <Bar
                dataKey="visitors"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
                barSize={40}
                name="Visitors"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
