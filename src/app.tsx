import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import React, { Suspense } from 'react';
import { type Theme, useTheme } from './utils/context/theme';

import {
  ThemeProvider as ThemeProviderUiKit,
  themeOzenDefault,
  themeOzenDark,
} from '@ozen-ui/kit/ThemeProvider';

import { COOKIE } from './utils/constants';
import { useSession } from './utils/context/session';

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools/build/modern/production.js').then(
    (d) => ({
      default: d.ReactQueryDevtools,
    }),
  ),
);

const router = createRouter({
  routeTree,
  context: {
    isAuthenticated: false,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

type ThemesVariant = typeof themeOzenDefault | typeof themeOzenDark;

const Themes: { [key in 'default' | 'dark']: ThemesVariant } = {
  default: themeOzenDefault,
  dark: themeOzenDark,
};

export default function App() {
  const [showDevtools, setShowDevtools] = React.useState(false);
  const { session } = useSession();
  React.useEffect(() => {
    // @ts-expect-error
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  const { theme, setTheme } = useTheme();
  // console.log(theme);

  const selectTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
    localStorage.setItem(COOKIE.THEME, e.target.value);
  };
  const handleClick = () => {};

  return (
    <div className="h-screen w-screen">
      {/* <h1 className="">test</h1>
      <select name="theme" id="" value={theme} onChange={selectTheme}>
        <option value="default">default</option>
        <option value="dark">dark</option>
      </select>
      <h1>theme: {theme}</h1>

      <div className="theme_container">
        <Segment defaultValue="light" onChange={handleClick}>
          <SegmentItem value="light" />
          <SegmentItem value="dark" />
        </Segment>
        {theme === 'default' ? 'Светлая тема' : 'Темная тема'}
      </div> */}
      <ThemeProviderUiKit theme={Themes[theme] ?? themeOzenDefault}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<h1>LOADING...</h1>}>
            <RouterProvider
              router={router}
              context={{ isAuthenticated: session }}
            />
          </Suspense>
          <ReactQueryDevtools initialIsOpen />
          {showDevtools && (
            <React.Suspense fallback={null}>
              <ReactQueryDevtoolsProduction />
            </React.Suspense>
          )}
        </QueryClientProvider>
      </ThemeProviderUiKit>
    </div>
  );
}
