import { createContext } from 'react';

export interface ErrorContextProps {
  error: string | Error;
  setError: (error: string | Error) => void;
}

export const ErrorContext = createContext<ErrorContextProps>({
  error: 'Its error!',
  setError: () => {},
});
