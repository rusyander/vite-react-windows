import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

interface RouterContext {
  isAuthenticated: boolean;
}

export const Route = createRootRoute({
  component: () => (
    <div className=" w-full h-full">
      <header className="flex  items-center justify-between p-4 w-1/4">
        <Link to="/auth" className="[&.active]:font-bold">
          Auth
        </Link>
        <Link to="/" className="[&.active]:font-bold color">
          home
        </Link>
      </header>
      <div className="">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
