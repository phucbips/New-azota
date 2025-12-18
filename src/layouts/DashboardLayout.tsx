import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, LogOut, LayoutDashboard, Users, BookOpen,
  Settings, GraduationCap, FileText
} from 'lucide-react';
import { cn } from '../lib/utils';
import { SaaSButton } from '../components/ui/SaaSButton';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: Record<string, NavItem[]> = {
  admin: [
    { label: 'Tổng quan', href: '/admin', icon: <LayoutDashboard className="w-5 h-5" /> },
    { label: 'Quản lý User', href: '/admin/users', icon: <Users className="w-5 h-5" /> },
    // { label: 'Cài đặt', href: '/admin/settings', icon: <Settings className="w-5 h-5" /> },
  ],
  teacher: [
    { label: 'Tổng quan', href: '/teacher', icon: <LayoutDashboard className="w-5 h-5" /> },
    { label: 'Bài tập', href: '/teacher/assignments', icon: <BookOpen className="w-5 h-5" /> },
  ],
  student: [
    { label: 'Bài tập của tôi', href: '/student', icon: <GraduationCap className="w-5 h-5" /> },
  ],
};

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'teacher' | 'student';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role }) => {
  const { user, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = NAV_ITEMS[role] || [];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out lg:transform-none flex flex-col",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo Area */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <span>LMS App</span>
          </div>
          <button
            className="ml-auto lg:hidden text-slate-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            // Check if active (exact match or sub-route)
            const isActive = location.pathname === item.href ||
                             (item.href !== '/' && item.href !== '/admin' && item.href !== '/teacher' && item.href !== '/student' && location.pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-primary"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User Profile (Bottom) */}
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 mb-4 px-2">
            <img
              src={user?.photoURL}
              alt="Avatar"
              className="w-10 h-10 rounded-full bg-slate-200"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 truncate">{user?.displayName}</p>
              <p className="text-xs text-slate-500 truncate capitalize">{user?.role}</p>
            </div>
          </div>
          <SaaSButton
            variant="outline"
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 border-slate-200"
            onClick={() => signOut()}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Đăng xuất
          </SaaSButton>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Header (Mobile Only / or Sticky Desktop) */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 lg:hidden flex-shrink-0">
          <button
            className="text-slate-500 p-2 -ml-2 rounded-lg hover:bg-slate-50"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <span className="ml-3 font-semibold text-slate-900">
             {/* Title could be dynamic based on route, but simple for now */}
             LMS Dashboard
          </span>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
