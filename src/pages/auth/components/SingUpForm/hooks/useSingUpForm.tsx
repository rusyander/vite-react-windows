import { useStage } from '@/pages/auth/contexts/stage';
import React from 'react';
import { COUNTRIES, signUpSchema, SingUpForm } from '../constants';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const useSingUpForm = () => {
  const { setStage } = useStage();

  const [typePassword, setTypePassword] = React.useState<'password' | 'text'>(
    'password',
  );
  const [typePasswordConfirm, setTypePasswordConfirm] = React.useState<
    'password' | 'text'
  >('password');
  const [select, setSelect] = React.useState<number>(COUNTRIES[0].id);
  const [passwordMessage, setPasswordMessage] = React.useState<boolean>(true);

  const signUpForm = useForm<SingUpForm>({
    defaultValues: {
      country: COUNTRIES[0],
    },
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = signUpForm.handleSubmit(async () => {
    const { passwordConfirmation, ...values } = signUpForm.getValues();
    if (values.password !== passwordConfirmation) {
      setPasswordMessage(false);
      console.log('passwords do not match');

      return;
    }
    console.log(values, passwordConfirmation);
    // setStage('signIn');

    // await postSingUpMutation.mutateAsync({ params: values });
    // goToSignIn();
  });

  const goToSignIn = () => {
    setStage('signIn');
  };

  return {
    form: signUpForm,
    functions: {
      onSubmit,
      setTypePassword,
      setTypePasswordConfirm,
      setSelect,
      goToSignIn,
      setPasswordMessage,
    },
    state: { typePassword, typePasswordConfirm, select, passwordMessage },
  };
};
