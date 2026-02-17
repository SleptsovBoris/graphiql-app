import { Link } from "@/shared/config/i18n/routing";
import { ROUTES } from "@/shared/config/routing/routes";

export default function NotFound() {
  return (
    <div>
      <h2>404 Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={ROUTES.ROOT}>Return Home</Link>
    </div>
  );
}
