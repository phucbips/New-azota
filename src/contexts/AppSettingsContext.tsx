import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppSettings, appSettingsService } from '../services/appSettings.service';

interface AppSettingsContextType {
  settings: AppSettings | null;
  loading: boolean;
  updateSettings: (newSettings: Partial<AppSettings>) => Promise<void>;
}

const AppSettingsContext = createContext<AppSettingsContextType | undefined>(undefined);

export const AppSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    // Subscribe to real-time app settings updates
    const unsubscribe = appSettingsService.subscribeToSettings((updatedSettings) => {
      setSettings(updatedSettings);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateSettings = async (newSettings: Partial<AppSettings>) => {
    await appSettingsService.updateSettings(newSettings);
  };

  return (
    <AppSettingsContext.Provider value={{ settings, loading, updateSettings }}>
      {children}
    </AppSettingsContext.Provider>
  );
};

export const useAppSettings = () => {
  const context = useContext(AppSettingsContext);
  if (context === undefined) {
    throw new Error('useAppSettings must be used within an AppSettingsProvider');
  }
  return context;
};
