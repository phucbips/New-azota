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
    <div className={cn("p-6 bg-card border border-border rounded-lg flex flex-col justify-between h-full", className)}>
      <h3 className="text-sm font-medium text-muted-foreground">{label}</h3>
      <div className="flex items-end gap-3 mt-2">
        <span className="text-3xl font-bold text-foreground">{value}</span>
        {trend !== undefined && (
          <span className={cn(
            "text-xs font-medium px-1.5 py-0.5 rounded flex items-center mb-1.5",
            trend >= 0 ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
          )}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
    </div>
  );
};
