import React from 'react';
import { Header } from '../components/shared/Header';
import { AssignmentManagement } from '../components/teacher/AssignmentManagement';
import { BookOpen } from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Header title="Trang Giáo viên" />

      <div className="glass p-8 rounded-2xl shadow-xl animate-fadeIn">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
             <BookOpen className="w-6 h-6 text-blue-600" />
             <h2 className="text-xl font-bold text-slate-800">Quản lý Bài tập</h2>
        </div>

        <AssignmentManagement />
      </div>
    </div>
  );
};
