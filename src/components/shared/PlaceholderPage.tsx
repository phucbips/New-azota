import React from 'react';
import { Construction } from 'lucide-react';
import { EmptyState } from './EmptyState';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
      <EmptyState
        title={title}
        description={description || 'Tính năng này đang được phát triển.'}
        icon={Construction}
      />
    </div>
  );
};
