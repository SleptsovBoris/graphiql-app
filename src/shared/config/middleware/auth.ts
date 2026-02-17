import { NextRequest, NextResponse } from "next/server";

import { PROTECTED_ROUTES } from "@/shared/config/routing/routes";
import { isLocale } from "@/shared/utils/i18n";

export function authMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const authToken = req.cookies.get("session")?.value;

  const [, locale, ...rest] = pathname.split("/");

  if (!isLocale(locale)) return;

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
