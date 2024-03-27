import React from 'react';
import { ProfileContext } from './profileContext';

export const useProfile = () => React.useContext(ProfileContext);
