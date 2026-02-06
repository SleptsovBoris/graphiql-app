import { NextRequest, NextResponse } from "next/server";

import { i18nRouting } from "@/shared/config/i18n/routing";

export function rootRedirectMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    const defaultPath = `/${i18nRouting.defaultLocale}`;
    if (pathname !== defaultPath)
      return NextResponse.redirect(new URL(defaultPath, req.url));
  }
}
