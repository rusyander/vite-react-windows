import React from 'react';
import { SingInForm } from '../SingInForm/SingInForm';
import { Stage, useStage } from '../../contexts/stage';
import { SingUpForm } from '../SingUpForm/SingUpForm';
import { SelectConfirmation } from '../SelectConfirmation/SelectConfirmation';

const components: Record<Stage, React.ReactNode> = {
  signIn: <SingInForm />,
  signUp: <SingUpForm />,
  selectConfirmation: <SelectConfirmation />,
  confirmation: null,
};

export const FormContainer = () => {
  const { stage } = useStage();
  return components[stage];
};
