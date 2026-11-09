import React from 'react';
import { cn } from '../../lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string; // Backwards compatibility or alias for subtitle
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, subtitle, action, className }) => {
  return (
    <div className={cn("mb-6 flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="min-w-0">
        <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{title}</h1>
        {(subtitle || description) && <p className="mt-1 text-sm text-muted-foreground">{subtitle || description}</p>}
      </div>
      {action && (
        <div className="flex flex-shrink-0 items-center gap-2">
          {action}
        </div>
      )}
    </div>
  );
};
