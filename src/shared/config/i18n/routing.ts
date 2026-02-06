import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const i18nRouting = defineRouting({
  locales: ["en", "ru"],
  defaultLocale: "en",
});

export type Locale = (typeof i18nRouting.locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(i18nRouting);
