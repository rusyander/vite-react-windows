import React from 'react';
import { OtpProvider } from './contexts/otp';
import { type StageProviderProps, StageProvider } from './contexts/stage';

interface ProvidersProps {
  children: React.ReactNode;
  stage: Omit<StageProviderProps, 'children'>;
}

export const Providers: React.FC<ProvidersProps> = ({ children, stage }) => {
  return (
    <OtpProvider>
      <StageProvider {...stage}>{children}</StageProvider>
    </OtpProvider>
  );
};
