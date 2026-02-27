import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

import { Locale } from "@/shared/config/i18n/routing";

type IntlProviderProps = {
  locale: Locale;
  messages: AbstractIntlMessages | undefined;
  children: React.ReactNode;
};

const IntlProvider = ({ locale, messages, children }: IntlProviderProps) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default IntlProvider;
