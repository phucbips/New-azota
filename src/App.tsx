import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeSettingsProvider } from './contexts/ThemeSettingsContext';
import { DashboardConfigProvider } from './contexts/DashboardConfigContext';
import { AppSettingsProvider } from './contexts/AppSettingsContext';
import { CartProvider } from './contexts/CartContext';
import { useAuth } from './hooks/useAuth';
import { LoginPage } from './components/auth/LoginPage';
import { Loading } from './components/shared/Loading';
import { PageTracker } from './components/shared/PageTracker';
import { RouteMiddleware } from './middleware/RouteMiddleware';
import './styles/globals.css';
import { Toaster } from 'sonner';

const CHUNK_RELOAD_KEY = 'azota_chunk_reload_ts';

function isChunkLoadError(error: unknown): boolean {
  const msg = error instanceof Error ? error.message : String(error ?? '');
  return (
    msg.includes('Failed to fetch dynamically imported module') ||
    msg.includes('Importing a module script failed') ||
    msg.includes('error loading dynamically imported module') ||
    msg.includes('Unable to preload CSS') ||
    msg.includes('Loading chunk') ||
    msg.includes('Loading CSS chunk')
  );
}

function reloadOnceOnChunkError(): boolean {
  try {
    const lastReload = Number(sessionStorage.getItem(CHUNK_RELOAD_KEY) || '0');
    const now = Date.now();
    // Allow automatic reload if we haven't reloaded within the last 15 seconds
    if (now - lastReload > 15000) {
      sessionStorage.setItem(CHUNK_RELOAD_KEY, String(now));
      window.location.reload();
      return true;
    }
  } catch {
    // Ignore storage errors
  }
  return false;
}

if (typeof window !== 'undefined') {
  window.addEventListener('vite:preloadError', (event) => {
    event.preventDefault();
    reloadOnceOnChunkError();
  });
}

