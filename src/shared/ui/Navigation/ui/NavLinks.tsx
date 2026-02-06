import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./NavLinks.module.scss";

export const NavLinks = () => {
  const t = useTranslations();
  return (
    <div className={styles.navigation}>
      <Link href="/rest-client">Rest {t("client")}</Link>|
      <Link href="/graphiql-client">GraphiQL {t("client")}</Link>|
      <Link href="/history">{t("history")}</Link>
    </div>
  );
};
