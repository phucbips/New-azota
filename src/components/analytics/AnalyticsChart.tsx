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
import { format, parseISO } from 'date-fns';
import { vi } from 'date-fns/locale';

interface AnalyticsChartProps {
  data: { date: string; visitors: number; page_views?: number }[];
}

export const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ data }) => {
  return (
    <div className="w-full h-[400px] bg-card border border-border rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
         {/* Mock legend or title if needed, or leave clean */}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            dy={10}
            tickFormatter={(str) => {
                try {
                    return format(parseISO(str), 'MMM dd', { locale: vi });
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
            contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
            }}
            itemStyle={{ color: 'hsl(var(--foreground))' }}
            labelStyle={{ color: 'hsl(var(--muted-foreground))', marginBottom: '0.5rem' }}
            formatter={(value: number) => [value, 'Visitors']}
            labelFormatter={(label) => {
                 try {
                    return format(parseISO(label), 'EEEE, dd MMMM yyyy', { locale: vi });
                } catch { return label; }
            }}
          />
          <Area
            type="monotone"
            dataKey="visitors"
            stroke="#3b82f6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorVisitors)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
