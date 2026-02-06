import { NextRequest, NextResponse } from "next/server";

import { PUBLIC_ROUTES } from "@/shared/config/routing/routes";
import { isLocale } from "@/shared/utils/i18n";

export function guestMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const authToken = req.cookies.get("authToken")?.value;

  const [, locale, ...rest] = pathname.split("/");

  if (!isLocale(locale)) return;

  const pathAfterLocale = `/${rest.join("/")}`;

  const isGuest = PUBLIC_ROUTES.some((route) =>
    pathAfterLocale.startsWith(`/${route}`),
  );

  if (isGuest && authToken && pathname !== `/${locale}`) {
    return NextResponse.redirect(new URL(`/${locale}`, req.url));
  }
}
