import React, { useState } from 'react';
import { Header } from '../components/shared/Header';
import { UserManagement } from '../components/admin/UserManagement';
import { Users, BarChart } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  // Since we only need User Management now as per requirements
  // "View basic dashboard stats (Total users, Total assignments)" -> Can be part of UserManagement or a Stats component.
  // "Form to manually create accounts" -> UserManagement.

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Header title="Quản lý Hệ thống (Admin)" />

      <div className="glass p-8 rounded-2xl shadow-xl animate-fadeIn">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
             <Users className="w-6 h-6 text-blue-600" />
             <h2 className="text-xl font-bold text-slate-800">Quản lý Người dùng</h2>
        </div>

        <UserManagement />
      </div>
    </div>
  );
};
