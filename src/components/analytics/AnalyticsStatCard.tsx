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
    <div className={cn("p-6 bg-card border border-border rounded-xl flex flex-col justify-between h-full hover:shadow-md transition-shadow", className)}>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{label}</h3>
      <div className="flex items-end gap-3 mt-3">
        <span className="text-4xl font-semibold text-foreground">{value}</span>
        {trend !== undefined && (
          <span className={cn(
            "text-xs font-semibold px-2 py-0.5 rounded-full flex items-center mb-1.5",
            trend >= 0 ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"
          )}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
    </div>
  );
};
