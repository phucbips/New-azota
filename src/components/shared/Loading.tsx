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
    ? 'flex justify-center items-center min-h-screen'
    : 'flex justify-center items-center min-h-[80vh]';

  return (
    <div className={containerClass}>
      <div className="text-center">
        <div className="loader mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold gradient-text mb-2">
          {message}
        </h2>
        <p className="text-slate-500">Vui lòng chờ giây lát</p>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ 
  size = 'md' 
}) => {
  const sizeClass = size === 'sm' ? 'loader-sm' : size === 'lg' ? 'w-16 h-16' : '';
  return <div className={`loader ${sizeClass}`}></div>;
};
