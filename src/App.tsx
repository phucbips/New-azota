import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import { LoginPage } from './components/auth/LoginPage';
import { Loading } from './components/shared/Loading';
import './styles/globals.css';

// Lazy load dashboard components to reduce initial bundle size
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard').then(module => ({ default: module.AdminDashboard })));
const StudentDashboard = React.lazy(() => import('./pages/StudentDashboard').then(module => ({ default: module.StudentDashboard })));

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading message="Đang tải ứng dụng..." fullScreen />;
  }

  if (!user) {
    return <LoginPage />;
  }

  return (
    <React.Suspense fallback={<Loading message="Đang tải giao diện..." fullScreen />}>
      {user.role === 'admin' ? <AdminDashboard /> : <StudentDashboard />}
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
