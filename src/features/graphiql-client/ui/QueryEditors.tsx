"use client";

import { useTranslations } from "next-intl";

import styles from "./styles.module.scss";

type Props = {
  query: string;
  setQuery: (value: string) => void;
  variables: string;
  setVariables: (value: string) => void;
};

export const QueryEditors = ({
  query,
  setQuery,
  variables,
  setVariables,
}: Props) => {
  const t = useTranslations();
  return (
    <>
      <div className={styles.bodySection}>
        <label>{t("query")}:</label>
        <textarea
          placeholder={t("graphql-query-editor")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className={styles.bodySection}>
        <label>{t("variables")}:</label>
        <textarea
          placeholder={t("variables-editor")}
          value={variables}
          onChange={(e) => setVariables(e.target.value)}
        />
      </div>
    </>
  );
};
