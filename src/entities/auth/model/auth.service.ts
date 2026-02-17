import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "@/shared/config/authorization/firebase";
import { ROUTES } from "@/shared/config/routing/routes";

export enum AuthErrorCode {
  AUTH_NOT_INITIALIZED = "AUTH_NOT_INITIALIZED",
  UNKNOWN = "UNKNOWN",
  USER_NOT_FOUND = "auth/user-not-found",
  WRONG_PASSWORD = "auth/wrong-password",
  INVALID_EMAIL = "auth/invalid-email",
  EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
  WEAK_PASSWORD = "auth/weak-password",
}

const ensureAuthInitialized = () => {
  if (!auth) {
    throw new Error(AuthErrorCode.AUTH_NOT_INITIALIZED);
  }
  return auth;
};

const handleFirebaseError = (error: unknown): never => {
  if (error instanceof FirebaseError) {
    throw new Error(error.code);
  }
  throw new Error(AuthErrorCode.UNKNOWN);
};

const syncSession = async (token: string) => {
  await fetch(ROUTES.LOGIN_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const authService = {
  async signIn(email: string, password: string) {
    const authInstance = ensureAuthInitialized();

    try {
      const credential = await signInWithEmailAndPassword(
        authInstance,
        email,
        password,
      );
      const token = await credential.user.getIdToken();
      await syncSession(token);
      return credential;
    } catch (error) {
      handleFirebaseError(error);
    }
  },

  async signUp(email: string, password: string) {
    const authInstance = ensureAuthInitialized();

    try {
      const credential = await createUserWithEmailAndPassword(
        authInstance,
        email,
        password,
      );
      const token = await credential.user.getIdToken();
      await syncSession(token);
      return credential;
    } catch (error) {
      handleFirebaseError(error);
    }
  },

  async logout() {
    const authInstance = ensureAuthInitialized();

    try {
      await fetch(ROUTES.LOGOUT_API, {
        method: "POST",
      });
      await signOut(authInstance);
    } catch (error) {
      handleFirebaseError(error);
    }
  },
};
