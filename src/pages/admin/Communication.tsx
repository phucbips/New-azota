import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { NotificationManager } from '../../components/admin/NotificationManager';
import { AnnouncementManager } from '../../components/admin/AnnouncementManager';
import { MessageSquare, Megaphone, Bell } from 'lucide-react';

export const AdminCommunication: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'notifications' | 'announcements'>('notifications');

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Truyền thông & Thông báo"
        subtitle="Quản lý tin tức trang chủ và gửi thông báo đến người dùng."
      />

      {/* Tabs */}
      <div className="flex border-b border-slate-200">
        <button
            onClick={() => setActiveTab('notifications')}
            className={`px-6 py-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${
                activeTab === 'notifications'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
        >
            <Bell className="w-4 h-4" />
            Gửi thông báo hệ thống
        </button>
        <button
            onClick={() => setActiveTab('announcements')}
            className={`px-6 py-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${
                activeTab === 'announcements'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
        >
            <Megaphone className="w-4 h-4" />
            Quản lý Bảng tin
        </button>
      </div>

      <div className="mt-2">
        {activeTab === 'notifications' ? <NotificationManager /> : <AnnouncementManager />}
      </div>
    </div>
  );
};
