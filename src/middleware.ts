import { authMiddleware } from "@/shared/config/middleware/auth";
import { composeMiddleware } from "@/shared/config/middleware/compose";
import { guestMiddleware } from "@/shared/config/middleware/guest";
import { localeMiddleware } from "@/shared/config/middleware/locale";
import { rootRedirectMiddleware } from "@/shared/config/middleware/root";

export const middleware = composeMiddleware([
  rootRedirectMiddleware,
  localeMiddleware,
  guestMiddleware,
  authMiddleware,
]);

export const config = {
  matcher: ["/", "/((?!api|_next|favicon.ico|static|robots.txt|.*\\..+).*)"],
};
