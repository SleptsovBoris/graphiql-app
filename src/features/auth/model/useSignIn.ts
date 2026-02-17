import { useTranslations } from "next-intl";
import { useState } from "react";

import { AuthErrorCode, authService } from "@/entities/auth/model/auth.service";

export const mapAuthError = (code: string, t: (key: string) => string) => {
  switch (code) {
    case AuthErrorCode.AUTH_NOT_INITIALIZED:
      return "Auth not initialized";
    case AuthErrorCode.USER_NOT_FOUND:
      return t("error-user-not-found");
    case AuthErrorCode.WRONG_PASSWORD:
      return t("error-wrong-password");
    case AuthErrorCode.INVALID_EMAIL:
      return t("error-invalid-email");
    default:
      return t("error-sign-in");
  }
};

export const useSignIn = () => {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await authService.signIn(email, password);
    } catch (error) {
      const errorCode = (error as Error).message;
      setError(mapAuthError(errorCode, t));
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signIn,
    isLoading,
    error,
  };
};
