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

interface BaseResponse {
  message: string;
}

const defaultTheme = 'themeOzenDark';
let defaultSession = true;
const defaultLanguage = 'ru';
const defaultError = 'Something went wrong';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
  queryCache: new QueryCache({
    onError: (cause) => {
      const { response } = cause as AxiosError<BaseResponse>;
      toast.error(response?.data.message ?? defaultError, {
        cancel: { label: 'Close' },
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: (cause) => {
      const { response } = cause as AxiosError<BaseResponse>;
      toast.error(response?.data.message ?? defaultError, {
        cancel: { label: 'Close' },
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

  if (!rootElement.innerHTML && defaultSession) {
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
