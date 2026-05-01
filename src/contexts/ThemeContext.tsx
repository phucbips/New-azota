import React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light" // Hardcode to light for Genesis Phase 1
      enableSystem={false}
      forcedTheme="light"  // Force light theme
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
};

export const useTheme = () => {
  // Stubbing these out to avoid breaking existing components that call useTheme
  // but enforcing light mode internally.
  return {
    theme: 'light' as const,
    toggleTheme: () => console.warn('Dark mode is currently disabled in Genesis Phase 1.'),
    setTheme: () => console.warn('Theme switching is currently disabled in Genesis Phase 1.')
  };
};
