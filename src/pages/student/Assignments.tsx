import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { assignmentService } from '../../services/assignment.service';
import { Course, courseService } from '../../services/course.service';
import { Assignment } from '../../types';
import { BookOpen, ChevronRight, AlertCircle, Clock, ArrowLeft, Maximize, Minimize } from 'lucide-react';
import { formatDate, safeString } from '../../lib/formatters';
import { SubjectFilterBar } from '../../components/student/SubjectFilterBar';
import { StudentSupportWidget } from '../../components/student/StudentSupportWidget';
import { Skeleton } from '../../components/shared/Skeleton';

export const StudentAssignments: React.FC = () => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const searchQuery = (searchParams.get('q') || '').toLowerCase();
  const [allAssignments, setAllAssignments] = useState<Assignment[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [isFetchingAssignments, setIsFetchingAssignments] = useState(true);
  const [isFetchingCourses, setIsFetchingCourses] = useState(true);

  // Filter States
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!user || !user.isWhitelisted) {
        setIsFetchingCourses(false);
        return;
    }
    const unsubCourses = courseService.subscribeToCourses((data) => {
        setCourses(data);
        setIsFetchingCourses(false);
    });
    return () => unsubCourses();
  }, [user]);

  useEffect(() => {
    if (!user || !user.isWhitelisted) {
        setIsFetchingAssignments(false);
        return;
    }
    const unsubAssignments = assignmentService.subscribeToAllAssignments((data) => {
        setAllAssignments(data);
        setIsFetchingAssignments(false);
    });
    return () => unsubAssignments();
  }, [user]);

  const isLoading = isFetchingAssignments || isFetchingCourses;

  const assignments = useMemo(() => {
      if (!user) return [];
      const enrolledCourseIds = user.enrolledCourses || [];
      const activeEnrolledCourses = courses.filter(c => enrolledCourseIds.includes(c.id));

      const allowedAssignmentIds = new Set<string>();
      activeEnrolledCourses.forEach(c => {
          if (c.assignmentIds) {
              c.assignmentIds.forEach(id => allowedAssignmentIds.add(id));
          }
      });

      return allAssignments.filter(a => a.id && allowedAssignmentIds.has(a.id));
  }, [user, courses, allAssignments]);

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
      if (selectedSubject === 'All') return assignments;
      return assignments.filter(a => a.subject === selectedSubject);
  }, [assignments, selectedSubject]);

  const searchedAssignments = useMemo(() => {
      if (!searchQuery) return filteredAssignments;
      return filteredAssignments.filter((assignment) => {
        const haystack = [
          assignment.title,
          assignment.topic,
          assignment.subject,
          assignment.description,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(searchQuery);
      });
  }, [filteredAssignments, searchQuery]);

  const embedHtml = useMemo(() => {
    if (!selectedAssignment) return '';
    const embed = safeString(selectedAssignment.embedUrl);

    if (!embed.startsWith('<iframe')) return embed;

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(embed, 'text/html');
      const iframe = doc.querySelector('iframe');

      if (!iframe) return embed;

      iframe.setAttribute('allowfullscreen', 'true');
      iframe.setAttribute('webkitallowfullscreen', 'true');
      iframe.setAttribute('mozallowfullscreen', 'true');

      const existingAllow = iframe.getAttribute('allow') || '';
      const allowTokens = new Set(
        existingAllow
          .split(';')
          .map((token) => token.trim())
          .filter(Boolean),
      );
      allowTokens.add('fullscreen');
      iframe.setAttribute('allow', Array.from(allowTokens).join('; '));

      iframe.removeAttribute('width');
      iframe.removeAttribute('height');
      iframe.classList.add('w-full', 'h-full');

      return iframe.outerHTML;
    } catch (error) {
      console.error('Failed to normalize embed iframe', error);
      return embed;
    }
  }, [selectedAssignment]);

  // Handle Detail View
  if (selectedAssignment) {
    const embed = embedHtml;
    const title = safeString(selectedAssignment.title);
    const topic = safeString(selectedAssignment.topic);
    const description = safeString(selectedAssignment.description || selectedAssignment.topic);
    const targetGrade = String(selectedAssignment.gradeLevel);
    const subjectTitle = safeString(selectedAssignment.subject || 'Chung');

    if (isFullscreen && selectedAssignment.type === 'native_code') {
        return (
            <div className="fixed inset-0 z-[100] bg-background flex flex-col overflow-hidden animate-in fade-in duration-200">
                <div className="absolute top-4 right-4 z-10">
                    <button
                        onClick={() => setIsFullscreen(false)}
                        className="bg-slate-900/80 hover:bg-slate-900 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all flex items-center gap-2 font-medium"
                    >
                        <Minimize className="w-5 h-5" />
                        Thu nhỏ
                    </button>
                </div>
                <div className="flex-1 w-full relative">
                    <iframe
                        srcDoc={selectedAssignment.embedUrl}
                        className="w-full h-full border-none absolute inset-0"
                        title={title}
                        sandbox="allow-scripts allow-modals allow-forms allow-popups allow-same-origin"
                    />
                </div>
            </div>
        );
    }

    return (
      <>
        <button
          onClick={() => setSelectedAssignment(null)}
          className="mb-4 flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors"
        >
           <ArrowLeft className="w-4 h-4" />
           Back to Assignments {subjectTitle} Grade {targetGrade} • {topic}
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h1>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 min-h-[600px] flex flex-col relative group">
           {description && description !== topic && (
               <div className="mb-6 pr-12">
                   <p className="text-slate-600 leading-relaxed">{description}</p>
               </div>
           )}

           {selectedAssignment.type === 'native_code' && (
               <button
                   onClick={() => setIsFullscreen(true)}
                   className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 rounded-lg transition-colors border border-slate-200 shadow-sm z-10"
                   title="Phóng to (Mở toàn màn hình)"
               >
                   <Maximize className="w-5 h-5" />
               </button>
           )}

           <div className={`flex-1 w-full relative overflow-hidden ${selectedAssignment.type !== 'native_code' ? 'bg-slate-50 rounded-lg border border-slate-200' : 'bg-white rounded-lg border border-slate-200'}`}>
              {selectedAssignment.type === 'native_code' ? (
                  <iframe
                      srcDoc={selectedAssignment.embedUrl}
                      className="w-full h-full border-none absolute inset-0"
                      title={title}
                      sandbox="allow-scripts allow-modals allow-forms allow-popups allow-same-origin"
                  />
              ) : selectedAssignment.type === 'video' ? (
                  <div className="w-full h-full flex items-center justify-center bg-black absolute inset-0">
                      <iframe
                          src={selectedAssignment.embedUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                          className="w-full h-full max-w-4xl max-h-[600px] aspect-video"
                          title={title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                      />
                  </div>
              ) : embed.startsWith('<iframe') ? (
                  <div dangerouslySetInnerHTML={{ __html: embed }} className="w-full h-full absolute inset-0 [&>iframe]:w-full [&>iframe]:h-full" />
              ) : (
                  <iframe
                    src={embed}
                    className="w-full h-full absolute inset-0"
                    title={title}
                    allow="fullscreen"
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

        {isLoading ? (
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-40 w-full" />
                <Skeleton className="h-40 w-full" />
            </div>
        ) : searchedAssignments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {searchedAssignments.map((assignment, index) => (
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
            <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <div className="bg-blue-50 rounded-full p-6 mb-6">
                    <BookOpen className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Bạn chưa có bài tập nào</h3>
                <p className="text-slate-500 max-w-sm mx-auto mb-6">Hãy tham gia hoặc mua thêm khóa học để mở khóa bài tập mới nhé.</p>
                <Link to="/student/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                    Khám phá Khóa học
                </Link>
            </div>
        )}

        {/* Support Widget - Inserted at End of Page Fragment */}
        <StudentSupportWidget />
      </div>
  );
};
