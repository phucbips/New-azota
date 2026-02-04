import React, { createContext, useContext, useEffect, useState } from 'react';

type PrimaryColor = 'blue' | 'purple' | 'green' | 'orange';

interface ThemeSettingsContextType {
  primaryColor: PrimaryColor;
  setPrimaryColor: (color: PrimaryColor) => void;
}

const ThemeSettingsContext = createContext<ThemeSettingsContextType | undefined>(undefined);

export const ThemeSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState<PrimaryColor>(() => {
    return (localStorage.getItem('primaryColor') as PrimaryColor) || 'blue';
  });

  useEffect(() => {
    localStorage.setItem('primaryColor', primaryColor);

    // Remove existing theme classes
    const root = document.documentElement;
    root.classList.remove('theme-blue', 'theme-purple', 'theme-green', 'theme-orange');

    // Add new theme class
    root.classList.add(`theme-${primaryColor}`);
  }, [primaryColor]);

  return (
    <ThemeSettingsContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {children}
    </ThemeSettingsContext.Provider>
  );
};

export const useThemeSettings = () => {
  const context = useContext(ThemeSettingsContext);
  if (!context) throw new Error('useThemeSettings must be used within ThemeSettingsProvider');
  return context;
};
