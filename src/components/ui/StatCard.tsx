import React from 'react';
import { cn } from '../../lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: string; // Optional trend string like "+5%"
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, className }) => {
  const isNegative = trend?.trim().startsWith('-');
  return (
    <div className={cn("rounded-xl border border-border bg-card p-5", className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{title}</p>
        {icon && <div className="text-muted-foreground [&_svg]:h-4 [&_svg]:w-4">{icon}</div>}
      </div>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground tabular-nums">{value}</p>
      {trend && (
        <p className={cn("mt-1 text-xs font-medium", isNegative ? "text-destructive" : "text-success")}>{trend}</p>
      )}
    </div>
  );
};
