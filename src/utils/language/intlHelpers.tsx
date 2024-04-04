import type { PrimitiveType } from 'intl-messageformat';
import * as React from 'react';
import { IntlProvider as IntlProvider_, useIntl } from 'react-intl';
import * as sourceOfTruth from '../../../lang/en.json';

export type LocaleMessages = typeof sourceOfTruth;
export type LocaleKey = keyof LocaleMessages;

export function useFormatMessage(): (
  id: LocaleKey,
  values?: Record<string, PrimitiveType>,
) => string {
  const intl = useIntl();
  return (id, values) => intl.formatMessage({ id }, values);
}

type SupportedLocales = 'en' | 'ru';

export function importMessages(
  locale: SupportedLocales,
): Promise<LocaleMessages> {
  switch (locale) {
    case 'en':
      return import('../../../lang/en.json').then((p) => p.default);
    case 'ru':
      return import('../../../lang/ru.json').then((p) => p.default);
  }
}

export const IntlProvider: React.FC<
  Omit<React.ComponentProps<typeof IntlProvider_>, 'messages'> & {
    messages: LocaleMessages;
  }
> = (props) => <IntlProvider_ {...props} />;
