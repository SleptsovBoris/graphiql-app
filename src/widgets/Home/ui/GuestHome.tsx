import { useTranslations } from "next-intl";

import { About } from "@/shared/ui/About";
import { AuthLinks } from "@/shared/ui/Navigation";

export const GuestHome = () => {
  const t = useTranslations();

  return (
    <>
      <h1>{t("greeting")}!</h1>
      <AuthLinks />
      <About />
    </>
  );
};
