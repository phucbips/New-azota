import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Header } from '../components/shared/Header';
import { LessonList } from '../components/student/LessonList';
import { LessonViewer } from '../components/student/LessonViewer';
import { Lesson } from '../types';

export const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

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
              Tài khoản của bạn chưa được kích hoạt
            </p>
            <p className="text-slate-500">
              Vui lòng liên hệ Admin để được phê duyệt truy cập vào các bài học.
            </p>
            <div className="mt-8 inline-block bg-blue-50 px-6 py-3 rounded-xl border border-blue-200">
              <p className="text-sm text-slate-600">
                Email đã đăng ký:{' '}
                <span className="font-bold text-blue-600">{user?.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedLesson) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <Header title={selectedLesson.name} />
        <LessonViewer lesson={selectedLesson} onBack={() => setSelectedLesson(null)} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Header title="Trang học tập" />
      <div className="glass p-8 rounded-2xl shadow-xl animate-fadeIn">
        <h2 className="text-3xl font-bold gradient-text mb-8">Danh sách Bài học</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <LessonList onSelectLesson={setSelectedLesson} />
        </div>
      </div>
    </div>
  );
};
