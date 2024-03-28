import React from 'react';
import { ErrorContext } from './errorContext';

export interface ErrorProviderProps {
  children: React.ReactNode;
  defaultError: Error | string;
}

export const ErrorProvider: React.FC<ErrorProviderProps> = ({
  children,
  defaultError,
}) => {
  //   console.log('error provider');

  const [error, setError] = React.useState<Error | string>(defaultError);
  const value = React.useMemo(() => ({ error, setError }), [error]);
  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};
