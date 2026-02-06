"use client";

import styles from "./LangToggler.module.scss";

import { useRouter, usePathname, Locale } from "@/shared/config/i18n/routing";
import {
  getNextLocale,
  isDefaultLocale,
  useTypedLocale,
} from "@/shared/utils/i18n";

export const LangToggler = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useTypedLocale();

  const changeLanguage = (locale: Locale) => {
    router.replace(pathname, { locale });
  };

  const handleToggle = () => {
    changeLanguage(getNextLocale(locale));
  };

  return (
    <div className={styles.toggleButton} onClick={handleToggle}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={isDefaultLocale(locale)}
        onChange={handleToggle}
      />
      <div className={styles.knobs}></div>
      <div className={styles.layer}></div>
    </div>
  );
};
