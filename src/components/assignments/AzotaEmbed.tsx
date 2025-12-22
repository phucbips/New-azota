import React from 'react';
import { cn } from '@/lib/utils';

interface AzotaEmbedProps {
  src: string;
  className?: string;
  debugMode?: boolean;
}

export function AzotaEmbed({ src, className, debugMode = true }: AzotaEmbedProps) {
  return (
    <div className={cn("relative w-full h-full min-h-[500px]", className)}>
      <iframe
        src={src}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        title="Azota Exam"
      />

      {/* Security Mask - Hides "Exam Code" */}
      <div
        className={cn(
          "absolute z-10",
          // Mobile positioning (Arbitrary values)
          "top-[180px] left-[10px] w-[120px] h-[30px]",
          // Desktop positioning (Arbitrary values)
          "md:top-[200px] md:left-[20px] md:w-[150px] md:h-[40px]",

          // Debug Mode Styles
          debugMode
            ? "bg-red-500/50 border-2 border-red-700"
            : "bg-white"
        )}
      />
    </div>
  );
}
