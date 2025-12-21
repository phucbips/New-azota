import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, LogOut, LayoutDashboard, Users, BookOpen,
  Settings, GraduationCap, FileText, Search, Bell
} from 'lucide-react';
import { cn } from '../lib/utils';
import { DashboardSearchProvider, useDashboardSearch } from '../contexts/DashboardSearchContext';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: Record<string, NavItem[]> = {
  admin: [
    { label: 'Tổng quan', href: '/admin', icon: <LayoutDashboard className="w-6 h-6" /> },
    { label: 'Quản lý User', href: '/admin/users', icon: <Users className="w-6 h-6" /> },
    { label: 'Assignments', href: '/admin/assignments', icon: <FileText className="w-6 h-6" /> },
    { label: 'Courses', href: '#', icon: <BookOpen className="w-6 h-6" /> },
  ],
  teacher: [
    { label: 'Dashboard', href: '/teacher', icon: <LayoutDashboard className="w-6 h-6" /> },
    { label: 'Assignments', href: '/teacher/assignments', icon: <FileText className="w-6 h-6" /> },
    { label: 'Classes', href: '#', icon: <BookOpen className="w-6 h-6" /> },
  ],
  student: [
    { label: 'Home', href: '/student', icon: <LayoutDashboard className="w-6 h-6" /> },
    { label: 'My Assignments', href: '/student/assignments', icon: <BookOpen className="w-6 h-6" /> },
    { label: 'Courses', href: '#', icon: <GraduationCap className="w-6 h-6" /> },
  ],
};

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'teacher' | 'student';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role }) => {
  return (
    <DashboardSearchProvider>
      <DashboardLayoutContent role={role}>{children}</DashboardLayoutContent>
    </DashboardSearchProvider>
  );
};

const DashboardLayoutContent: React.FC<DashboardLayoutProps> = ({ children, role }) => {
  const { user, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useDashboardSearch();

  const navItems = NAV_ITEMS[role] || [];

  return (
    // Updated to use min-h-dvh for mobile browser address bar support
    <div className="flex min-h-dvh w-full bg-[#f5f6f8] text-slate-900 font-sans overflow-hidden">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar (Desktop & Mobile Slide-over) */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ease-in-out lg:transform-none",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <div className="bg-blue-600/10 rounded-lg p-1.5 mr-3">
            <GraduationCap className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className="text-lg font-bold tracking-tight text-slate-900">LMS {role === 'admin' ? 'Admin' : role === 'teacher' ? 'Teacher' : 'Student'}</h1>
          <button
            className="ml-auto lg:hidden text-slate-400 hover:text-slate-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User Profile Summary (Student Sidebar Style) */}
        {role === 'student' && (
            <div className="p-4 flex flex-col gap-6">
                <div className="flex gap-3 items-center px-2">
                    <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover shadow-sm bg-slate-200"
                    />
                    <div className="flex flex-col">
                        <h1 className="text-base font-bold leading-tight text-slate-900">{user?.displayName}</h1>
                        <p className="text-xs font-medium text-slate-500 capitalize">{role} Account</p>
                    </div>
                </div>
            </div>
        )}

        {/* Navigation */}
        <nav className={cn("flex-1 px-4 py-4 space-y-1 overflow-y-auto scrollbar-hide", role !== 'student' ? 'flex flex-col gap-1' : 'flex flex-col gap-2')}>
          {role !== 'student' && (
             // Admin/Teacher Profile in Sidebar Top (Optional/Alternative style)
             <div className="lg:hidden flex items-center gap-3 px-3 py-4 mb-2 border-b border-slate-100">
                <img src={user?.photoURL} className="w-8 h-8 rounded-full bg-slate-200" />
                <div className="flex flex-col">
                    <span className="text-sm font-semibold">{user?.displayName}</span>
                    <span className="text-xs text-slate-500 capitalize">{role}</span>
                </div>
             </div>
          )}

          {navItems.map((item) => {
            // Enhanced Active State Logic
            let isActive = false;

            if (item.href === '/student') {
                isActive = location.pathname === '/student';
            } else if (item.href === '/admin' || item.href === '/teacher') {
                isActive = location.pathname === item.href;
            } else {
                 isActive = location.pathname.startsWith(item.href) && item.href !== '#';
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                  isActive
                    ? "bg-blue-600/10 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <span className={cn("transition-colors", isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-900")}>
                    {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-100 mt-auto">
          <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors group">
            <Settings className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
            <span className="text-sm font-medium group-hover:text-slate-900">Settings</span>
          </Link>
          <button
            onClick={() => signOut()}
            className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-1"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col h-full relative min-w-0">
        {/* Sticky Header */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 h-16 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4 w-full max-w-xl">
                <button
                    className="lg:hidden text-slate-500 hover:text-slate-700 p-1.5 rounded-md hover:bg-slate-100"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Page Title / Search Area */}
                <div className="hidden md:flex items-center gap-2">
                    {/* For Admin/Student search bar often goes here */}
                    {role !== 'teacher' && (
                        <div className="relative w-full md:w-64 lg:w-96">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="w-5 h-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                className="block w-full pl-10 pr-3 py-2 border-none bg-slate-100 rounded-lg text-sm focus:ring-0 placeholder-slate-500 text-slate-900"
                            />
                        </div>
                    )}
                    {role === 'teacher' && (
                         <h2 className="text-lg font-bold text-slate-900 tracking-tight">LMS Teacher Pro</h2>
                    )}
                </div>
                <h2 className="md:hidden text-lg font-bold text-slate-900 tracking-tight">LMS</h2>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors hidden sm:block">
                    <Search className="w-6 h-6" /> {/* Search icon for mobile/tablet if input hidden */}
                </button>
                <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                {/* User Profile Dropdown / Avatar */}
                <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-slate-900 leading-none">{user?.displayName}</p>
                        <p className="text-xs text-slate-500 mt-0.5 capitalize">{user?.role}</p>
                    </div>
                    <img
                        src={user?.photoURL}
                        alt="Avatar"
                        className="w-9 h-9 rounded-full bg-slate-200 object-cover border border-slate-200"
                    />
                </div>
            </div>
        </header>

        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-y-auto bg-[#f5f6f8] p-4 sm:p-8 scroll-smooth pb-24 relative z-0">
            <div className="max-w-7xl mx-auto h-full flex flex-col">
                {children}
            </div>
        </main>
      </div>
    </div>
  );
};
