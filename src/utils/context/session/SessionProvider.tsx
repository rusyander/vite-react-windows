import React from 'react';
import { SessionContext } from './SessionContext';
import { COOKIE } from '@/utils/constants';
export interface SessionProviderProps {
  children: React.ReactNode;
  defaultSession: boolean;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
  defaultSession,
}) => {
  // console.log('session provider');

  const getSession = localStorage.getItem(COOKIE.SESSION_ID) ?? defaultSession;

  const [session, setSession] = React.useState<boolean>(defaultSession);
  const value = React.useMemo(() => ({ session, setSession }), [session]);

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
