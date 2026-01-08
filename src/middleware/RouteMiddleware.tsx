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

  if (requireAuth && !user) return null;
  if (user && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) return null;

  return <>{children}</>;
};
