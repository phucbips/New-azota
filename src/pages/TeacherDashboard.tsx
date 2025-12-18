import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { AssignmentManagement } from '../components/teacher/AssignmentManagement';
import { ChevronRight } from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  return (
    <DashboardLayout role="teacher">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-6 text-sm">
        <a className="text-slate-500 hover:text-blue-600 transition-colors" href="#">Home</a>
        <ChevronRight className="w-4 h-4 text-slate-400" />
        <a className="text-slate-500 hover:text-blue-600 transition-colors" href="#">Assignments</a>
        <ChevronRight className="w-4 h-4 text-slate-400" />
        <span className="text-slate-900 font-medium">Create New</span>
      </nav>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Create New Assignment</h1>
            <p className="text-slate-500 mt-2">Fill in the details below to publish a new task for your students.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <AssignmentManagement />
      </div>
    </DashboardLayout>
  );
};
