import React from 'react';

export interface Otp {
  type: 'email' | 'phone';
  resource: 'select' | 'form';
  typeValue: string;
  retryDelay: number;
}

export interface OtpContextInterface {
  otp: Otp;
  setOtp: (otp: Otp) => void;
}

export const OtpContext = React.createContext<OtpContextInterface>({
  otp: { type: 'email', resource: 'select', retryDelay: 0, typeValue: '' },
  setOtp: () => {},
});
