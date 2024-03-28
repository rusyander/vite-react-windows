import React from 'react';
import { StageContext } from './stageContext';

export const useStage = () => React.useContext(StageContext);
