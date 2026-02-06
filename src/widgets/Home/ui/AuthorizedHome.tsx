import { useTranslations } from "next-intl";

import { About } from "@/shared/ui/About";
import { NavLinks } from "@/shared/ui/Navigation";

export const AuthorizedHome = ({ email }: { email: string }) => {
  const t = useTranslations();

  return (
    <>
      <h1>
        {t("second-greeting")}, {email}
      </h1>
      <NavLinks />
      <About />
    </>
  );
};
