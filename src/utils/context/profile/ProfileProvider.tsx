import React from 'react';
import { ProfileContext } from './profileContext';

export interface ProfileProviderProps {
  children: React.ReactNode;
  defaultProfile: ProfileProps | undefined;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({
  children,
  defaultProfile,
}) => {
  const [profile, setProfile] = React.useState<ProfileProps>(
    defaultProfile || ({} as ProfileProps),
  );

  const value = React.useMemo(() => ({ profile, setProfile }), [profile]);
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
