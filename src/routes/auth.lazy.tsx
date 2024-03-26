import React from 'react';

import { createLazyFileRoute } from '@tanstack/react-router';
import { Auth } from '@/pages/auth/Auth';
import { AuthLoading } from '@/pages/auth/AuthLoading';
import { ROUTES } from '@/utils/constants';

export const Route = createLazyFileRoute(ROUTES.AUTH)({
  component: Auth,
  pendingComponent: AuthLoading,
});

// function Index() {
//   return (
//     <div className="p-2">
//       <h3>Welcome Home!</h3>
//     </div>
//   );
// }
