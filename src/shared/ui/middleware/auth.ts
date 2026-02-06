import { NextRequest, NextResponse } from "next/server";

import { PROTECTED_ROUTES } from "@/shared/config/routing/routes";
import { isLocale } from "@/shared/utils/i18n";

export function authMiddleware(req: NextRequest) {
  const authToken = req.cookies.get("authToken")?.value;
  const { pathname } = req.nextUrl;

  const [, locale, ...rest] = pathname.split("/");

  if (!isLocale(locale)) return;

  const pathAfterLocale = `/${rest.join("/")}`;

  const isProtected = PROTECTED_ROUTES.some((route) =>
    pathAfterLocale.startsWith(`/${route}`),
  );

  if (isProtected && !authToken && pathname !== `/${locale}`) {
    return NextResponse.redirect(new URL(`/${locale}`, req.url));
  }
}
