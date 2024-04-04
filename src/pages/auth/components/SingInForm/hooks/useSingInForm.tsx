import { useOtp } from '@/pages/auth/contexts/otp';
import { useStage } from '@/pages/auth/contexts/stage';
import { useProfile } from '@/utils/context/profile';
import { useSession } from '@/utils/context/session';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  SingInForm,
  singInFormSchema,
} from '../constants/index.ts/singInFormSchema';

export const useSingInForm = () => {
  const { setOtp } = useOtp();
  const { setStage } = useStage();
  const { setProfile } = useProfile();
  const { setSession } = useSession();

  const [type, setType] = useState<'password' | 'text'>('password');
  const [password, setPassword] = useState<string>('');
  const [login, setLogin] = useState<string>('');

  const signInForm = useForm<SingInForm>({
    resolver: zodResolver(singInFormSchema),
  });

  const createNewAccount = () => {
    setStage('signUp');
    // console.log('signUp');
  };

  const onSubmit = signInForm.handleSubmit(async () => {
    const values = signInForm.getValues();
    const numbersRandom = Math.round(Math.random());
    console.log(numbersRandom);

    // if (numbersRandom === 1) {
    //   setStage('signIn');
    //   setSession(true);
    // }

    // if (numbersRandom === 0) {
    //   setStage('selectConfirmation');
    //   setSession(false);
    // }

    setStage('selectConfirmation');
  });

  return {
    form: signInForm,
    stage: { type, password, login },
    functions: { setType, setPassword, setLogin, createNewAccount, onSubmit },
  };
};
