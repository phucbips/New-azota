import React, { createContext, useContext, useEffect, useState } from 'react';

interface DashboardWidget {
  id: string;
  label: string;
  visible: boolean;
}

const DEFAULT_WIDGETS: DashboardWidget[] = [
  { id: 'visitors', label: 'Visitors Stat', visible: true },
  { id: 'page_views', label: 'Page Views Stat', visible: true },
  { id: 'total_users', label: 'Total Users Stat', visible: true },
  { id: 'traffic_chart', label: 'Traffic Chart', visible: true },
  { id: 'device_stats', label: 'Device Statistics', visible: true },
];

interface DashboardConfigContextType {
  widgets: DashboardWidget[];
  toggleWidget: (id: string) => void;
}

const DashboardConfigContext = createContext<DashboardConfigContextType | undefined>(undefined);

export const DashboardConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [widgets, setWidgets] = useState<DashboardWidget[]>(() => {
    const stored = localStorage.getItem('dashboardConfig');
    return stored ? JSON.parse(stored) : DEFAULT_WIDGETS;
  });

  useEffect(() => {
    localStorage.setItem('dashboardConfig', JSON.stringify(widgets));
  }, [widgets]);

  const toggleWidget = (id: string) => {
    setWidgets(prev => prev.map(w => w.id === id ? { ...w, visible: !w.visible } : w));
  };

  return (
    <DashboardConfigContext.Provider value={{ widgets, toggleWidget }}>
      {children}
    </DashboardConfigContext.Provider>
  );
};

export const useDashboardConfig = () => {
  const context = useContext(DashboardConfigContext);
  if (!context) throw new Error('useDashboardConfig must be used within DashboardConfigProvider');
  return context;
};
