import React, { createContext, useContext, useMemo, useState } from 'react';

type DashboardSearchContextValue = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const DashboardSearchContext = createContext<DashboardSearchContextValue | undefined>(undefined);

export const DashboardSearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const value = useMemo(() => ({ searchQuery, setSearchQuery }), [searchQuery]);

  return (
    <DashboardSearchContext.Provider value={value}>
      {children}
    </DashboardSearchContext.Provider>
  );
};

export const useDashboardSearch = (): DashboardSearchContextValue => {
  const context = useContext(DashboardSearchContext);
  if (!context) {
    throw new Error('useDashboardSearch must be used within a DashboardSearchProvider');
  }
  return context;
};
