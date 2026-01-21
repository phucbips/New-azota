import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsService } from '../../services/analytics.service';

export const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Log page view on every location change
    analyticsService.logPageView();
  }, [location.pathname, location.search]); // Trigger on path or query change

  return null;
};
