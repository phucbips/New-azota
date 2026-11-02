import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { buttonVariants } from './button';
import type { VariantProps } from 'class-variance-authority';

/**
 * SaaSButton — kept for backwards compatibility.
 * It now shares the exact same styles as <Button /> so the whole app has one button system.
 */
export interface SaaSButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, 'variant'> {
  variant?: 'primary' | 'outline' | 'ghost' | 'destructive' | 'secondary';
  isLoading?: boolean;
}

export const SaaSButton = React.forwardRef<HTMLButtonElement, SaaSButtonProps>(
  ({ className, variant = 'primary', size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="animate-spin" />}
        {children}
      </button>
    );
  }
);
SaaSButton.displayName = "SaaSButton";
