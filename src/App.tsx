import React, { lazy, Suspense } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import { Loading } from './components/shared/Loading';
import './styles/globals.css';

// Lazy load pages
const LoginPage = lazy(() => import('./components/auth/LoginPage').then(module => ({ default: module.LoginPage })));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard').then(module => ({ default: module.AdminDashboard })));
const StudentDashboard = lazy(() => import('./pages/StudentDashboard').then(module => ({ default: module.StudentDashboard })));

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading message="Đang tải ứng dụng..." fullScreen />;
  }

  if (!user) {
    return (
      <Suspense fallback={<Loading message="Đang tải trang đăng nhập..." fullScreen />}>
        <LoginPage />
      </Suspense>
    );
  }

  if (user.role === 'admin') {
    return (
      <Suspense fallback={<Loading message="Đang tải bảng điều khiển..." fullScreen />}>
        <AdminDashboard />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<Loading message="Đang tải trang học tập..." fullScreen />}>
      <StudentDashboard />
    </Suspense>
  );
};

function App() {
  return (
    <AuthProvider>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
        <AppContent />
      </div>
    </AuthProvider>
  );
}

export default App;
