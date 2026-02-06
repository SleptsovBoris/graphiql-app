import { useLocale } from "next-intl";

import { Locale, i18nRouting } from "@/shared/config/i18n/routing";

export function isLocale(value: unknown): value is Locale {
  if (typeof value !== "string") return false;
  return i18nRouting.locales.some((locale) => locale === value);
}

export function getNextLocale(locale: Locale): Locale {
  const index = i18nRouting.locales.indexOf(locale);
  return i18nRouting.locales[(index + 1) % i18nRouting.locales.length];
}

export function isDefaultLocale(locale: Locale): boolean {
  return locale === i18nRouting.defaultLocale;
}

export function useTypedLocale(): Locale {
  const locale = useLocale();
  return isLocale(locale) ? locale : i18nRouting.defaultLocale;
}
