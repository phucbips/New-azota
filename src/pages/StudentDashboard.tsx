import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, ChevronRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Header } from '../components/shared/Header';
import { assignmentService } from '../services/assignment.service';
import { Assignment } from '../types';

export const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

  useEffect(() => {
    // Check whitelist before subscribing to prevent permission errors
    if (!user || !user.grade || !user.isWhitelisted) return;

    // Subscribe to assignments for the student's grade
    const unsubscribe = assignmentService.subscribeToGradeAssignments(user.grade, (data) => {
      setAssignments(data);
    });

    return () => unsubscribe();
  }, [user]);

  if (!user?.isWhitelisted) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <Header title="Trang học tập" />
        <div className="glass p-8 rounded-2xl shadow-xl animate-fadeIn">
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl mb-6 animate-float">
              <Clock className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Chào mừng, {user?.displayName}!
            </h2>
            <p className="text-slate-700 text-lg mb-2 font-semibold">
              Tài khoản của bạn chưa được kích hoạt.
            </p>
            <p className="text-slate-500">
              Vui lòng liên hệ Admin để được phê duyệt quyền truy cập.
            </p>
            <div className="mt-8 inline-block bg-blue-50 px-6 py-3 rounded-xl border border-blue-200">
              <p className="text-sm text-slate-600">
                Email: <span className="font-bold text-blue-600">{user?.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle case where user is whitelisted but has NO grade
  if (!user.grade) {
      return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
          <Header title="Trang học tập" />
          <div className="glass p-8 rounded-2xl shadow-xl animate-fadeIn">
            <div className="text-center py-16">
              <div className="inline-block p-6 bg-red-100 rounded-full mb-6">
                <AlertCircle className="w-12 h-12 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Chưa cập nhật Khối lớp
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Tài khoản của bạn chưa được phân vào Khối lớp nào. <br/>
                Vui lòng liên hệ Admin hoặc Giáo viên chủ nhiệm để cập nhật thông tin.
              </p>
               <div className="mt-4 inline-block bg-slate-50 px-6 py-3 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-600">
                  Email: <span className="font-bold text-slate-800">{user?.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
  }

  // Detail View (Iframe)
  if (selectedAssignment) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
        <Header title={selectedAssignment.title} />

        <button
          onClick={() => setSelectedAssignment(null)}
          className="self-start mb-4 flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors"
        >
           ← Quay lại danh sách
        </button>

        <div className="glass p-4 rounded-2xl shadow-xl animate-fadeIn flex-1 flex flex-col">
           <div className="mb-4">
               <h2 className="text-2xl font-bold text-slate-800">{selectedAssignment.title}</h2>
               <p className="text-slate-600">{selectedAssignment.description}</p>
           </div>

           <div className="flex-1 w-full bg-slate-100 rounded-xl overflow-hidden min-h-[600px] border border-slate-200 relative">
              {/* Using iframe for Azota link. Azota links often need full page or specific embed handling.
                  Assuming embedCode is a URL or full iframe tag. If it's a URL, we wrap it. */}
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
      </div>
    );
  }

  // List View
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Header title={`Bài tập Khối ${user.grade}`} />

      <div className="glass p-8 rounded-2xl shadow-xl animate-fadeIn">
        <h2 className="text-2xl font-bold gradient-text mb-8">Danh sách Bài tập</h2>

        {assignments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map(assignment => (
                <div
                    key={assignment.id}
                    onClick={() => setSelectedAssignment(assignment)}
                    className="group cursor-pointer bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all transform hover:-translate-y-1"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">
                            {assignment.createdAt?.toDate().toLocaleDateString('vi-VN')}
                        </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {assignment.title}
                    </h3>

                    <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                        {assignment.description || 'Không có mô tả'}
                    </p>

                    <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                        Làm bài ngay <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                </div>
            ))}
            </div>
        ) : (
            <div className="text-center py-12">
                <div className="inline-block p-4 bg-slate-100 rounded-full mb-4">
                    <BookOpen className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-500 text-lg">Chưa có bài tập nào cho khối {user.grade}</p>
            </div>
        )}
      </div>
    </div>
  );
};
