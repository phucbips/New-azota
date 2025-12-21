import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import { LoginPage } from './components/auth/LoginPage';
import { Loading } from './components/shared/Loading';
import { RouteMiddleware } from './middleware/RouteMiddleware';
import './styles/globals.css';

// Lazy load Layouts
const AdminLayout = React.lazy(() => import('./layouts/AdminLayout').then(module => ({ default: module.AdminLayout })));
const TeacherLayout = React.lazy(() => import('./layouts/TeacherLayout').then(module => ({ default: module.TeacherLayout })));
const StudentLayout = React.lazy(() => import('./layouts/StudentLayout').then(module => ({ default: module.StudentLayout })));

// Lazy load Admin Pages
const AdminOverview = React.lazy(() => import('./pages/admin/Overview').then(module => ({ default: module.AdminOverview })));
const AdminUsers = React.lazy(() => import('./pages/admin/Users').then(module => ({ default: module.AdminUsers })));
const AdminAssignments = React.lazy(() => import('./pages/admin/Assignments').then(module => ({ default: module.AdminAssignments })));

// Lazy load Teacher Pages
const TeacherOverview = React.lazy(() => import('./pages/teacher/Overview').then(module => ({ default: module.TeacherOverview })));
const TeacherAssignments = React.lazy(() => import('./pages/teacher/Assignments').then(module => ({ default: module.TeacherAssignments })));

// Lazy load Student Pages
const StudentHome = React.lazy(() => import('./pages/student/Home').then(module => ({ default: module.StudentHome })));
const StudentAssignments = React.lazy(() => import('./pages/student/Assignments').then(module => ({ default: module.StudentAssignments })));

// Component to handle root redirect based on role
const RootRedirect: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loading message="Checking session..." fullScreen />;

  if (!user) return <Navigate to="/login" replace />;

  if (user.role === 'admin') return <Navigate to="/admin" replace />;
  if (user.role === 'teacher') return <Navigate to="/teacher" replace />;
  return <Navigate to="/student" replace />;
};

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
        <Suspense fallback={<Loading fullScreen />}>
          <Routes>
            <Route path="/" element={<RootRedirect />} />
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
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
