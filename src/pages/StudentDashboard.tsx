import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { StatusBadge } from '../components/ui/StatusBadge';
import { useAuth } from '../hooks/useAuth';
import { assignmentService } from '../services/assignment.service';
import { Assignment } from '../types';
import { BookOpen, ChevronRight, AlertCircle, Calendar } from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

  useEffect(() => {
    if (!user || !user.grade || !user.isWhitelisted) return;
    const unsubscribe = assignmentService.subscribeToGradeAssignments(user.grade, (data) => {
      setAssignments(data);
    });
    return () => unsubscribe();
  }, [user]);

  // Handle Detail View
  if (selectedAssignment) {
    return (
      <DashboardLayout role="student">
        <button
          onClick={() => setSelectedAssignment(null)}
          className="mb-4 flex items-center gap-2 text-slate-600 hover:text-primary font-medium transition-colors"
        >
           ← Quay lại
        </button>

        <PageHeader
          title={selectedAssignment.title}
          subtitle={`Bài tập dành cho Khối ${selectedAssignment.targetGrade}`}
        />

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 min-h-[600px] flex flex-col">
           <div className="mb-6">
               <p className="text-slate-600">{selectedAssignment.description}</p>
           </div>

           <div className="flex-1 w-full bg-slate-50 rounded-lg border border-slate-200 relative overflow-hidden">
              {selectedAssignment.embedCode.startsWith('<iframe') ? (
                  <div dangerouslySetInnerHTML={{ __html: selectedAssignment.embedCode }} className="w-full h-full absolute inset-0 [&>iframe]:w-full [&>iframe]:h-full" />
              ) : (
                  <iframe
                    src={selectedAssignment.embedCode}
                    className="w-full h-full absolute inset-0"
                    title={selectedAssignment.title}
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
           <h2 className="text-xl font-bold text-slate-900 mb-2">Tài khoản chưa kích hoạt</h2>
           <p className="text-slate-500 max-w-md">Vui lòng liên hệ Admin để được phê duyệt quyền truy cập.</p>
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
           <h2 className="text-xl font-bold text-slate-900 mb-2">Chưa cập nhật Khối lớp</h2>
           <p className="text-slate-500 max-w-md">Vui lòng liên hệ Giáo viên để cập nhật thông tin khối lớp của bạn.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="student">
      <PageHeader
        title="Bài tập của tôi"
        subtitle={`Danh sách bài tập Khối ${user.grade}`}
        action={<StatusBadge type="primary" className="px-3 py-1">Khối {user.grade}</StatusBadge>}
      />

      {assignments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map(assignment => (
            <div
              key={assignment.id}
              onClick={() => setSelectedAssignment(assignment)}
              className="group cursor-pointer bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                {/* <StatusBadge type="neutral">Mới</StatusBadge> */}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {assignment.title}
              </h3>

              <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">
                {assignment.description || 'Không có mô tả chi tiết'}
              </p>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-50">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {assignment.createdAt?.toDate().toLocaleDateString('vi-VN')}
                </span>
                <span className="flex items-center font-medium text-primary group-hover:translate-x-1 transition-transform">
                  Làm bài <ChevronRight className="w-3 h-3 ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64 text-center border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
            <BookOpen className="w-10 h-10 text-slate-300 mb-3" />
            <p className="text-slate-500 font-medium">Chưa có bài tập nào</p>
            <p className="text-sm text-slate-400">Hãy quay lại sau nhé!</p>
        </div>
      )}
    </DashboardLayout>
  );
};
