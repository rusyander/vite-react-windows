import { useOtp } from '@/pages/auth/contexts/otp';
import { useStage } from '@/pages/auth/contexts/stage';
import React from 'react';

export const useSelectConfirmation = () => {
  const { setOtp, otp } = useOtp();
  const { setStage } = useStage();

  const [selectConfirmationFormStage, setSelectConfirmationFormStage] =
    React.useState<'select' | 'form'>('select');
  const [selectedResource, setSelectedResource] = React.useState<
    'phone' | 'email'
  >(otp.type);

  const onSubmitToResourceForm = () => {
    setSelectConfirmationFormStage('form');

    setOtp({
      type: selectedResource,
      resource: 'form',
      typeValue: '',
      retryDelay: 0,
    });
  };

  const goToSignIn = () => {
    setStage('signIn');
  };

  const backToSelectConfirmationFormStage = () => {
    setSelectConfirmationFormStage('select');

    setOtp({
      type: selectedResource,
      resource: 'select',
      typeValue: '',
      retryDelay: 0,
    });
  };

  const handleSendEmail = () => {
    console.log('email sent');
    setStage('confirmation');
    setOtp({
      type: selectedResource,
      resource: 'select',
      typeValue: 'email',
      retryDelay: 0,
    });
  };

  const handleSendPhone = () => {
    console.log('Phone sent');
    setStage('confirmation');
    setOtp({
      type: selectedResource,
      resource: 'select',
      typeValue: 'phone',
      retryDelay: 0,
    });
  };
  return {
    functions: {
      setSelectConfirmationFormStage,
      setSelectedResource,
      onSubmitToResourceForm,
      backToSelectConfirmationFormStage,
      goToSignIn,
      handleSendEmail,
      handleSendPhone,
    },
    state: { selectConfirmationFormStage, selectedResource, otp },
  };
};
