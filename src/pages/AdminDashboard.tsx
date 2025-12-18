import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { UserManagement } from '../components/admin/UserManagement';
import { Search, Filter, Plus } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  return (
    <DashboardLayout role="admin">
      <div className="flex flex-col gap-6 h-full">
        {/* Page Heading & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">All Users</h1>
                <p className="text-slate-500 text-sm mt-1">Manage system access and roles across the organization.</p>
            </div>
            {/* The "Add User" button logic is handled inside UserManagement usually, but for visual match we can lift/duplicate triggers if needed.
                For now, UserManagement has its own "Add" form. We will update UserManagement to match the UI.
            */}
        </div>

        {/* Filters & Search Bar - We can keep this here or move into UserManagement.
            Moving into UserManagement makes state handling easier.
            Let's delegate the visual structure to UserManagement to keep logic cohesive.
        */}

        <UserManagement />
      </div>
    </DashboardLayout>
  );
};
