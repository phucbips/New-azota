import React, { createContext, useContext, useEffect, useState } from 'react';

export type PrimaryColor = 'indigo' | 'blue' | 'purple' | 'green' | 'orange';

const THEME_CLASSES: PrimaryColor[] = ['indigo', 'blue', 'purple', 'green', 'orange'];
// New storage key so every user starts on the new default accent (indigo)
const STORAGE_KEY = 'accentColor';

interface ThemeSettingsContextType {
  primaryColor: PrimaryColor;
  setPrimaryColor: (color: PrimaryColor) => void;
}

const ThemeSettingsContext = createContext<ThemeSettingsContextType | undefined>(undefined);

export const ThemeSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState<PrimaryColor>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as PrimaryColor | null;
      return stored && THEME_CLASSES.includes(stored) ? stored : 'indigo';
    } catch {
      return 'indigo';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, primaryColor);
    } catch {
      // Ignore storage errors on iOS Safari Private Mode
    }

    // Remove existing theme classes
    const root = document.documentElement;
    root.classList.remove(...THEME_CLASSES.map(c => `theme-${c}`));

    // Add new theme class
    root.classList.add(`theme-${primaryColor}`);
  }, [primaryColor]);

  return (
    <ThemeSettingsContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {children}
    </ThemeSettingsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeSettings = () => {
  const context = useContext(ThemeSettingsContext);
  if (!context) throw new Error('useThemeSettings must be used within ThemeSettingsProvider');
  return context;
};
