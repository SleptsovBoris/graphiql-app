import { useTranslations } from "next-intl";

import styles from "./styles.module.scss";

import { HTTP_METHODS } from "@/shared/lib/http/constants";
import { HttpMethod } from "@/shared/lib/http/types";

type Props = {
  method: HttpMethod;
  setMethod: (value: HttpMethod) => void;
  url: string;
  setUrl: (value: string) => void;
};

export const MethodUrlSection = ({ method, setMethod, url, setUrl }: Props) => {
  const t = useTranslations();
  return (
    <div className={styles.methodUrl}>
      <select
        value={method}
        onChange={(e) => setMethod(e.target.value as HttpMethod)}
      >
        {HTTP_METHODS.map((method) => (
          <option key={method} value={method}>
            {method}
          </option>
        ))}
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