function lazyWithRetry<T extends React.ComponentType<any>>(
  importer: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> {
  return React.lazy(async () => {
    try {
      const mod = await importer();
      return mod;
    } catch (error) {
      if (isChunkLoadError(error) && reloadOnceOnChunkError()) {
        // Return a never-resolving promise while the browser reloads
        return new Promise<{ default: T }>(() => {});
      }
      throw error;
    }
  });
}

// Lazy load Layouts
const AdminLayout = lazyWithRetry(() => import('./layouts/AdminLayout').then(module => ({ default: module.AdminLayout })));
const TeacherLayout = lazyWithRetry(() => import('./layouts/TeacherLayout').then(module => ({ default: module.TeacherLayout })));
const StudentLayout = lazyWithRetry(() => import('./layouts/StudentLayout').then(module => ({ default: module.StudentLayout })));

// Lazy load Admin Pages
const SmartAssignmentBuilderPage = lazyWithRetry(() => import('./pages/shared/SmartAssignmentBuilderPage').then(module => ({ default: module.SmartAssignmentBuilderPage })));
const AdminOverview = lazyWithRetry(() => import('./pages/admin/Overview').then(module => ({ default: module.AdminOverview })));
const AdminUsers = lazyWithRetry(() => import('./pages/admin/Users').then(module => ({ default: module.AdminUsers })));
const AdminAssignments = lazyWithRetry(() => import('./pages/admin/Assignments').then(module => ({ default: module.AdminAssignments })));
const AdminCourses = lazyWithRetry(() => import('./pages/admin/Courses').then(module => ({ default: module.AdminCourses })));
const AdminOrders = lazyWithRetry(() => import('./pages/admin/Orders').then(module => ({ default: module.AdminOrders })));
const AdminVouchers = lazyWithRetry(() => import('./pages/admin/Vouchers').then(module => ({ default: module.AdminVouchers })));
const AdminCommunication = lazyWithRetry(() => import('./pages/admin/Communication').then(module => ({ default: module.AdminCommunication })));
const AdminAuditLogs = lazyWithRetry(() => import('./pages/admin/AuditLogs').then(module => ({ default: module.AuditLogs })));
const AdminSettings = lazyWithRetry(() => import('./pages/admin/Settings').then(module => ({ default: module.AdminSettings })));
const AdminProfile = lazyWithRetry(() => import('./pages/admin/Profile').then(module => ({ default: module.AdminProfile })));

// Lazy load Teacher Pages
const TeacherOverview = lazyWithRetry(() => import('./pages/teacher/Overview').then(module => ({ default: module.TeacherOverview })));
const TeacherAssignments = lazyWithRetry(() => import('./pages/teacher/Assignments').then(module => ({ default: module.TeacherAssignments })));
const TeacherCourses = lazyWithRetry(() => import('./pages/teacher/Courses').then(module => ({ default: module.TeacherCourses })));
const TeacherSettings = lazyWithRetry(() => import('./pages/teacher/Settings').then(module => ({ default: module.TeacherSettings })));
const TeacherProfile = lazyWithRetry(() => import('./pages/teacher/Profile').then(module => ({ default: module.TeacherProfile })));

// Lazy load Student Pages
const StudentHome = lazyWithRetry(() => import('./pages/student/Home').then(module => ({ default: module.StudentHome })));
const StudentAssignments = lazyWithRetry(() => import('./pages/student/Assignments').then(module => ({ default: module.StudentAssignments })));
const StudentCourses = lazyWithRetry(() => import('./pages/student/Courses').then(module => ({ default: module.StudentCourses })));
const StudentSettings = lazyWithRetry(() => import('./pages/student/Settings').then(module => ({ default: module.StudentSettings })));
const StudentProfile = lazyWithRetry(() => import('./pages/student/Profile').then(module => ({ default: module.StudentProfile })));
const PaymentQR = lazyWithRetry(() => import('./pages/student/PaymentQR').then(module => ({ default: module.PaymentQR })));
const PaymentSuccess = lazyWithRetry(() => import('./pages/student/PaymentSuccess').then(module => ({ default: module.PaymentSuccess })));
const CartOrders = lazyWithRetry(() => import('./pages/student/CartOrders').then(module => ({ default: module.CartOrders })));
const LandingPage = lazyWithRetry(() => import('./pages/public/Landing').then(module => ({ default: module.LandingPage })));
const PublicCourses = lazyWithRetry(() => import('./pages/public/PublicCourses').then(module => ({ default: module.PublicCourses })));

// Specialized Login Wrapper to redirect if already logged in
const LoginWrapper: React.FC = () => {
  const { user, loading } = useAuth();
  if (loading) return <Loading message="Checking..." fullScreen />;
  if (user) {
      if (user.role === 'admin') return <Navigate to="/admin" replace />;
      if (user.role === 'teacher') return <Navigate to="/teacher" replace />;
      return <Navigate to="/student" replace />;
  }
  return <LoginPage />;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
       <ThemeProvider>
        <ThemeSettingsProvider>
         <AppSettingsProvider>
         <DashboardConfigProvider>
          <CartProvider>
          <PageTracker />
          <Toaster richColors position="top-right" />
          <Suspense fallback={<Loading fullScreen />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={<PublicCourses />} />
            <Route path="/login" element={<LoginWrapper />} />
            <Route path="/register" element={<LoginWrapper />} />

            {/* Admin Route Group */}
            <Route
              path="/admin"
              element={
                <RouteMiddleware allowedRoles={['admin']}>
                  <AdminLayout />
                </RouteMiddleware>
              }
            >
              <Route index element={<AdminOverview />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="assignments" element={<AdminAssignments />} />
              <Route path="assignments/builder" element={<SmartAssignmentBuilderPage />} />
              <Route path="courses" element={<AdminCourses />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="vouchers" element={<AdminVouchers />} />
              <Route path="communication" element={<AdminCommunication />} />
              <Route path="audit-logs" element={<AdminAuditLogs />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="profile" element={<AdminProfile />} />
            </Route>

            {/* Teacher Route Group */}
            <Route
              path="/teacher"
              element={
                <RouteMiddleware allowedRoles={['teacher']}>
                  <TeacherLayout />
                </RouteMiddleware>
              }
            >
              <Route index element={<TeacherOverview />} />
              <Route path="assignments" element={<TeacherAssignments />} />
              <Route path="assignments/builder" element={<SmartAssignmentBuilderPage />} />
              <Route path="courses" element={<TeacherCourses />} />
              <Route path="settings" element={<TeacherSettings />} />
              <Route path="profile" element={<TeacherProfile />} />
            </Route>

            {/* Student Route Group */}
            <Route
              path="/student"
              element={
                <RouteMiddleware allowedRoles={['student']}>
                  <StudentLayout />
                </RouteMiddleware>
              }
            >
              <Route index element={<StudentHome />} />
              <Route path="assignments" element={<StudentAssignments />} />
              <Route path="courses" element={<StudentCourses />} />
              <Route path="payment" element={<PaymentQR />} />
            <Route path="payment/success" element={<PaymentSuccess />} />
              <Route path="cart" element={<CartOrders />} />
              <Route path="settings" element={<StudentSettings />} />
              <Route path="profile" element={<StudentProfile />} />
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
          </CartProvider>
         </DashboardConfigProvider>
         </AppSettingsProvider>
        </ThemeSettingsProvider>
       </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
