import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { assignmentService } from '../../services/assignment.service';
import { Assignment } from '../../types';
import { BookOpen, AlertCircle } from 'lucide-react';
import { SubjectFilter } from '../../components/student/SubjectFilter';
import { AssignmentCard } from '../../components/student/AssignmentCard';

export const StudentAssignments: React.FC = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
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
  const uniqueSubjects = useMemo(() => {
      const subjects = new Set(assignments.map(a => a.subject || 'General'));
      return Array.from(subjects).sort();
  }, [assignments]);

  // Optimized: Use useMemo for filtering
  const filteredAssignments = useMemo(() => {
      if (selectedSubject === 'All') return assignments;
      return assignments.filter(a => (a.subject || 'General') === selectedSubject);
  }, [assignments, selectedSubject]);

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
      <div className="flex flex-col gap-6 pb-24">
        {/* Header */}
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">My Assignments</h1>
            <p className="text-slate-500 text-sm md:text-base">Track your progress and manage your upcoming coursework.</p>
        </div>

        {/* Subject Filter Bar */}
        {assignments.length > 0 && (
            <SubjectFilter
                subjects={uniqueSubjects}
                selectedSubject={selectedSubject}
                onSelectSubject={setSelectedSubject}
            />
        )}

        {/* Assignments Grid */}
        {filteredAssignments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssignments.map((assignment, index) => (
                <AssignmentCard
                    key={assignment.id}
                    assignment={assignment}
                    index={index}
                />
            ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="bg-blue-50 rounded-full p-6 mb-6">
                    <BookOpen className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No assignments found</h3>
                <p className="text-slate-500 max-w-sm mx-auto">
                    {assignments.length > 0
                        ? `No assignments found for "${selectedSubject}". Try selecting another subject.`
                        : "You're all caught up! Check back later for new course materials and tasks."}
                </p>
                {assignments.length > 0 && (
                    <button
                        onClick={() => setSelectedSubject('All')}
                        className="mt-4 text-blue-600 font-bold hover:underline"
                    >
                        Clear Filter
                    </button>
                )}
            </div>
        )}
      </div>
  );
};
