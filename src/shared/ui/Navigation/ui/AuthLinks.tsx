import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./NavLinks.module.scss";

export const AuthLinks = () => {
  const t = useTranslations();
  return (
    <div className={styles.navigation}>
      <Link href="/sign-in">{t("sign-in")}</Link>|
      <Link href="/sign-up">{t("sign-up")}</Link>
    </div>
  );
};
