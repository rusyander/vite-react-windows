import { createContext } from 'react';

export interface ProfileContextProps {
  profile: ProfileProps;
  setProfile: (profile: ProfileProps) => void;
}

export const ProfileContext = createContext<ProfileContextProps>({
  profile: undefined!,
  setProfile: () => {},
});
