import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { StatusBadge } from '../components/ui/StatusBadge';
import { useAuth } from '../hooks/useAuth';
import { assignmentService } from '../services/assignment.service';
import { Assignment } from '../types';
import { BookOpen, ChevronRight, AlertCircle, Calendar, Filter, Plus, Clock, AlertTriangle } from 'lucide-react';
import { formatDate, safeString } from '../lib/formatters';

export const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [filteredAssignments, setFilteredAssignments] = useState<Assignment[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'overdue' | 'completed'>('all');

  useEffect(() => {
    if (!user || !user.grade || !user.isWhitelisted) return;
    const unsubscribe = assignmentService.subscribeToGradeAssignments(user.grade, (data) => {
      setAssignments(data);
      setFilteredAssignments(data); // Initial filter
    });
    return () => unsubscribe();
  }, [user]);

  // Filter Logic (Mock logic for now as we don't track status per student yet)
  useEffect(() => {
      if (filter === 'all') {
          setFilteredAssignments(assignments);
      } else {
          // Placeholder: just show all for now, or filter if we had status data
          setFilteredAssignments(assignments);
      }
  }, [filter, assignments]);

  // Handle Detail View
  if (selectedAssignment) {
    const embed = safeString(selectedAssignment.embedCode);
    const title = safeString(selectedAssignment.title);
    const description = safeString(selectedAssignment.description);
    const targetGrade = safeString(selectedAssignment.targetGrade);

    return (
      <DashboardLayout role="student">
        <button
          onClick={() => setSelectedAssignment(null)}
          className="mb-4 flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors"
        >
           ← Back to Assignments
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h1>
                <p className="text-slate-500 mt-2">Grade {targetGrade} Coursework</p>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 min-h-[600px] flex flex-col">
           <div className="mb-6">
               <p className="text-slate-600 leading-relaxed">{description}</p>
           </div>

           <div className="flex-1 w-full bg-slate-50 rounded-lg border border-slate-200 relative overflow-hidden">
              {embed.startsWith('<iframe') ? (
                  <div dangerouslySetInnerHTML={{ __html: embed }} className="w-full h-full absolute inset-0 [&>iframe]:w-full [&>iframe]:h-full" />
              ) : (
                  <iframe
                    src={embed}
                    className="w-full h-full absolute inset-0"
                    title={title}
                    allowFullScreen
                  />
              )}
           </div>
        </div>
      </DashboardLayout>
    );
  }

  // Handle Loading/Empty/Error States
  if (!user?.isWhitelisted) {
    return (
      <DashboardLayout role="student">
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
           <div className="p-4 bg-yellow-100 rounded-full mb-4">
             <AlertCircle className="w-8 h-8 text-yellow-600" />
           </div>
           <h2 className="text-xl font-bold text-slate-900 mb-2">Account Not Active</h2>
           <p className="text-slate-500 max-w-md">Please contact the administrator to approve your access.</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!user.grade) {
    return (
      <DashboardLayout role="student">
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
           <div className="p-4 bg-red-100 rounded-full mb-4">
             <AlertCircle className="w-8 h-8 text-red-600" />
           </div>
           <h2 className="text-xl font-bold text-slate-900 mb-2">Missing Grade Level</h2>
           <p className="text-slate-500 max-w-md">Please contact your teacher to assign your grade level.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="student">
      <div className="flex flex-col gap-6">
        {/* Header & Filters */}
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">My Assignments</h1>
                    <p className="text-slate-500 text-sm md:text-base">Track your progress and manage your upcoming coursework.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 h-10 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors">
                        <Filter className="w-5 h-5" />
                        <span>Filter</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 h-10 rounded-lg bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors">
                        <Plus className="w-5 h-5" />
                        <span className="hidden sm:inline">Submit Work</span>
                    </button>
                </div>
            </div>

            {/* Filter Chips */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button
                    onClick={() => setFilter('all')}
                    className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors font-medium text-sm ${filter === 'all' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'}`}
                >
                    All Assignments
                </button>
                {/*
                REMOVED PENDING/OVERDUE as requested to "remove deadlines"
                */}
            </div>
        </div>

        {filteredAssignments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssignments.map((assignment, index) => (
                <div
                    key={assignment.id}
                    onClick={() => setSelectedAssignment(assignment)}
                    className="group flex flex-col rounded-xl bg-white shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-600/30 transition-all duration-300 cursor-pointer"
                >
                    {/* Cover Image Area */}
                    <div className="h-44 bg-slate-100 relative bg-cover bg-center" style={{ backgroundImage: `url('https://source.unsplash.com/random/800x600?education,book,${index}')` }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-3 right-3">
                            <span className="px-2.5 py-1 rounded-md bg-white/95 text-slate-700 text-xs font-bold shadow-sm backdrop-blur-sm border border-transparent flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-orange-500" />
                                {formatDate(assignment.createdAt)}
                            </span>
                        </div>
                        <div className="absolute bottom-3 left-3">
                            <p className="text-white text-xs font-medium bg-black/30 px-2 py-1 rounded backdrop-blur-md">Grade {safeString(assignment.targetGrade)}</p>
                        </div>
                    </div>

                    <div className="p-5 flex flex-col gap-3 flex-1">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                {safeString(assignment.title)}
                            </h3>
                            <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                                {safeString(assignment.description) || 'Complete the exercises attached in the module.'}
                            </p>
                        </div>

                        {/* REMOVED PROGRESS BAR as requested */}

                        <button className="w-full mt-2 h-10 flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors group-hover:shadow-md mt-auto">
                            Continue
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="bg-blue-50 rounded-full p-6 mb-6">
                    <BookOpen className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No assignments yet</h3>
                <p className="text-slate-500 max-w-sm mx-auto">You're all caught up! Check back later for new course materials and tasks.</p>
            </div>
        )}
      </div>
    </DashboardLayout>
  );
};
