import React from 'react';
import { Assignment } from '../../types';
import { Calendar, CheckCircle, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { formatDate } from '../../lib/formatters';
import { Link } from 'react-router-dom';

interface AssignmentCardProps {
  assignment: Assignment;
}

export const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment }) => {
  const isPublished = assignment.status === 'published';
  const hasDueDate = !!assignment.dueDate;

  return (
    <Link
      to={`/student/assignments/${assignment.id}`}
      className="block w-full relative z-10 group"
    >
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col active:scale-[0.98]">
            {/* Card Header / Image Area */}
            <div className="h-32 bg-slate-100 relative overflow-hidden">
                {assignment.coverImageUrl ? (
                     <img
                        src={assignment.coverImageUrl}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                        <BookOpen className="w-10 h-10 text-blue-200" />
                    </div>
                )}

                {/* Status Badge Overlay */}
                <div className="absolute top-3 right-3 z-10">
                    {assignment.status === 'published' ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/90 text-white backdrop-blur-sm shadow-sm">
                            <CheckCircle className="w-3 h-3" />
                            Đang mở
                        </span>
                    ) : (
                         <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-500/90 text-white backdrop-blur-sm shadow-sm">
                            <Clock className="w-3 h-3" />
                            Sắp tới
                        </span>
                    )}
                </div>
            </div>

            {/* Content Area */}
            <div className="p-4 flex flex-col flex-1">
                <div className="flex-1">
                     <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 uppercase tracking-wide">
                            {assignment.subject || 'Chung'}
                        </span>
                     </div>
                     <h3 className="text-base font-bold text-slate-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                        {assignment.title}
                     </h3>
                     {assignment.description && (
                        <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                            {assignment.description}
                        </p>
                     )}
                </div>

                {/* Footer Info */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                            {hasDueDate ? formatDate(assignment.dueDate) : formatDate(assignment.createdAt)}
                        </span>
                    </div>

                    {/* Fake Button for Visual Affordance */}
                    <div className="flex items-center gap-1 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                        <span>Chi tiết</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                </div>
            </div>
        </div>
    </Link>
  );
};
