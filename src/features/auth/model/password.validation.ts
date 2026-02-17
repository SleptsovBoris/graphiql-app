export type PasswordValidationError =
  | "LENGTH"
  | "UPPERCASE"
  | "LOWERCASE"
  | "NUMBER"
  | "SPECIAL_CHAR";

export const validatePassword = (
  password: string,
): PasswordValidationError[] => {
  const errors: PasswordValidationError[] = [];

  if (password.length < 8) errors.push("LENGTH");
  if (!/[A-Z]/.test(password)) errors.push("UPPERCASE");
  if (!/[a-z]/.test(password)) errors.push("LOWERCASE");
  if (!/\d/.test(password)) errors.push("NUMBER");
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push("SPECIAL_CHAR");

  return errors;
};
