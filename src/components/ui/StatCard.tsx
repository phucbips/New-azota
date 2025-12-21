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
    <div className={cn("bg-surface rounded-xl shadow-sm border border-slate-200 p-6 flex items-start justify-between", className)}>
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        {trend && <p className="text-xs text-green-600 mt-1">{trend}</p>}
      </div>
      {icon && (
        <div className="p-3 bg-blue-50 text-primary rounded-lg">
          {icon}
        </div>
      )}
    </div>
  );
};
