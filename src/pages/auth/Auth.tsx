import { Providers } from './providers';
import { Stage } from './contexts/stage';

interface AuthPageProps {
  searchParams?: { stage?: Stage };
}

export const AuthPage = ({ searchParams }: AuthPageProps) => {
  console.log('Auth');

  const defaultStage = searchParams?.stage ?? 'signIn';

  return (
    <>
      <Providers stage={{ defaultStage }}>
        <h1>AuthPage</h1>
      </Providers>
    </>
  );
};
