import React from 'react';
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

// Static imports for Layouts & Pages to prevent stale dynamic chunk errors across deployments or idle sessions
import { AdminLayout } from './layouts/AdminLayout';
import { TeacherLayout } from './layouts/TeacherLayout';
import { StudentLayout } from './layouts/StudentLayout';

import { SmartAssignmentBuilderPage } from './pages/shared/SmartAssignmentBuilderPage';
import { AdminOverview } from './pages/admin/Overview';
import { AdminUsers } from './pages/admin/Users';
import { AdminAssignments } from './pages/admin/Assignments';
import { AdminCourses } from './pages/admin/Courses';
import { AdminOrders } from './pages/admin/Orders';
import { AdminVouchers } from './pages/admin/Vouchers';
import { AdminCommunication } from './pages/admin/Communication';
import { AuditLogs as AdminAuditLogs } from './pages/admin/AuditLogs';
import { AdminSettings } from './pages/admin/Settings';
import { AdminProfile } from './pages/admin/Profile';

import { TeacherOverview } from './pages/teacher/Overview';
import { TeacherAssignments } from './pages/teacher/Assignments';
import { TeacherCourses } from './pages/teacher/Courses';
import { TeacherSettings } from './pages/teacher/Settings';
import { TeacherProfile } from './pages/teacher/Profile';

import { StudentHome } from './pages/student/Home';
import { StudentAssignments } from './pages/student/Assignments';
import { StudentCourses } from './pages/student/Courses';
import { StudentSettings } from './pages/student/Settings';
import { StudentProfile } from './pages/student/Profile';
import { PaymentQR } from './pages/student/PaymentQR';
import { PaymentSuccess } from './pages/student/PaymentSuccess';
import { CartOrders } from './pages/student/CartOrders';
import { LandingPage } from './pages/public/Landing';
import { PublicCourses } from './pages/public/PublicCourses';

const CHUNK_RELOAD_KEY = 'azota_chunk_reload_ts';

if (typeof window !== 'undefined') {
  window.addEventListener('vite:preloadError', (event) => {
    event.preventDefault();
    try {
      const lastReload = Number(sessionStorage.getItem(CHUNK_RELOAD_KEY) || '0');
      const now = Date.now();
      if (now - lastReload > 15000) {
        sessionStorage.setItem(CHUNK_RELOAD_KEY, String(now));
        window.location.reload();
      }
    } catch {
      window.location.reload();
    }
  });
}

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
