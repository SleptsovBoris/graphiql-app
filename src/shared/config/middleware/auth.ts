import { NextRequest, NextResponse } from "next/server";

import { AUTH_COOKIE_NAME } from "@/shared/config/authorization/constants";
import { PROTECTED_ROUTES } from "@/shared/config/routing/routes";
import { isLocale } from "@/shared/utils/i18n";

export function authMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const authToken = req.cookies.get(AUTH_COOKIE_NAME)?.value;

  const [, locale, ...rest] = pathname.split("/");

  if (!isLocale(locale)) return NextResponse.next();

  const pathAfterLocale = `/${rest.join("/")}`;

  const isProtected = PROTECTED_ROUTES.some(
    (route) =>
      pathAfterLocale === `/${route}` ||
      pathAfterLocale.startsWith(`/${route}/`),
  );

  if (isProtected && !authToken) {
    return NextResponse.redirect(new URL(`/${locale}`, req.url));
  }

  return NextResponse.next();
}
