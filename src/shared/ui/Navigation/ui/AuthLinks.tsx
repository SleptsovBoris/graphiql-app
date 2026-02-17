import { useTranslations } from "next-intl";

import styles from "./NavLinks.module.scss";

import { Link } from "@/shared/config/i18n/routing";
import { ROUTES } from "@/shared/config/routing/routes";

export const AuthLinks = () => {
  const t = useTranslations();
  return (
    <div className={styles.navigation}>
      <Link href={ROUTES.SIGN_IN}>{t("sign-in")}</Link>|
      <Link href={ROUTES.SIGN_UP}>{t("sign-up")}</Link>
    </div>
  );
};
