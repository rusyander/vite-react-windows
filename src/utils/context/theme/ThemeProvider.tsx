import React, { useState } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';
import { COOKIE } from '@/utils/constants';

export interface ThemeProviderProps {
  defaultTheme?: 'themeOzenDefault' | 'themeOzenDark';
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'themeOzenDark',
}) => {
  console.log('theme provider');
  const getTheme =
    (localStorage.getItem(COOKIE.THEME) as Theme) ?? defaultTheme;
  const [theme, setTheme] = useState<Theme>(getTheme);
  const value = React.useMemo(() => ({ theme, setTheme }), [theme]);
  console.log(value);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
