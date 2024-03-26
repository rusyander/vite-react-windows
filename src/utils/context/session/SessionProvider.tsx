import React from 'react';
import { SessionContext } from './SessionContext';
export interface SessionProviderProps {
  children: React.ReactNode;
  defaultSession: boolean;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
  defaultSession,
}) => {
  const [session, setSession] = React.useState<boolean>(defaultSession);
  const value = React.useMemo(() => ({ session, setSession }), [session]);

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
