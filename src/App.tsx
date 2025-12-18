import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import { LoginPage } from './components/auth/LoginPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Loading } from './components/shared/Loading';
import './styles/globals.css';

// Admin Pages
import { AdminOverview } from './pages/admin/Overview';
import { AdminUsers } from './pages/admin/Users';

// Teacher Pages
import { TeacherOverview } from './pages/teacher/Overview';
import { TeacherAssignments } from './pages/teacher/Assignments';

// Student Pages
import { StudentAssignments } from './pages/student/Assignments';

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <Loading message="Loading application..." fullScreen />;
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return <>{children}</>;
};

const RoleGuard: React.FC<{ children: React.ReactNode; allowedRoles: string[] }> = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !allowedRoles.includes(user.role)) {
      // Redirect to their correct dashboard
      if (user.role === 'admin') navigate('/admin');
      else if (user.role === 'teacher') navigate('/teacher');
      else if (user.role === 'student') navigate('/student');
    }
  }, [user, allowedRoles, navigate]);

  if (!user || !allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
};

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

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <AuthGuard>
                <RoleGuard allowedRoles={['admin']}>
                  <DashboardLayout role="admin">
                    <Routes>
                      <Route index element={<AdminOverview />} />
                      <Route path="users" element={<AdminUsers />} />
                      {/* Fallback */}
                      <Route path="*" element={<Navigate to="/admin" replace />} />
                    </Routes>
                  </DashboardLayout>
                </RoleGuard>
              </AuthGuard>
            }
          />

          {/* Teacher Routes */}
          <Route
            path="/teacher/*"
            element={
              <AuthGuard>
                <RoleGuard allowedRoles={['teacher']}>
                  <DashboardLayout role="teacher">
                    <Routes>
                      <Route index element={<TeacherOverview />} />
                      <Route path="assignments" element={<TeacherAssignments />} />
                      {/* Fallback */}
                      <Route path="*" element={<Navigate to="/teacher" replace />} />
                    </Routes>
                  </DashboardLayout>
                </RoleGuard>
              </AuthGuard>
            }
          />

          {/* Student Routes */}
          <Route
            path="/student/*"
            element={
              <AuthGuard>
                <RoleGuard allowedRoles={['student']}>
                  <DashboardLayout role="student">
                    <Routes>
                      <Route index element={<StudentAssignments />} />
                      {/* Fallback */}
                      <Route path="*" element={<Navigate to="/student" replace />} />
                    </Routes>
                  </DashboardLayout>
                </RoleGuard>
              </AuthGuard>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
