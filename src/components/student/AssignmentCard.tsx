import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight } from 'lucide-react';
import { formatDate, safeString } from '../../lib/formatters';
import { Assignment } from '../../types';

interface AssignmentCardProps {
  assignment: Assignment;
  index: number;
}

export const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment, index }) => {
  return (
    // Layering Audit: Relative container
    <div className="relative h-full group transform transition-all duration-300 active:scale-95">
      {/* Click Area: Absolute Overlay Link */}
      <Link
        to={`/student/assignments/${assignment.id}`}
        className="absolute inset-0 z-30 w-full h-full cursor-pointer"
        aria-label={`View assignment: ${safeString(assignment.title)}`}
      />

      {/* Visual Content */}
      <div className="flex flex-col h-full rounded-xl bg-white shadow-sm border border-slate-200 overflow-hidden group-hover:shadow-lg group-hover:border-blue-600/30 transition-all pointer-events-none">

        {/* Decorative Background */}
        <div className="h-44 bg-slate-100 relative overflow-hidden z-0">
            <img
                src={assignment.coverImageUrl || `https://source.unsplash.com/random/800x600?education,book,${index}`}
                alt="Course cover"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <div className="absolute top-3 left-3">
                <span className="px-2 py-1 rounded-md bg-white/95 text-blue-700 text-xs font-bold shadow-sm backdrop-blur-sm border border-transparent">
                    {assignment.subject || 'General'}
                </span>
            </div>

            <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 rounded-md bg-white/95 text-slate-700 text-xs font-bold shadow-sm backdrop-blur-sm border border-transparent flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    {formatDate(assignment.createdAt)}
                </span>
            </div>
        </div>

        <div className="p-5 flex flex-col gap-3 flex-1 bg-white relative z-10">
            <div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                    {safeString(assignment.title)}
                </h3>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2 font-medium">
                    {safeString(assignment.topic)}
                </p>
            </div>

            {/* Visual Button */}
            <div className="w-full mt-auto h-10 flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white text-sm font-bold group-hover:bg-blue-700 transition-colors">
                Continue
                <ChevronRight className="w-4 h-4" />
            </div>
        </div>
      </div>
    </div>
  );
};
