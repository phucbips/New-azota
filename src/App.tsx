import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import { LoginPage } from './components/auth/LoginPage';
import { Loading } from './components/shared/Loading';
import './styles/globals.css';

// Lazy load dashboard components
const AdminDashboard = React.lazy(() =>
  import('./pages/AdminDashboard').then(module => ({ default: module.AdminDashboard }))
);

const StudentDashboard = React.lazy(() =>
  import('./pages/StudentDashboard').then(module => ({ default: module.StudentDashboard }))
);

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading message="Đang tải ứng dụng..." fullScreen />;
  }

  if (!user) {
    return <LoginPage />;
  }

  if (user.role === 'admin') {
    return (
      <React.Suspense fallback={<Loading fullScreen message="Đang tải trang Admin..." />}>
        <AdminDashboard />
      </React.Suspense>
    );
  }

  return (
    <React.Suspense fallback={<Loading fullScreen message="Đang tải trang Học sinh..." />}>
      <StudentDashboard />
    </React.Suspense>
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
