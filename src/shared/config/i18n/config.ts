import { getRequestConfig } from "next-intl/server";

import { i18nRouting } from "./routing";

import { isLocale } from "@/shared/utils/i18n";

import { readFileSync } from "fs";
import { join } from "path";

export default getRequestConfig(async ({ requestLocale }) => {
  const rawLocale = await requestLocale;

  const locale = isLocale(rawLocale) ? rawLocale : i18nRouting.defaultLocale;

  const messages = JSON.parse(
    readFileSync(
      join(process.cwd(), "public/locales", locale, "translation.json"),
      "utf-8",
    ),
  );

  return {
    locale,
    messages,
  };
});
