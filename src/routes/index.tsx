import { createFileRoute, redirect } from '@tanstack/react-router';
import { ROUTES } from '@/utils/constants';

export const Route = createFileRoute(ROUTES.INDEX)({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/auth',
      });
    }
  },

  onError(err) {
    console.error('index route error', err);
  },
});
