import React from 'react';

export interface Otp {
  type: 'email' | 'phone';
  resource: string;
  retryDelay: number;
}

export interface OtpContextInterface {
  otp: Otp;
  setOtp: (otp: Otp) => void;
}

export const OtpContext = React.createContext<OtpContextInterface>({
  otp: { type: 'email', resource: '', retryDelay: 0 },
  setOtp: () => {},
});
