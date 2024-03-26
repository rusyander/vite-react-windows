import { createFileRoute, redirect } from '@tanstack/react-router';
import * as zod from 'zod';

import { ROUTES } from '@/utils/constants/index';

const authSearchSchema = zod.object({
  stage: zod.string().optional().catch('signIn'),
});
export const Route = createFileRoute(ROUTES.AUTH)({
  validateSearch: authSearchSchema,
  beforeLoad: ({ context }) => {
    redirect({
      to: '/auth',
    });
  },
});
// ({
//   validateSearch: authSearchSchema,
//   // beforeLoad: ({ context }) => {
//   //   if (context.isAuthenticated) {
//   //     throw redirect({
//   //       to: '/'
//   //     });
//   //   }
//   // }
// });
