import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      type: {
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        neutral: "bg-slate-100 text-slate-800",
        error: "bg-red-100 text-red-800",
        primary: "bg-blue-100 text-primary",
      },
    },
    defaultVariants: {
      type: "neutral",
    },
  }
);

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ className, type, ...props }) => {
  return (
    <div className={cn(badgeVariants({ type }), className)} {...props} />
  );
};
