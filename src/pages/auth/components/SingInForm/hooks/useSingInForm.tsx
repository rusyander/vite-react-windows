import { useOtp } from '@/pages/auth/contexts/otp';
import { useStage } from '@/pages/auth/contexts/stage';
import { useProfile } from '@/utils/context/profile';
import { useSession } from '@/utils/context/session';
import React, { useState } from 'react';

export const useSingInForm = () => {
  const { setOtp } = useOtp();
  const { setStage } = useStage();
  const { setProfile } = useProfile();
  const { setSession } = useSession();

  const [type, setType] = useState<'password' | 'text'>('password');
  const [password, setPassword] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  return {
    stage: { type, password, login },
    functions: { setType, setPassword, setLogin },
  };
};
