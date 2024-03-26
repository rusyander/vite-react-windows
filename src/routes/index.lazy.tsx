import React from 'react';

import { createLazyFileRoute } from '@tanstack/react-router';
import { ROUTES } from '@/utils/constants';

export const Route = createLazyFileRoute(ROUTES.INDEX)({
  component: Index,
});

function Index() {
  return (
    <div className="p-0">
      <p>Welcome INDEX!</p>
    </div>
  );
}
