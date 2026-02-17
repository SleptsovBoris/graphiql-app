"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import styles from "./SignUpForm.module.scss";

import { useSignUp } from "@/features/auth/model/useSignUp";
import { useRouter } from "@/shared/config/i18n/routing";
import { ROUTES } from "@/shared/config/routing/routes";

const SignUp = () => {
  const t = useTranslations();
  const router = useRouter();
  const { signUp, isLoading, error, success } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;

    await signUp(email, password);

    router.push(ROUTES.ROOT);
  };

  return (
    <main className={styles.main}>
      <div className={styles.signInBox}>
        <h2>{t("sign-up")}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder={t("password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={isLoading}>
            {t("submit")}
          </button>

          {error && <p className={styles.error}>{error}</p>}

          {success && <p className={styles.success}>{t("success-sign-up")}</p>}
        </form>
      </div>
    </main>
  );
};

export default SignUp;
