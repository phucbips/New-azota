import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { assignmentService } from '../../services/assignment.service';
import { Assignment } from '../../types';
import { BookOpen, ChevronRight, AlertCircle, Clock, ArrowLeft } from 'lucide-react';
import { formatDate, safeString } from '../../lib/formatters';
import { SubjectFilterBar } from '../../components/student/SubjectFilterBar';
import { StudentSupportWidget } from '../../components/student/StudentSupportWidget';
import { useDashboardSearch } from '../../contexts/DashboardSearchContext';

export const StudentAssignments: React.FC = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const { searchQuery } = useDashboardSearch();

  // Filter States
  const [selectedSubject, setSelectedSubject] = useState('All');

  useEffect(() => {
    // Only fetch if user has a grade
    if (!user || !user.grade || !user.isWhitelisted) return;

    // The service now expects a number for gradeLevel, but user.grade is string '10', '11', '12'
    const gradeNum = parseInt(user.grade, 10);
    if (isNaN(gradeNum)) return;

    const unsubscribe = assignmentService.subscribeToGradeAssignments(gradeNum, (data) => {
      setAssignments(data);
    });
    return () => unsubscribe();
  }, [user]);

  // Extract unique subjects
  const availableSubjects = useMemo(() => {
      const subjects = new Set<string>();
      assignments.forEach(a => {
          if (a.subject) subjects.add(a.subject);
      });
      return Array.from(subjects).sort();
  }, [assignments]);

  // Optimized: Use useMemo for filtering
  const filteredAssignments = useMemo(() => {
      const term = searchQuery.trim().toLowerCase();
      const subjectFiltered = selectedSubject === 'All'
        ? assignments
        : assignments.filter(a => a.subject === selectedSubject);

      if (!term) return subjectFiltered;

      return subjectFiltered.filter((assignment) => {
          const titleMatch = assignment.title?.toLowerCase().includes(term);
          const subjectMatch = assignment.subject?.toLowerCase().includes(term);
          return Boolean(titleMatch || subjectMatch);
      });
  }, [assignments, searchQuery, selectedSubject]);

  // Handle Detail View
  if (selectedAssignment) {
    const embed = safeString(selectedAssignment.embedUrl);
    const title = safeString(selectedAssignment.title);
    const topic = safeString(selectedAssignment.topic);
    const description = safeString(selectedAssignment.description || selectedAssignment.topic);
    const targetGrade = String(selectedAssignment.gradeLevel);

    return (
      <>
        <button
          onClick={() => setSelectedAssignment(null)}
          className="mb-4 flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors"
        >
           <ArrowLeft className="w-4 h-4" />
           Back to Assignments
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h1>
                <p className="text-slate-500 mt-2">Grade {targetGrade} • {topic}</p>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 min-h-[600px] flex flex-col">
           {description && description !== topic && (
               <div className="mb-6">
                   <p className="text-slate-600 leading-relaxed">{description}</p>
               </div>
           )}

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

        {/* Support Widget even in detail view */}
        <StudentSupportWidget />
      </>
    );
  }

  // Handle Loading/Empty/Error States
  if (!user?.isWhitelisted) {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
           <div className="p-4 bg-yellow-100 rounded-full mb-4">
             <AlertCircle className="w-8 h-8 text-yellow-600" />
           </div>
           <h2 className="text-xl font-bold text-slate-900 mb-2">Account Not Active</h2>
           <p className="text-slate-500 max-w-md">Please contact the administrator to approve your access.</p>
        </div>
    );
  }

  if (!user.grade) {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
           <div className="p-4 bg-red-100 rounded-full mb-4">
             <AlertCircle className="w-8 h-8 text-red-600" />
           </div>
           <h2 className="text-xl font-bold text-slate-900 mb-2">Missing Grade Level</h2>
           <p className="text-slate-500 max-w-md">Please select your grade level to continue.</p>
        </div>
    );
  }

  return (
      <div className="flex flex-col gap-6 relative">
        {/* Header & Filters */}
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">My Assignments</h1>
                    <p className="text-slate-500 text-sm md:text-base">Track your progress and manage your upcoming coursework.</p>
                </div>
            </div>

            {/* Subject Filter Bar - Inserted Between Header and Grid */}
            <SubjectFilterBar
                subjects={availableSubjects}
                selectedSubject={selectedSubject}
                onSelectSubject={setSelectedSubject}
            />
        </div>

        {filteredAssignments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {filteredAssignments.map((assignment, index) => (
                <div
                    key={assignment.id}
                    onClick={() => setSelectedAssignment(assignment)}
                    className="group flex flex-col rounded-xl bg-white shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-600/30 transition-all duration-300 cursor-pointer"
                >
                    {/* Optimized Image: Use img with loading="lazy" */}
                    <div className="h-44 bg-slate-100 relative overflow-hidden">
                        <img
                            src={assignment.coverImageUrl || `https://source.unsplash.com/random/800x600?education,book,${index}`}
                            alt="Course cover"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-3 right-3">
                            <span className="px-2.5 py-1 rounded-md bg-white/95 text-slate-700 text-xs font-bold shadow-sm backdrop-blur-sm border border-transparent flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-orange-500" />
                                {formatDate(assignment.createdAt)}
                            </span>
                        </div>
                        <div className="absolute bottom-3 left-3">
                            <p className="text-white text-xs font-medium bg-black/30 px-2 py-1 rounded backdrop-blur-md">Grade {assignment.gradeLevel}</p>
                        </div>
                    </div>

                    <div className="p-5 flex flex-col gap-3 flex-1">
                        <div>
                             <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 uppercase tracking-wide">
                                    {assignment.subject || 'Chung'}
                                </span>
                             </div>
                            <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                {safeString(assignment.title)}
                            </h3>
                            <p className="text-sm text-slate-500 mt-1 line-clamp-2 font-medium">
                                {safeString(assignment.topic)}
                            </p>
                            {assignment.description && (
                                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                                    {safeString(assignment.description)}
                                </p>
                            )}
                        </div>

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
                <h3 className="text-xl font-bold text-slate-900 mb-2">No assignments found</h3>
                <p className="text-slate-500 max-w-sm mx-auto">Try selecting a different subject or check back later.</p>
            </div>
        )}

        {/* Support Widget - Inserted at End of Page Fragment */}
        <StudentSupportWidget />
      </div>
  );
};
