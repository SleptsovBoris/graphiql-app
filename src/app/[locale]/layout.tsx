import { Inter } from "next/font/google";
import "./globals.scss";
import { getMessages, getTranslations } from "next-intl/server";

import { i18nRouting, Locale } from "@/shared/config/i18n/routing";
import { AuthProvider } from "@/shared/providers/AuthProvider/AuthProvider";
import IntlProvider from "@/shared/providers/IntlProvider/IntlProvider";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ui/ErrorBoundary";
import { Footer } from "@/shared/ui/Footer";
import { Header } from "@/widgets/Header";

type Props = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export function generateStaticParams() {
  return i18nRouting.locales.map((locale) => ({ locale }));
}

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: Omit<Props, "children">) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ErrorBoundary>
          <IntlProvider locale={locale} messages={messages}>
            <AuthProvider>
              <div className="rootWrapper">
                <Header />
                <main className="mainWrapper">{children}</main>
                <Footer />
              </div>
            </AuthProvider>
          </IntlProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
