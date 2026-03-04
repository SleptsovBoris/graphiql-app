import { useTranslations } from "next-intl";

import styles from "./ResponceSection.module.scss";

type Props = {
  responseStatus: number | null;
  responseBody: string | null;
};

export const ResponseSection = ({ responseBody, responseStatus }: Props) => {
  const t = useTranslations();

  const getStatusColor = (status: number | null) => {
    if (!status) return "gray";
    if (status >= 200 && status < 300) return "green";
    if (status >= 400 && status < 500) return "orange";
    if (status >= 500) return "red";
    return "gray";
  };

  return (
    <div className={styles.responseSection}>
      <label>{t("status")}:</label>
      <div
        className={styles.status}
        data-status={getStatusColor(responseStatus)}
      >
        {responseStatus ?? "-"}
      </div>
      <label>{t("body")}:</label>
      <pre className={styles.body}>{responseBody ?? ""}</pre>
    </div>
  );
};
