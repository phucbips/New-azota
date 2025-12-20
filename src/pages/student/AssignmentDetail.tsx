import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { assignmentService } from '../../services/assignment.service';
import { Assignment } from '../../types';
import { Loading } from '../../components/shared/Loading';
import { ArrowLeft, Clock, Calendar, AlertCircle } from 'lucide-react';
import { formatDate } from '../../lib/formatters';

export const AssignmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const fetchAssignment = async () => {
      if (!id) return;
      try {
        const data = await assignmentService.getAssignmentById(id);
        if (!data) {
          setError('Không tìm thấy bài tập.');
        } else {
          setAssignment(data);
        }
      } catch (err) {
        setError('Có lỗi xảy ra khi tải bài tập.');
      } finally {
        setLoading(false);
      }
    };
    fetchAssignment();

    // Hide scroll hint after 3 seconds
    const timer = setTimeout(() => {
        setShowScrollHint(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <Loading fullScreen message="Đang tải nội dung..." />;

  if (error || !assignment) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
        <div className="bg-red-50 p-4 rounded-full mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Không thể tải bài tập</h3>
        <p className="text-slate-500 mb-6">{error || 'Bài tập không tồn tại hoặc đã bị xóa.'}</p>
        <Link
            to="/student/assignments"
            className="px-6 py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
        >
            Quay lại danh sách
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-20">
      {/* Navigation Header */}
      <div className="flex flex-col gap-2">
         <Link
            to="/student/assignments"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors w-fit group"
         >
            <div className="p-1.5 rounded-full bg-white border border-slate-200 group-hover:border-slate-300 transition-colors shadow-sm">
                <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium text-sm">Quay lại danh sách</span>
         </Link>

         <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mt-2">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    {assignment.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-slate-500">
                    <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>Đăng ngày: {formatDate(assignment.createdAt)}</span>
                    </div>
                    {assignment.dueDate && (
                         <div className="flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100 shadow-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Hạn nộp: {formatDate(assignment.dueDate)}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex-shrink-0">
                 <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                    assignment.status === 'published'
                        ? 'bg-green-50 text-green-700 border-green-200'
                        : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                 }`}>
                    {assignment.status === 'published' ? 'Đang diễn ra' : 'Bản nháp'}
                 </span>
            </div>
         </div>
      </div>

      {/* Description */}
      {assignment.description && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Hướng dẫn làm bài</h3>
            <div className="prose prose-sm prose-slate max-w-none text-slate-600 leading-relaxed">
                {assignment.description}
            </div>
        </div>
      )}

      {/* Embed Content - Mobile UX Refactor */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            Nội dung bài tập
        </h3>

        {/* Mobile-Optimized Wrapper */}
        <div
            className="w-full h-[80dvh] overflow-y-auto overscroll-y-contain relative z-20 bg-white rounded-xl border border-slate-200 shadow-sm"
            style={{ WebkitOverflowScrolling: 'touch' }}
        >
            {/* Scroll Hint Overlay */}
            <div
                className={`absolute inset-0 z-30 pointer-events-none flex items-center justify-center bg-black/10 transition-opacity duration-1000 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}
            >
                 <div className="bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-md text-sm font-medium animate-bounce flex items-center gap-2">
                    <span>Vuốt xuống để xem</span>
                    <span>👇</span>
                 </div>
            </div>

            {assignment.embedUrl ? (
                <iframe
                    src={assignment.embedUrl}
                    title="Assignment Content"
                    scrolling="no"
                    className="w-full border-0"
                    style={{
                        minHeight: '3000px', // Force Huge height for scrolling
                        pointerEvents: 'auto'
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 p-8">
                    <p>Chưa có nội dung nhúng.</p>
                </div>
            )}
        </div>
        <p className="text-xs text-center text-slate-400 mt-2">
            Không thấy nội dung? <a href={assignment.embedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Mở trong tab mới</a>
        </p>
      </div>
    </div>
  );
};
