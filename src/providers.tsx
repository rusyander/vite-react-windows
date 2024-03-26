import React from 'react';
import { ThemeProvider, type ThemeProviderProps } from './utils/context/theme';
import {
  SessionProvider,
  type SessionProviderProps,
} from './utils/context/session';

export interface ProviderProps {
  children: React.ReactNode;
  theme: Omit<ThemeProviderProps, 'children'>;
  session: Omit<SessionProviderProps, 'children'>;
}

export default function Providers({ children, theme, session }: ProviderProps) {
  return (
    <ThemeProvider {...theme}>
      <SessionProvider {...session}>{children}</SessionProvider>
    </ThemeProvider>
  );
}
