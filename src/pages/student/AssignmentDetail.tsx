import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { COLLECTIONS } from '../../config/constants';
import { Assignment } from '../../types';
import { safeString } from '../../lib/formatters';
import { ChevronLeft, AlertCircle } from 'lucide-react';
import { Loading } from '../../components/shared/Loading';

export const AssignmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssignment = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, COLLECTIONS.ASSIGNMENTS, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAssignment({ id: docSnap.id, ...docSnap.data() } as Assignment);
        } else {
          setError('Assignment not found');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load assignment');
      } finally {
        setLoading(false);
      }
    };
    fetchAssignment();
  }, [id]);

  if (loading) return <Loading message="Loading assignment..." fullScreen={false} />;

  if (error || !assignment) {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
           <div className="p-4 bg-red-100 rounded-full mb-4">
             <AlertCircle className="w-8 h-8 text-red-600" />
           </div>
           <h2 className="text-xl font-bold text-slate-900 mb-2">Error</h2>
           <p className="text-slate-500 max-w-md">{error || 'Assignment not found'}</p>
           <Link to="/student/assignments" className="mt-4 text-blue-600 font-bold hover:underline">
               Return to List
           </Link>
        </div>
    );
  }

  const embed = safeString(assignment.embedUrl);
  const title = safeString(assignment.title);
  const topic = safeString(assignment.topic);
  const description = safeString(assignment.description || assignment.topic);
  const targetGrade = String(assignment.gradeLevel);

  return (
    <div className="w-full pb-24">
        {/* Back Button */}
        <Link
          to="/student/assignments"
          className="mb-4 inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors touch-manipulation p-2 -ml-2 rounded-lg hover:bg-slate-100"
        >
           <ChevronLeft className="w-5 h-5" />
           Back to Assignments
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-2 mb-6 px-1">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight">{title}</h1>
            <p className="text-slate-500 font-medium">Grade {targetGrade} • {topic}</p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6 flex flex-col gap-6">
           {description && description !== topic && (
               <div className="text-slate-600 leading-relaxed text-sm md:text-base">
                   {description}
               </div>
           )}

           {/* Scroll Wrapper Pattern for iOS Iframe Scrolling */}
           <div
             className="w-full h-[80dvh] overflow-y-auto overscroll-y-contain relative z-20 rounded-lg border border-slate-200 bg-slate-50"
             style={{ WebkitOverflowScrolling: 'touch' }}
           >
              {embed.startsWith('<iframe') ? (
                  <div dangerouslySetInnerHTML={{ __html: embed }} className="w-full h-full min-h-[1200px] [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0" />
              ) : (
                  <iframe
                    src={embed}
                    className="w-full h-full min-h-[1200px] border-0"
                    title={title}
                    scrolling="no" // Force wrapper to handle scroll
                    allowFullScreen
                    style={{ pointerEvents: 'auto' }}
                  />
              )}
           </div>
        </div>
    </div>
  );
};
