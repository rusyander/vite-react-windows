import { Providers } from './providers';
import { Stage } from './contexts/stage';
import { FormContainer } from './components/FormContainer/FormContainer';

interface AuthPageProps {
  searchParams?: { stage?: Stage };
}

export const AuthPage = ({ searchParams }: AuthPageProps) => {
  const defaultStage = searchParams?.stage ?? 'signIn';

  return (
    <Providers stage={{ defaultStage }}>
      <FormContainer />
    </Providers>
  );
};
