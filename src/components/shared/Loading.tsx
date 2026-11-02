import React from 'react';

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  message = 'Đang tải...',
  fullScreen = false
}) => {
  const containerClass = fullScreen
    ? 'flex min-h-screen items-center justify-center bg-background'
    : 'flex min-h-[60vh] items-center justify-center';

  return (
    <div className={containerClass}>
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="loader" />
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({
  size = 'md'
}) => {
  const sizeClass = size === 'sm' ? 'loader-sm' : size === 'lg' ? 'w-12 h-12' : '';
  return <div className={`loader ${sizeClass}`}></div>;
};
