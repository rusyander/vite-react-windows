import React from 'react';
import { ErrorContext } from './errorContext';

export const useError = () => React.useContext(ErrorContext);
