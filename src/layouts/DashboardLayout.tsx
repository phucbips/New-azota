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
import { ShoppingCart, BookOpen } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'teacher' | 'student';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role }) => {
  const { t } = useTranslation();
  const { user, signOut } = useAuth();
  const { cartItems, totalPrice } = useCart();
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
        "fixed lg:static inset-y-0 left-0 z-40 w-64 bg-card border-r border-border flex flex-col transition-transform duration-300 ease-in-out lg:transform-none",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-border">
          <div className="bg-primary/10 rounded-lg p-1.5 mr-3">
            <GraduationCap className={cn("w-6 h-6 text-primary")} />
          </div>
          <h1 className="text-lg font-bold tracking-tight text-foreground">LMS {role === 'admin' ? 'Admin' : role === 'teacher' ? 'Teacher' : 'Student'}</h1>
          <button
            className="ml-auto lg:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User Profile Summary */}
        {role === 'student' && (
            <div className="p-4 flex flex-col gap-6">
                <div className="flex gap-3 items-center px-2">
                    <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover shadow-sm bg-muted"
                    />
                    <div className="flex flex-col">
                        <h1 className="text-base font-bold leading-tight text-foreground">{user?.displayName}</h1>
                        <p className="text-xs font-medium text-muted-foreground capitalize">{role} Account</p>
                    </div>
                </div>
            </div>
        )}

        {/* Navigation */}
        <nav className={cn("flex-1 px-4 py-4 space-y-1 overflow-y-auto scrollbar-hide", role !== 'student' ? 'flex flex-col gap-1' : 'flex flex-col gap-2')}>
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
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <span className={cn("transition-colors", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")}>
                    {item.icon}
                </span>
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-border mt-auto">
          <Link
            to={`/${role}/settings`}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted transition-colors group"
          >
            <Settings className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
            <span className="text-sm font-medium group-hover:text-foreground">{t('sidebar.settings')}</span>
          </Link>
          <button
            onClick={() => signOut()}
            className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-destructive hover:bg-destructive/10 transition-colors mt-1"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">{t('sidebar.logout')}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col h-full relative min-w-0">
        {/* Sticky Header */}
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border px-4 sm:px-8 h-16 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4 w-full max-w-xl">
                <button
                    className="lg:hidden text-muted-foreground hover:text-foreground p-1.5 rounded-md hover:bg-muted"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Page Title / Search Area */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="relative w-full md:w-64 lg:w-96">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={(event) => handleSearchChange(event.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border-none bg-muted/50 rounded-lg text-sm focus:ring-1 focus:ring-primary placeholder-muted-foreground text-foreground"
                        />
                    </div>
                </div>
                <h2 className="md:hidden text-lg font-bold text-foreground tracking-tight">LMS</h2>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 sm:gap-4">

                {role === 'student' && (
                  <div className="relative group flex items-center">
                    <Link
                      to="/student/cart"
                      className="relative p-2 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      {cartItems.length > 0 && (
                        <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-background">
                          {cartItems.length}
                        </span>
                      )}
                    </Link>

                    {/* Hover Cart Dropdown */}
                    {cartItems.length > 0 && (
                        <div className="absolute right-0 top-full mt-2 w-80 bg-background rounded-2xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden flex flex-col">
                            <div className="p-4 border-b border-border bg-muted/30">
                                <h4 className="font-bold text-foreground">Giỏ hàng của bạn</h4>
                            </div>
                            <div className="max-h-[60vh] overflow-y-auto p-2">
                                {cartItems.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-xl transition-colors">
                                        {item.imageUrl ? (
                                            <img src={item.imageUrl} className="w-12 h-12 rounded-lg object-cover" />
                                        ) : (
                                            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center"><BookOpen className="w-5 h-5 text-muted-foreground" /></div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-foreground truncate">{item.title}</p>
                                            <p className="text-xs text-emerald-600 font-bold">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 border-t border-border bg-background">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm text-muted-foreground font-medium">Tổng cộng:</span>
                                    <span className="text-lg font-bold text-primary">
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}
                                    </span>
                                </div>
                                <Link
                                    to="/student/cart"
                                    className="w-full py-2.5 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center transition-all hover:bg-primary/90 hover:shadow-md"
                                >
                                    Thanh toán ngay
                                </Link>
                            </div>
                        </div>
                    )}
                  </div>
                )}

                <NotificationList />

                {/* User Profile Dropdown / Avatar */}
                <div className="h-8 w-px bg-border hidden sm:block"></div>
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-foreground leading-none">{user?.displayName}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 capitalize">{user?.role}</p>
                    </div>
                    <img
                        src={user?.photoURL}
                        alt="Avatar"
                        className="w-9 h-9 rounded-full bg-muted object-cover border border-border"
                    />
                </div>
            </div>
        </header>

        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-y-auto bg-background p-4 sm:p-8 scroll-smooth pb-24 relative z-0">
            <div className="max-w-7xl mx-auto h-full flex flex-col">
                {children}
            </div>
        </main>
      </div>
    </div>
  );
};
