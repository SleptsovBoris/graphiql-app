"use client";

import { useTranslations } from "next-intl";

import styles from "./styles.module.scss";

type Props = {
  documentation: string;
};

export const DocumentationSection = ({ documentation }: Props) => {
  const t = useTranslations();
  return (
    <div className={styles.documentationSection}>
      <label>{t("documentation")}:</label>
      <textarea
        value={documentation}
        placeholder={t("visible-if-sdl-response-success")}
        readOnly
      />
    </div>
  );
};
