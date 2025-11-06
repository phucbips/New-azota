import React, { useState } from 'react';
import { Header } from '../components/shared/Header';
import { LessonsManagement } from '../components/admin/LessonsManagement';
import { WhitelistManagement } from '../components/admin/WhitelistManagement';
import { BookOpen, Users } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lessons' | 'whitelist'>('lessons');

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Header title="Quản lý Hệ thống" />

      <div className="glass p-8 rounded-2xl shadow-xl animate-fadeIn">
        <div className="border-b border-slate-200 mb-6">
          <nav className="flex space-x-2">
            <button
              onClick={() => setActiveTab('lessons')}
              className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all ${
                activeTab === 'lessons'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              Quản lý Bài học
            </button>
            <button
              onClick={() => setActiveTab('whitelist')}
              className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all ${
                activeTab === 'whitelist'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Users className="w-5 h-5" />
              Quản lý Học sinh
            </button>
          </nav>
        </div>

        <div>
          {activeTab === 'lessons' ? <LessonsManagement /> : <WhitelistManagement />}
        </div>
      </div>
    </div>
  );
};
