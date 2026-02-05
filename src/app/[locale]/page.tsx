"use client";

import { onAuthStateChanged } from "firebase/auth";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

import styles from "./page.module.scss";

import { auth } from "@/authorization/firebase";
import { Link } from "@/i18n/routing";
import { About } from "@/shared/ui/About";

export default function Home() {
  const t = useTranslations();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.homeContent}>
      {email ? (
        <>
          <h1>
            {t("second-greeting")}, {email}
          </h1>
          <div className={styles.navigation}>
            <Link href="/rest-client">Rest {t("client")}</Link>|
            <Link href="/graphiql-client">GraphiQL {t("client")}</Link>|
            <Link href="/history">{t("history")}</Link>
          </div>
          <About />
        </>
      ) : (
        <div className={styles.homeContent}>
          <h1>{t("greeting")}!</h1>
          <div className={styles.navigation}>
            <Link href="/sign-in">{t("sign-in")}</Link>|
            <Link href="/sign-up">{t("sign-up")}</Link>
          </div>
          <About />
        </div>
      )}
    </div>
  );
}
