import React from 'react';
import { Otp, OtpContext } from './otpContext';

export interface OtpProviderType {
  children: React.ReactNode;
}

export const OtpProvider: React.FC<OtpProviderType> = ({ children }) => {
  const [otp, setOtp] = React.useState<Otp>({
    type: 'email',
    resource: '',
    retryDelay: 0,
  });
  const value = React.useMemo(() => ({ otp, setOtp }), [otp]);
  return <OtpContext.Provider value={value}>{children}</OtpContext.Provider>;
};
