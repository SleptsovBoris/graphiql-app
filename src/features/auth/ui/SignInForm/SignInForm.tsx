"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";

import styles from "./SignInForm.module.scss";

import { FormSubmitEvent } from "@/features/auth/model/types";
import { useSignIn } from "@/features/auth/model/useSignIn";
import { ROUTES } from "@/shared/config/routing/routes";
import { Loader } from "@/shared/ui/Loader";

const SignIn = () => {
  const t = useTranslations();
  const router = useRouter();
  const { signIn, isLoading, error } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    await signIn(email, password);
    router.push(ROUTES.ROOT);
  };

  return (
    <main className={styles.main}>
      <div className={styles.signInBox}>
        <h2>{t("sign-in")}</h2>

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
            {isLoading ? <Loader /> : t("submit")}
          </button>

          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </main>
  );
};

export default SignIn;
