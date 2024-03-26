import React from 'react';

interface AuthPageProps {
  searchParams?: { stage?: true };
}

export const Auth = ({ searchParams }: AuthPageProps) => {
  console.log('Auth');

  const defaultStage = searchParams.stage ?? 'signIn';

  return <p className="text-red-600">Auth</p>;
};
