import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Menu, X, LogOut, GraduationCap, Settings, Search, ShoppingCart, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';
import { NotificationList } from '../components/shared/NotificationList';
import { ThemeToggle } from '../components/shared/ThemeToggle';
import { useTranslation } from 'react-i18next';
import { NAVIGATION_CONFIG } from '../config/navigation';
import { useCart } from '../contexts/CartContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'teacher' | 'student';
}

const ROLE_LABEL: Record<DashboardLayoutProps['role'], string> = {
  admin: 'Quản trị',
  teacher: 'Giáo viên',
  student: 'Học sinh',
};

const formatVND = (value: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);

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

  const isItemActive = (href: string) => {
    if (href === '/student' || href === '/admin' || href === '/teacher') return location.pathname === href;
    return href !== '#' && location.pathname.startsWith(href);
  };

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-background text-foreground">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-[2px] animate-fade-in lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-60 flex-col border-r border-border bg-background transition-transform duration-200 ease-out lg:static lg:translate-x-0',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Brand */}
        <div className="flex h-14 items-center gap-2.5 px-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GraduationCap className="h-4 w-4" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">Azota LMS</span>
            <span className="mt-0.5 text-[11px] text-muted-foreground">{ROLE_LABEL[role]}</span>
          </div>
          <button
            className="ml-auto rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Đóng menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 scrollbar-hide">
          <p className="px-2 pb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">Menu</p>
          <ul className="flex flex-col gap-0.5">
            {navItems.map((item) => {
              const isActive = isItemActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors [&_svg]:h-4 [&_svg]:w-4',
                      isActive
                        ? 'bg-muted font-medium text-foreground'
                        : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                    )}
                  >
                    <span className={cn(isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground')}>
                      {item.icon}
                    </span>
                    {t(item.labelKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom: user + actions */}
        <div className="border-t border-border p-3">
          <div className="mb-2 flex items-center gap-2.5 px-2 py-1.5">
            <img
              src={user?.photoURL}
              alt=""
              className="h-8 w-8 shrink-0 rounded-full border border-border bg-muted object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium leading-tight">{user?.displayName}</p>
              <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <Link
            to={`/${role}/settings`}
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              'flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors',
              location.pathname.startsWith(`/${role}/settings`)
                ? 'bg-muted font-medium text-foreground'
                : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
            )}
          >
            <Settings className="h-4 w-4" />
            {t('sidebar.settings')}
          </Link>
          <button
            onClick={() => signOut()}
            className="flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
            {t('sidebar.logout')}
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="relative flex h-full min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between gap-4 border-b border-border bg-background/80 px-4 backdrop-blur-md sm:px-6">
          <div className="flex w-full max-w-md items-center gap-3">
            <button
              className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Mở menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="relative hidden w-full md:block">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchValue}
                onChange={(event) => handleSearchChange(event.target.value)}
                className="h-8 w-full rounded-md border border-border bg-muted/40 pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-ring focus:bg-background focus:outline-none focus:ring-[3px] focus:ring-ring/15"
              />
            </div>
            <span className="text-sm font-semibold tracking-tight md:hidden">Azota LMS</span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            {role === 'student' && (
              <div className="group relative flex items-center">
                <Link
                  to="/student/cart"
                  className="relative rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Giỏ hàng"
                >
                  <ShoppingCart className="h-[18px] w-[18px]" />
                  {cartItems.length > 0 && (
                    <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground ring-2 ring-background">
                      {cartItems.length}
                    </span>
                  )}
                </Link>

                {/* Hover Cart Dropdown */}
                {cartItems.length > 0 && (
                  <div className="invisible absolute right-0 top-full z-50 mt-2 flex w-80 flex-col overflow-hidden rounded-xl border border-border bg-popover opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="border-b border-border px-4 py-3">
                      <h4 className="text-sm font-semibold">Giỏ hàng của bạn</h4>
                    </div>
                    <div className="max-h-[60vh] overflow-y-auto p-1.5">
                      {cartItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted/60">
                          {item.imageUrl ? (
                            <img src={item.imageUrl} alt="" className="h-10 w-10 rounded-md object-cover" />
                          ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                              <BookOpen className="h-4 w-4 text-muted-foreground" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">{item.title}</p>
                            <p className="text-xs text-muted-foreground tabular-nums">{formatVND(item.price)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-border p-3">
                      <div className="mb-3 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Tổng cộng</span>
                        <span className="font-semibold tabular-nums">{formatVND(totalPrice)}</span>
                      </div>
                      <Link
                        to="/student/cart"
                        className="flex h-9 w-full items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        Thanh toán ngay
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}

            <NotificationList />
            <ThemeToggle />

            <div className="mx-2 hidden h-5 w-px bg-border sm:block" />
            <Link to={`/${role}/profile`} className="flex items-center gap-2 rounded-md p-1 transition-colors hover:bg-muted">
              <img
                src={user?.photoURL}
                alt="Avatar"
                className="h-7 w-7 rounded-full border border-border bg-muted object-cover"
              />
            </Link>
          </div>
        </header>

        {/* Main Scrollable Area */}
        <main className="relative z-0 flex-1 overflow-y-auto px-4 pb-24 pt-6 sm:px-8 sm:pt-8">
          <div className="mx-auto flex h-full max-w-6xl flex-col">{children}</div>
        </main>
      </div>
    </div>
  );
};
