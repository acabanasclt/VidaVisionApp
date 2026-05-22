import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';
import { ColorScheme, Theme, themes } from './themes';

interface ThemeContextType {
  theme: Theme;
  colors: ColorScheme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  toggleDark: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  colors: themes.light,
  setTheme: () => {},
  isDark: false,
  toggleDark: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const loadTheme = async () => {
      const saved = await AsyncStorage.getItem('app_theme');
      if (saved) {
        setThemeState(saved as Theme);
      } else {
        // detecta el sistema
        const sys = Appearance.getColorScheme();
        setThemeState(sys === 'dark' ? 'dark' : 'light');
      }
    };
    loadTheme();
  }, []);

  const setTheme = async (newTheme: Theme) => {
    setThemeState(newTheme);
    await AsyncStorage.setItem('app_theme', newTheme);
  };

  const toggleDark = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      colors: themes[theme],
      setTheme,
      isDark: theme === 'dark',
      toggleDark,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};