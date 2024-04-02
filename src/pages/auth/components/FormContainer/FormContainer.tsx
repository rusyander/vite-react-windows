import React from 'react';
import { SingInForm } from '../SingInForm/SingInForm';
import { Stage, useStage } from '../../contexts/stage';

const components: Record<Stage, React.ReactNode> = {
  signIn: <SingInForm />,
  signUp: null,
  selectConfirmation: null,
  confirmation: null,
};

export const FormContainer = () => {
  const { stage } = useStage();
  return components[stage];
};
