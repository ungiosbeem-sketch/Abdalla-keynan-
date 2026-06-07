import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { colors } from '@/constants/colors';
import { storageKeys } from '@/constants/storage';

type ThemeMode = 'light' | 'dark' | 'system';
type ThemeContextType = {
  theme: ThemeMode;
  colors: typeof colors.light | typeof colors.dark;
  setTheme: (theme: ThemeMode) => void;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setThemeMode] = useState<ThemeMode>('system');

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(storageKeys.settings.theme);
      if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
        setThemeMode(savedTheme as ThemeMode);
      }
    } catch (error) {
      console.error('Failed to load theme:', error);
    }
  };

  const setTheme = async (newTheme: ThemeMode) => {
    try {
      await AsyncStorage.setItem(storageKeys.settings.theme, newTheme);
      setThemeMode(newTheme);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  };

  const getCurrentColors = () => {
    const isDark = theme === 'system' ? systemColorScheme === 'dark' : theme === 'dark';
    return isDark ? colors.dark : colors.light;
  };

  const isDark = theme === 'system' ? systemColorScheme === 'dark' : theme === 'dark';

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors: getCurrentColors(),
        setTheme,
        isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
