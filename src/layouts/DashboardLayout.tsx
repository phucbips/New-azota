import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  Menu, X, LogOut, GraduationCap, Settings, Search
} from 'lucide-react';
import { cn } from '../lib/utils';
import { NotificationList } from '../components/shared/NotificationList';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { NAVIGATION_CONFIG } from '../config/navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'teacher' | 'student';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role }) => {
  const { t } = useTranslation();
  const { user, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');

  // Fetch nav items from config
  const navItems = NAVIGATION_CONFIG[role] || [];

  useEffect(() => {
    setSearchValue(searchParams.get('q') || '');
  }, [location.pathname, searchParams]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    const nextParams = new URLSearchParams(searchParams);
    if (value.trim()) {
      nextParams.set('q', value);
    } else {
      nextParams.delete('q');
    }
    setSearchParams(nextParams, { replace: true });
  };

  return (
    <div className="flex min-h-dvh w-full bg-background text-foreground font-sans overflow-hidden transition-colors duration-300">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-40 w-64 bg-card/80 backdrop-blur-xl border-r border-border flex flex-col transition-transform duration-300 ease-in-out lg:transform-none shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-border/50">
          <div className="bg-primary rounded-xl p-2 mr-3 shadow-md shadow-primary/20">
            <GraduationCap className={cn("w-5 h-5 text-primary-foreground")} />
          </div>
          <h1 className="text-xl font-display font-extrabold tracking-tight text-foreground">EduPlatform</h1>
          <button
            className="ml-auto lg:hidden text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-muted"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Profile Summary */}
        {role === 'student' && (
            <div className="p-6 pb-2 flex flex-col gap-6">
                <div className="flex gap-4 items-center bg-background rounded-2xl p-3 border border-border/50 shadow-sm">
                    <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover shadow-sm bg-muted ring-2 ring-primary/10"
                    />
                    <div className="flex flex-col">
                        <h1 className="text-sm font-bold leading-tight text-foreground truncate">{user?.displayName}</h1>
                        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{role}</p>
                    </div>
                </div>
            </div>
        )}

        {/* Navigation */}
        <nav className={cn("flex-1 px-4 py-6 space-y-1.5 overflow-y-auto scrollbar-hide", role !== 'student' ? 'flex flex-col gap-1.5' : 'flex flex-col gap-1.5')}>
          <div className="px-3 mb-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Menu</p>
          </div>
          {navItems.map((item) => {
            let isActive = false;
            if (item.href === '/student') isActive = location.pathname === '/student';
            else if (item.href === '/admin' || item.href === '/teacher') isActive = location.pathname === item.href;
            else isActive = location.pathname.startsWith(item.href) && item.href !== '#';

            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all group",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                <span className={cn("transition-colors", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground")}>
                    {item.icon}
                </span>
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-border/50 mt-auto bg-muted/10">
          <Link
            to={`/${role}/settings`}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-all group mb-1"
          >
            <Settings className="w-5 h-5" />
            <span className="text-sm font-semibold">Cài đặt</span>
          </Link>
          <button
            onClick={() => signOut()}
            className="flex w-full items-center gap-3 px-3 py-2.5 rounded-xl text-destructive hover:bg-destructive/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-semibold">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col h-full relative min-w-0">
        {/* Sticky Header */}
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 sm:px-8 h-20 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4 w-full max-w-xl">
                <button
                    className="lg:hidden text-muted-foreground hover:text-foreground p-2 rounded-xl hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Page Title / Search Area */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="relative w-full md:w-64 lg:w-96 group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            value={searchValue}
                            onChange={(event) => handleSearchChange(event.target.value)}
                            className="block w-full pl-11 pr-4 py-2.5 border border-border/50 bg-card hover:bg-accent/50 rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder-muted-foreground text-foreground transition-all shadow-sm"
                        />
                    </div>
                </div>
                <h2 className="md:hidden text-xl font-display font-bold text-foreground tracking-tight">EduPlatform</h2>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 sm:gap-6">
                <div className="bg-card rounded-2xl border border-border/50 p-1 shadow-sm">
                   <NotificationList />
                </div>

                {/* User Profile Dropdown / Avatar */}
                <div className="h-8 w-px bg-border/50 hidden sm:block"></div>
                <div className="flex items-center gap-3 bg-card rounded-full p-1.5 pr-4 border border-border/50 shadow-sm cursor-pointer hover:bg-accent/50 transition-colors">
                    <img
                        src={user?.photoURL}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full bg-muted object-cover border border-border"
                    />
                    <div className="text-left hidden sm:block">
                        <p className="text-sm font-bold text-foreground leading-none">{user?.displayName}</p>
                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">{user?.role}</p>
                    </div>
                </div>
            </div>
        </header>

        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-y-auto bg-muted/10 p-4 sm:p-8 scroll-smooth pb-24 relative z-0">
            <div className="max-w-7xl mx-auto h-full flex flex-col">
                {children}
            </div>
        </main>
      </div>
    </div>
  );
};
