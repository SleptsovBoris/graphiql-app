"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import styles from "./Header.module.scss";

import { useAuth } from "@/features/auth/model/useAuth";
import { LangToggler } from "@/features/LangToggler";
import { Link, useRouter } from "@/shared/config/i18n/routing";
import { ROUTES } from "@/shared/config/routing/routes";

export const Header = () => {
  const t = useTranslations();
  const router = useRouter();
  const { user, signOut } = useAuth();

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    await signOut();
    router.push(ROUTES.ROOT);
    router.refresh();
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <Link href={ROUTES.ROOT} className={styles.logoWrapper}>
        <Image src="/team-logo.svg" alt="Logo" width={30} height={30} />
      </Link>

      <div className={styles.languageToggle}>
        <LangToggler />
      </div>

      <div className={styles.signNavigation}>
        {user ? (
          <div className={styles.signNav} onClick={handleLogout}>
            {t("logout")}
          </div>
        ) : (
          <>
            <Link href={ROUTES.SIGN_IN} className={styles.signNav}>
              {t("sign-in")}
            </Link>
            |
            <Link href={ROUTES.SIGN_UP} className={styles.signNav}>
              {t("sign-up")}
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
