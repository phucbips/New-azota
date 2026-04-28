import React from 'react';
import {
  LayoutDashboard,
  Users,
  FileText,
  BookOpen,
  MessageSquare,
  UserCircle,
  GraduationCap,
  Settings
} from 'lucide-react';

export interface NavItem {
  labelKey: string; // Translation key
  href: string;
  icon: React.ReactNode;
}

export const NAVIGATION_CONFIG: Record<string, NavItem[]> = {
  admin: [
    { labelKey: 'sidebar.overview', href: '/admin', icon: <LayoutDashboard className="w-6 h-6" /> },
    { labelKey: 'sidebar.users', href: '/admin/users', icon: <Users className="w-6 h-6" /> },
    { labelKey: 'sidebar.assignments', href: '/admin/assignments', icon: <FileText className="w-6 h-6" /> },
    { labelKey: 'sidebar.courses', href: '/admin/courses', icon: <BookOpen className="w-6 h-6" /> },
    { labelKey: 'Quản lý Đơn hàng', href: '/admin/orders', icon: <FileText className="w-6 h-6" /> }, // Can localize later
    { labelKey: 'Quản lý Voucher', href: '/admin/vouchers', icon: <FileText className="w-6 h-6" /> }, // Voucher
    { labelKey: 'sidebar.communication', href: '/admin/communication', icon: <MessageSquare className="w-6 h-6" /> },
    { labelKey: 'Audit Logs', href: '/admin/audit-logs', icon: <FileText className="w-6 h-6" /> }, // Key needs translation update
    { labelKey: 'sidebar.profile', href: '/admin/profile', icon: <UserCircle className="w-6 h-6" /> },
  ],
  teacher: [
    { labelKey: 'sidebar.dashboard', href: '/teacher', icon: <LayoutDashboard className="w-6 h-6" /> },
    { labelKey: 'sidebar.assignments', href: '/teacher/assignments', icon: <FileText className="w-6 h-6" /> },
    { labelKey: 'sidebar.courses', href: '/teacher/courses', icon: <BookOpen className="w-6 h-6" /> },
    { labelKey: 'sidebar.profile', href: '/teacher/profile', icon: <UserCircle className="w-6 h-6" /> },
  ],
  student: [
    { labelKey: 'sidebar.dashboard', href: '/student', icon: <LayoutDashboard className="w-6 h-6" /> },
    { labelKey: 'sidebar.assignments', href: '/student/assignments', icon: <BookOpen className="w-6 h-6" /> },
    { labelKey: 'Khóa học', href: '/courses', icon: <GraduationCap className="w-6 h-6" /> },
    { labelKey: 'sidebar.profile', href: '/student/profile', icon: <UserCircle className="w-6 h-6" /> },
  ],
};
