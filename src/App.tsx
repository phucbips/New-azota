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
// Lazy load Layouts
const AdminLayout = React.lazy(() => import('./layouts/AdminLayout').then(module => ({ default: module.AdminLayout })));
const TeacherLayout = React.lazy(() => import('./layouts/TeacherLayout').then(module => ({ default: module.TeacherLayout })));
const StudentLayout = React.lazy(() => import('./layouts/StudentLayout').then(module => ({ default: module.StudentLayout })));

// Lazy load Admin Pages
const AdminOverview = React.lazy(() => import('./pages/admin/Overview').then(module => ({ default: module.AdminOverview })));
const AdminUsers = React.lazy(() => import('./pages/admin/Users').then(module => ({ default: module.AdminUsers })));
const AdminAssignments = React.lazy(() => import('./pages/admin/Assignments').then(module => ({ default: module.AdminAssignments })));
const AdminCourses = React.lazy(() => import('./pages/admin/Courses').then(module => ({ default: module.AdminCourses })));
const AdminOrders = React.lazy(() => import('./pages/admin/Orders').then(module => ({ default: module.AdminOrders })));
const AdminCommunication = React.lazy(() => import('./pages/admin/Communication').then(module => ({ default: module.AdminCommunication })));
const AdminAuditLogs = React.lazy(() => import('./pages/admin/AuditLogs').then(module => ({ default: module.AuditLogs })));
const AdminSettings = React.lazy(() => import('./pages/admin/Settings').then(module => ({ default: module.AdminSettings })));
const AdminProfile = React.lazy(() => import('./pages/admin/Profile').then(module => ({ default: module.AdminProfile })));

// Lazy load Teacher Pages
const TeacherOverview = React.lazy(() => import('./pages/teacher/Overview').then(module => ({ default: module.TeacherOverview })));
const TeacherAssignments = React.lazy(() => import('./pages/teacher/Assignments').then(module => ({ default: module.TeacherAssignments })));
const TeacherCourses = React.lazy(() => import('./pages/teacher/Courses').then(module => ({ default: module.TeacherCourses })));
const TeacherSettings = React.lazy(() => import('./pages/teacher/Settings').then(module => ({ default: module.TeacherSettings })));
const TeacherProfile = React.lazy(() => import('./pages/teacher/Profile').then(module => ({ default: module.TeacherProfile })));

// Lazy load Student Pages
const StudentHome = React.lazy(() => import('./pages/student/Home').then(module => ({ default: module.StudentHome })));
const StudentAssignments = React.lazy(() => import('./pages/student/Assignments').then(module => ({ default: module.StudentAssignments })));
const StudentCourses = React.lazy(() => import('./pages/student/Courses').then(module => ({ default: module.StudentCourses })));
const StudentSettings = React.lazy(() => import('./pages/student/Settings').then(module => ({ default: module.StudentSettings })));
const StudentProfile = React.lazy(() => import('./pages/student/Profile').then(module => ({ default: module.StudentProfile })));
const PaymentQR = React.lazy(() => import('./pages/student/PaymentQR').then(module => ({ default: module.PaymentQR })));
const Checkout = React.lazy(() => import('./pages/student/Checkout').then(module => ({ default: module.Checkout })));
const LandingPage = React.lazy(() => import('./pages/public/Landing').then(module => ({ default: module.LandingPage })));
const PublicCourses = React.lazy(() => import('./pages/public/PublicCourses').then(module => ({ default: module.PublicCourses })));

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
              <Route path="courses" element={<AdminCourses />} />
              <Route path="orders" element={<AdminOrders />} />
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
              <Route path="checkout" element={<Checkout />} />
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
