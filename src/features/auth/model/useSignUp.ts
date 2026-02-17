import { useTranslations } from "next-intl";
import { useState } from "react";

import {
  validatePassword,
  PasswordValidationError,
} from "./password.validation";

import { AuthErrorCode, authService } from "@/entities/auth/model/auth.service";

const mapPasswordErrors = (
  errors: PasswordValidationError[],
  t: (key: string) => string,
) =>
  errors.map((error) => {
    switch (error) {
      case "LENGTH":
        return t("error-password-length");
      case "UPPERCASE":
        return t("error-password-uppercase");
      case "LOWERCASE":
        return t("error-password-lowercase");
      case "NUMBER":
        return t("error-password-number");
      case "SPECIAL_CHAR":
        return t("error-password-special-char");
    }
  });

const mapSignUpError = (code: string, t: (key: string) => string) => {
  switch (code) {
    case AuthErrorCode.EMAIL_ALREADY_IN_USE:
      return t("error-email-already-in-use");
    case AuthErrorCode.INVALID_EMAIL:
      return t("error-invalid-email");
    case AuthErrorCode.WEAK_PASSWORD:
      return t("error-weak-password");
    default:
      return t("error-sign-up");
  }
};

export const useSignUp = () => {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length) {
      setError(mapPasswordErrors(passwordErrors, t).join(", "));
      setIsLoading(false);
      return;
    }

    try {
      await authService.signUp(email, password);
      setSuccess(true);
    } catch (e) {
      setError(mapSignUpError((e as Error).message, t));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signUp,
    isLoading,
    error,
    success,
  };
};
