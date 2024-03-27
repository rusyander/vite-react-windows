import { createContext } from 'react';

export type Languages = 'en' | 'ru';
export interface LanguageContextProps {
  language: Languages;
  setLanguage: (lang: Languages) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'ru',
  setLanguage: () => {},
});
