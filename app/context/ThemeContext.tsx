'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type Font = 'sans' | 'serif' | 'mono';

interface ThemeContextType {
  theme: Theme;
  font: Font;
  toggleTheme: () => void;
  setFont: (font: Font) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [font, setFontState] = useState<Font>('sans');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedFont = localStorage.getItem('font') as Font;
    if (savedTheme) setTheme(savedTheme);
    if (savedFont) setFontState(savedFont);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-font', font);
    localStorage.setItem('font', font);
  }, [font]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setFont = (newFont: Font) => {
    setFontState(newFont);
  };

  return (
    <ThemeContext.Provider value={{ theme, font, toggleTheme, setFont }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
