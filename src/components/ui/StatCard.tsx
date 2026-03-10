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
  return (
    <div className={cn("bg-card rounded-2xl shadow-sm border border-border p-6 flex items-start justify-between hover:shadow-md transition-shadow", className)}>
      <div>
        <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">{title}</p>
        <h3 className="text-3xl font-bold text-card-foreground">{value}</h3>
        {trend && <p className="text-xs text-green-600 mt-1">{trend}</p>}
      </div>
      {icon && (
        <div className="p-3 bg-primary/10 text-primary rounded-2xl">
          {icon}
        </div>
      )}
    </div>
  );
};
