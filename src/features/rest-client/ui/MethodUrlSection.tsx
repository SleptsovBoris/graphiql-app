import { useTranslations } from "next-intl";

import styles from "./styles.module.scss";

type Props = {
  method: string;
  setMethod: (v: string) => void;
  url: string;
  setUrl: (v: string) => void;
};

export const MethodUrlSection = ({ method, setMethod, url, setUrl }: Props) => {
  const t = useTranslations();
  return (
    <div className={styles.methodUrl}>
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input
        type="text"
        placeholder={t("endpoint-URL")}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>
  );
};
