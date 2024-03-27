import React from 'react';
import { ThemeProvider, type ThemeProviderProps } from './utils/context/theme';
import {
  SessionProvider,
  type SessionProviderProps,
} from './utils/context/session';
import {
  LanguageProvider,
  type LanguageProviderProps,
} from './utils/context/language';
import { QueryProvider, type QueryProviderProps } from './utils/context/query';
import {
  ProfileProvider,
  type ProfileProviderProps,
} from './utils/context/profile';
import { ErrorProvider, type ErrorProviderProps } from './utils/context/error';

export interface ProviderProps {
  children: React.ReactNode;
  theme: Omit<ThemeProviderProps, 'children'>;
  session: Omit<SessionProviderProps, 'children'>;
  language: Omit<LanguageProviderProps, 'children'>;
  query: Omit<QueryProviderProps, 'children'>;
  profile: Omit<ProfileProviderProps, 'children'>;
  error: Omit<ErrorProviderProps, 'children'>;
}

export default function Providers({
  children,
  theme,
  session,
  language,
  query,
  profile,
  error,
}: ProviderProps) {
  return (
    <ThemeProvider {...theme}>
      <SessionProvider {...session}>
        <LanguageProvider {...language}>
          <QueryProvider {...query}>
            <ProfileProvider {...profile}>
              <ErrorProvider {...error}>{children}</ErrorProvider>
            </ProfileProvider>
          </QueryProvider>
        </LanguageProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
