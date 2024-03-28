import { createLazyFileRoute } from '@tanstack/react-router';
import { ROUTES } from '@/utils/constants';
import { MainPage } from '@/pages/main/Main';
import { MainLoad } from '@/pages/main/MainLoad';

export const Route = createLazyFileRoute(ROUTES.INDEX)({
  component: MainPage,
  pendingComponent: MainLoad,
});
