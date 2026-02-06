import { NextRequest, NextResponse } from "next/server";

import { i18nRouting } from "@/shared/config/i18n/routing";
import { isLocale } from "@/shared/utils/i18n";

export function localeMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const [, locale, ...rest] = pathname.split("/");

  if (isLocale(locale)) return;
  const redirectUrl = new URL(
    `/${i18nRouting.defaultLocale}/${rest.join("/")}`,
    req.url,
  );

  return NextResponse.redirect(redirectUrl);
}
