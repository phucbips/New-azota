import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { NAVIGATION_CONFIG } from '../config/navigation';
import { NotificationList } from '../components/shared/NotificationList';
import { Menu, X, LogOut, Settings, GraduationCap, ShoppingCart, BookOpen, Search } from 'lucide-react';
import { cn } from '../lib/utils';
import { useCart } from '../contexts/CartContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'teacher' | 'student';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role }) => {
  const { user, signOut } = useAuth();
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { cartItems, totalPrice } = useCart();
  const navItems = NAVIGATION_CONFIG[role] || [];

  return (
    <div className="flex h-[100dvh] bg-background text-foreground overflow-hidden font-sans">
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[260px] bg-surface border-r border-border transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 flex flex-col shadow-lg lg:shadow-none",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo Area */}
        <div className="h-[64px] flex items-center px-[24px] border-b border-border shrink-0">
          <Link to="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[6px] bg-primary text-white">
              <GraduationCap className="h-[20px] w-[20px]" />
            </div>
            <span className="font-display font-bold text-[18px] tracking-tight text-foreground">EduPlatform</span>
          </Link>
          <button
            className="ml-auto lg:hidden text-muted-foreground hover:text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Profile Summary (Student) */}
        {role === 'student' && (
            <div className="p-[24px] flex flex-col gap-[16px] border-b border-border">
                <div className="flex gap-[12px] items-center">
                    <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-[48px] h-[48px] rounded-full object-cover border border-border"
                    />
                    <div className="flex flex-col">
                        <h1 className="text-[14px] font-bold text-foreground leading-tight">{user?.displayName}</h1>
                        <p className="text-[12px] text-muted-foreground capitalize">{role} Account</p>
                    </div>
                </div>
            </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 px-[16px] py-[24px] space-y-[4px] overflow-y-auto scrollbar-hide">
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
                  "flex items-center gap-[12px] px-[12px] py-[8px] rounded-[6px] text-[14px] font-medium transition-all group",
                  isActive
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <span className={cn(isActive ? "text-white" : "text-muted-foreground group-hover:text-foreground")}>
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-[18px] h-[18px]" })}
                </span>
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-[16px] border-t border-border mt-auto">
          <Link
            to={`/${role}/settings`}
            className="flex items-center gap-[12px] px-[12px] py-[8px] rounded-[6px] text-[14px] font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-all group"
          >
            <Settings className="w-[18px] h-[18px]" />
            <span>{t('sidebar.settings')}</span>
          </Link>
          <button
            onClick={() => signOut()}
            className="flex w-full items-center gap-[12px] px-[12px] py-[8px] rounded-[6px] text-[14px] font-medium text-destructive hover:bg-destructive/10 transition-all mt-[4px]"
          >
            <LogOut className="w-[18px] h-[18px]" />
            <span>{t('sidebar.logout')}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col h-full relative min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border h-[64px] px-[24px] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-[16px] w-full max-w-xl">
                <button
                    className="lg:hidden text-muted-foreground hover:text-foreground p-2 rounded-[6px] hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="w-5 h-5" />
                </button>

                {/* Page Title / Search Area */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="relative w-full md:w-64 lg:w-96">
                        <div className="absolute inset-y-0 left-0 pl-[12px] flex items-center pointer-events-none">
                            <Search className="w-[16px] h-[16px] text-muted-foreground" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search (⌘K)..."
                            value={searchValue}
                            onChange={(event) => setSearchValue(event.target.value)}
                            className="block w-full pl-[36px] pr-[12px] py-[8px] border border-border bg-surface rounded-[8px] text-[14px] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/12 placeholder:text-muted-foreground text-foreground transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-[16px]">
                {role === 'student' && (
                  <div className="relative group flex items-center">
                    <Link
                      to="/student/cart"
                      className="relative p-[8px] rounded-[6px] text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                    >
                      <ShoppingCart className="w-[20px] h-[20px]" />
                      {cartItems.length > 0 && (
                        <span className="absolute top-0 right-0 flex h-[16px] w-[16px] items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                          {cartItems.length}
                        </span>
                      )}
                    </Link>
                  </div>
                )}

                <NotificationList />

                <div className="h-[24px] w-px bg-border hidden sm:block mx-[8px]"></div>

                <div className="flex items-center gap-[12px]">
                    <div className="text-right hidden sm:block">
                        <p className="text-[13px] font-bold text-foreground leading-none">{user?.displayName}</p>
                        <p className="text-[11px] text-muted-foreground mt-[4px] capitalize tracking-wide">{user?.role}</p>
                    </div>
                    <img
                        src={user?.photoURL}
                        alt="Avatar"
                        className="w-[36px] h-[36px] rounded-full object-cover border border-border"
                    />
                </div>
            </div>
        </header>

        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-y-auto bg-background p-[24px] scroll-smooth relative z-0">
            <div className="max-w-[1280px] mx-auto h-full flex flex-col">
                {children}
            </div>
        </main>
      </div>
    </div>
  );
};
