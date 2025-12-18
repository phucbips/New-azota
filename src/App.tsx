import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import { LoginPage } from './components/auth/LoginPage';
import { Loading } from './components/shared/Loading';
import { RouteMiddleware } from './middleware/RouteMiddleware';
import './styles/globals.css';

// Layouts
import { AdminLayout } from './layouts/AdminLayout';
import { TeacherLayout } from './layouts/TeacherLayout';
import { StudentLayout } from './layouts/StudentLayout';

// Admin Pages
import { AdminOverview } from './pages/admin/Overview';
import { AdminUsers } from './pages/admin/Users';

// Teacher Pages
import { TeacherOverview } from './pages/teacher/Overview';
import { TeacherAssignments } from './pages/teacher/Assignments';

// Student Pages
import { StudentHome } from './pages/student/Home';
import { StudentAssignments } from './pages/student/Assignments';

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
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
