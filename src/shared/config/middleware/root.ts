import { NextRequest, NextResponse } from "next/server";

import { ROUTES } from "../routing/routes";

import { i18nRouting } from "@/shared/config/i18n/routing";

export function rootRedirectMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === ROUTES.ROOT) {
    const defaultPath = `/${i18nRouting.defaultLocale}`;
    return NextResponse.redirect(new URL(defaultPath, req.url));
  }

  return NextResponse.next();
}
