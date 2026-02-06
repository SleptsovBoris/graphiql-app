import { authMiddleware } from "@/shared/ui/middleware/auth";
import { composeMiddleware } from "@/shared/ui/middleware/compose";
import { guestMiddleware } from "@/shared/ui/middleware/guest";
import { localeMiddleware } from "@/shared/ui/middleware/locale";
import { rootRedirectMiddleware } from "@/shared/ui/middleware/root";

export const middleware = composeMiddleware([
  rootRedirectMiddleware,
  localeMiddleware,
  guestMiddleware,
  authMiddleware,
]);

export const config = {
  matcher: [
    "/",
    "/:locale((?!_next|favicon.ico|static|robots.txt|.*\\..+).*)/:path*",
  ],
};
