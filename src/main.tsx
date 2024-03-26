import React, { StrictMode } from 'react';
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
const DEFAULT_ERROR = 'Something went wrong';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
  queryCache: new QueryCache({
    onError: (cause) => {
      const { response } = cause as AxiosError<BaseResponse>;
      toast.error(response?.data.message ?? DEFAULT_ERROR, {
        cancel: { label: 'Close' },
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: (cause) => {
      const { response } = cause as AxiosError<BaseResponse>;
      toast.error(response?.data.message ?? DEFAULT_ERROR, {
        cancel: { label: 'Close' },
      });
    },
  }),
});

const providerProps: Omit<ProviderProps, 'children'> = {
  theme: { defaultTheme },
  session: { defaultSession },
};

if (!rootElement.innerHTML) {
  root.render(
    <StrictMode>
      <Providers {...providerProps}>
        <App />
      </Providers>
    </StrictMode>,
  );
}

const init = () => {
  const token = localStorage.getItem(COOKIE.ACCESS_TOKEN);
};
