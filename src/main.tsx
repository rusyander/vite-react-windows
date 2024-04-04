import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.tsx';
import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { toast } from 'sonner';
import { COOKIE } from './utils/constants/cookies.ts';
import Providers from './providers.tsx';
import type { ProviderProps } from './providers.tsx';
import { Languages } from './utils/context/language';

interface BaseResponse {
  message: string;
}

const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'default';
let defaultSession = false;
const defaultLanguage = (window.navigator.language as Languages) ?? 'ru';
const defaultError = 'Something went wrong';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
  queryCache: new QueryCache({
    onError: (cause) => {
      const { response } = cause as AxiosError<BaseResponse>;
      toast.error(response?.data.message ?? defaultError, {
        cancel: { label: 'Close' } as any,
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: (cause) => {
      const { response } = cause as AxiosError<BaseResponse>;
      toast.error(response?.data.message ?? defaultError, {
        cancel: { label: 'Close' } as any,
      });
    },
  }),
});

const init = () => {
  const token = localStorage.getItem(COOKIE.ACCESS_TOKEN);

  const providersProps: Omit<ProviderProps, 'children'> = {
    theme: { defaultTheme },
    session: { defaultSession },
    language: { defaultLanguage },
    query: { client: queryClient },
    profile: { defaultProfile: undefined },
    error: { defaultError },
  };

  // if (token) {
  //   const getProfileQuery = await queryClient.fetchQuery({
  //     queryKey: ['getProfile'],
  //     queryFn: () => getProfile()
  //   });

  //   providersProps.profile.defaultProfile = getProfileQuery?.data?.profile;
  //   providersProps.session.defaultSession = !!getProfileQuery?.data;
  // }

  if (!rootElement.innerHTML) {
    root.render(
      <StrictMode>
        <Providers {...providersProps}>
          <App />
        </Providers>
      </StrictMode>,
    );
  }
};

init();
