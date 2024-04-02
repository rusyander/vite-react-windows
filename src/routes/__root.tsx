import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Toaster } from 'sonner';

interface RouterContext {
  isAuthenticated: boolean;
}

const TOASTER_DURATION = 6000;

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <div className="h-screen w-screen">
      {/* <header className="flex  w-1/4 items-center justify-between p-4">
        <Link to="/auth" className="[&.active]:font-bold">
          Auth
        </Link>
        <Link to="/" className="color [&.active]:font-bold">
          home
        </Link>
      </header> */}
      <>
        <Outlet />
      </>
      <Toaster duration={TOASTER_DURATION} />
      <TanStackRouterDevtools />
    </div>
  ),
});
