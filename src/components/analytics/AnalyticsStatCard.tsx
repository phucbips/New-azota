import React from 'react';
import { cn } from '../../lib/utils';

interface StatCardProps {
  label: string;
  value: number | string;
  trend?: number;
  trendLabel?: string;
  className?: string;
}

export const AnalyticsStatCard: React.FC<StatCardProps> = ({
  label,
  value,
  trend,
  trendLabel = '',
  className
}) => {
  return (
    <div className={cn("p-6 bg-card border border-border rounded-2xl flex flex-col justify-between h-full hover:shadow-md transition-shadow", className)}>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{label}</h3>
      <div className="flex items-end gap-3 mt-3">
        <span className="text-4xl font-bold text-foreground">{value}</span>
        {trend !== undefined && (
          <span className={cn(
            "text-xs font-bold px-2 py-0.5 rounded-full flex items-center mb-1.5",
            trend >= 0 ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "bg-red-500/15 text-red-600 dark:text-red-400"
          )}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
    </div>
  );
};
