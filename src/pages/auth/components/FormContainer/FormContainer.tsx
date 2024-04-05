import React from 'react';
import { SingInForm } from '../SingInForm/SingInForm';
import { Stage, useStage } from '../../contexts/stage';
import { SingUpForm } from '../SingUpForm/SingUpForm';
import { SelectConfirmation } from '../SelectConfirmation/SelectConfirmation';
import { Confirmation } from '../Confirmation/Confirmation';

const components: Record<Stage, React.ReactNode> = {
  signIn: <SingInForm />,
  signUp: <SingUpForm />,
  selectConfirmation: <SelectConfirmation />,
  confirmation: <Confirmation />,
};

export const FormContainer = () => {
  const { stage } = useStage();
  return components[stage];
};
