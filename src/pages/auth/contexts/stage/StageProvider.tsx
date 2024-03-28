import React from 'react';
import { Stage, StageContext } from './stageContext';

export interface StageProviderProps {
  children: React.ReactNode;
  defaultStage: Stage;
}

export const StageProvider: React.FC<StageProviderProps> = ({
  defaultStage,
  children,
}) => {
  const [stage, setStage] = React.useState<Stage>(defaultStage);
  const value = React.useMemo(() => ({ stage, setStage }), [stage]);
  return (
    <StageContext.Provider value={value}>{children}</StageContext.Provider>
  );
};
