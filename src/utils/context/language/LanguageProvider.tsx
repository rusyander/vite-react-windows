import React from 'react';
import { LanguageContext, Languages } from './LanguageContext';
import { COOKIE } from '@/utils/constants';

export interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage: Languages;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  defaultLanguage,
}) => {
  console.log('language provider');
  const getLanguage =
    (localStorage.getItem(COOKIE.LANGUAGE) as Languages) ?? defaultLanguage;
  const [language, setLanguage] = React.useState(getLanguage);

  const value = React.useMemo(() => ({ language, setLanguage }), [language]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
