import { createLazyFileRoute } from '@tanstack/react-router';
import { AuthPage } from '@/pages/auth/Auth';
import { AuthLoading } from '@/pages/auth/AuthLoading';
import { ROUTES } from '@/utils/constants';

export const Route = createLazyFileRoute(ROUTES.AUTH)({
  component: AuthPage,
  pendingComponent: AuthLoading,
});
