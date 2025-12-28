import React, { Suspense } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import { Loading } from './components/shared/Loading';
import './styles/globals.css';

// Lazy load the main page components
const LoginPage = React.lazy(() => import('./components/auth/LoginPage').then(module => ({ default: module.LoginPage })));
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

  if (user.role === 'admin') {
    return <AdminDashboard />;
  }

  return <StudentDashboard />;
};

function App() {
  return (
    <AuthProvider>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
        <Suspense fallback={<Loading message="Đang tải tài nguyên..." fullScreen />}>
          <AppContent />
        </Suspense>
      </div>
    </AuthProvider>
  );
}

export default App;
