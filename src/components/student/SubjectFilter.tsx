import React from 'react';
import { cn } from '../../lib/utils';

interface SubjectFilterProps {
  subjects: string[];
  selectedSubject: string;
  onSelectSubject: (subject: string) => void;
}

export const SubjectFilter: React.FC<SubjectFilterProps> = ({
  subjects,
  selectedSubject,
  onSelectSubject
}) => {
  const allSubjects = ['All', ...subjects];

  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-2 min-w-max px-1">
        {allSubjects.map((subject) => (
          <button
            key={subject}
            onClick={() => onSelectSubject(subject)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
              selectedSubject === subject
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};
