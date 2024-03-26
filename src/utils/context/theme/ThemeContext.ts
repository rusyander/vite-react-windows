import React from 'react';

export type Theme = 'themeOzenDefault' | 'themeOzenDark';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: 'themeOzenDark',
  setTheme: () => {},
});
