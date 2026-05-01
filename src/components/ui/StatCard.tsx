import React from 'react';
import { cn } from '../../lib/utils';
import { Card, CardContent } from './card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, className }) => {
  return (
    <Card className={cn("flex flex-col justify-between", className)}>
      <CardContent className="p-[24px] flex flex-col h-full">
        <div className="flex items-center justify-between mb-[16px]">
          <h3 className="text-[14px] font-medium text-muted-foreground">{title}</h3>
          {icon && (
            <div className="w-[40px] h-[40px] rounded-[8px] bg-accent flex items-center justify-center text-foreground">
              {icon}
            </div>
          )}
        </div>
        <div>
          <p className="text-[32px] font-bold font-display text-foreground">{value}</p>
          {trend && <p className="text-[13px] text-success mt-[4px]">{trend}</p>}
        </div>
      </CardContent>
    </Card>
  );
};
