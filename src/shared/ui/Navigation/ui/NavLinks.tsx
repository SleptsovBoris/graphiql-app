import { useTranslations } from "next-intl";

import styles from "./NavLinks.module.scss";

import { Link } from "@/shared/config/i18n/routing";
import { ROUTES } from "@/shared/config/routing/routes";

export const NavLinks = () => {
  const t = useTranslations();
  return (
    <div className={styles.navigation}>
      <Link href={ROUTES.REST_CLIENT}>Rest {t("client")}</Link>|
      <Link href={ROUTES.GRAPHIQL_CLIENT}>GraphiQL {t("client")}</Link>|
      <Link href="/history">{t("history")}</Link>
    </div>
  );
};
