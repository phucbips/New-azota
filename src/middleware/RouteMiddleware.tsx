import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Loading } from '../components/shared/Loading';

interface RouteMiddlewareProps {
  children: React.ReactNode;
  allowedRoles?: string[];
  requireAuth?: boolean;
}

export const RouteMiddleware: React.FC<RouteMiddlewareProps> = ({
  children,
  allowedRoles = [],
  requireAuth = true
}) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (loading) return;

    // 1. Check Authentication
    if (requireAuth && !user) {
      navigate('/login', { state: { from: location } });
      return;
    }

    // 2. Check Role Permission
    if (user && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
      // Redirect to their specific dashboard if trying to access unauthorized area
      if (user.role === 'admin') navigate('/admin');
      else if (user.role === 'teacher') navigate('/teacher');
      else if (user.role === 'student') navigate('/student');
      else navigate('/'); // Fallback
    }
  }, [user, loading, allowedRoles, requireAuth, navigate, location]);

  if (loading) {
    return <Loading message="Checking permissions..." fullScreen />;
  }

  if (requireAuth && !user) {
    return <Loading message="Redirecting to login..." fullScreen />;
  }

  if (user && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-center">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 max-w-md">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Access denied</h2>
          <p className="text-slate-500">
            You don&apos;t have permission to view this page. Please use the correct
            dashboard for your role.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
