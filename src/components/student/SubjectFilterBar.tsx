import React from 'react';

interface SubjectFilterBarProps {
  subjects: string[];
  selectedSubject: string;
  onSelectSubject: (subject: string) => void;
}

export const SubjectFilterBar: React.FC<SubjectFilterBarProps> = ({
  subjects,
  selectedSubject,
  onSelectSubject
}) => {
  const allSubjects = ['All', ...subjects];

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide mb-6 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex gap-2.5">
        {allSubjects.map((subject) => {
            const isActive = selectedSubject === subject;
            return (
              <div
                key={subject}
                onClick={() => onSelectSubject(subject)}
                className={`
                   px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer select-none border
                   ${isActive
                     ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20'
                     : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                   }
                `}
              >
                {subject}
              </div>
            );
        })}
      </div>
    </div>
  );
};
