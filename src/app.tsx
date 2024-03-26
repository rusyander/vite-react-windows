import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import React, { Suspense, useContext } from 'react';
import {
  Theme,
  ThemeContext,
  ThemeProvider,
  useTheme,
} from './utils/context/theme';

import { Segment, SegmentItem } from '@ozen-ui/kit/Segment';
import { COOKIE } from './utils/constants';
// import { LightIcon, DarkIcon } from '@ozen-ui/kit/Icon';

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools/build/modern/production.js').then(
    (d) => ({
      default: d.ReactQueryDevtools,
    }),
  ),
);

// Import the generated route tree

// Create a new router instance
const router = createRouter({ routeTree });

// // Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const [showDevtools, setShowDevtools] = React.useState(false);

  React.useEffect(() => {
    // @ts-expect-error
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  const { theme, setTheme } = useTheme();
  console.log(theme);

  const selectTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setTheme(
    //   theme === 'themeOzenDefault' ? 'themeOzenDark' : 'themeOzenDefault',
    // );
    setTheme(e.target.value as Theme);
    localStorage.setItem(COOKIE.THEME, e.target.value);
  };
  const handleClick = () => {
    // setThemeName(themeName === 'default' ? 'dark' : 'default');
  };

  return (
    <>
      <h1 className="">test</h1>
      <select name="theme" id="" value={theme} onChange={selectTheme}>
        {/* <option selected value={theme}>
          themeOzenDefault
        </option> */}
        <option value="themeOzenDefault">themeOzenDefault</option>
        <option value="themeOzenDark">themeOzenDark</option>
      </select>
      <h1>theme: {theme}</h1>

      <div className="theme_container">
        <Segment defaultValue="light" onChange={handleClick}>
          <SegmentItem value="light" />
          <SegmentItem value="dark" />
        </Segment>
        {theme === 'themeOzenDefault' ? 'Светлая тема' : 'Темная тема'}
      </div>

      {/* <QueryClientProvider client={queryClient}>
        <Suspense fallback={<h1>LOADING...</h1>}>
          <RouterProvider router={router} />
        </Suspense>
        <ReactQueryDevtools initialIsOpen />
        {showDevtools && (
          <React.Suspense fallback={null}>
            <ReactQueryDevtoolsProduction />
          </React.Suspense>
        )}
      </QueryClientProvider> */}
    </>
  );
}
