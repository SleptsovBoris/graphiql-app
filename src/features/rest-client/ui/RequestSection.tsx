import { useTranslations } from "next-intl";

import { BodySection } from "./BodySection";
import { MethodUrlSection } from "./MethodUrlSection";
import styles from "./styles.module.scss";
import { RestState } from "../model/types";

import { Header, HttpMethod } from "@/shared/lib/http/types";
import { HttpHeaders } from "@/shared/ui/HttpHeaders";

type Props = {
  state: RestState;
  setMethod: (method: HttpMethod) => void;
  setHeaders: (headers: Header[]) => void;
  setUrl: (url: string) => void;
  setBody: (body: string) => void;
  sendRequest: () => void;
};

export const RequestSection = ({
  state,
  setMethod,
  setUrl,
  setHeaders,
  setBody,
  sendRequest,
}: Props) => {
  const t = useTranslations();
  const { method, url, headers, body } = state;
  return (
    <div className={styles.requestSection}>
      <MethodUrlSection
        method={method}
        setMethod={setMethod}
        url={url}
        setUrl={setUrl}
      />
      <HttpHeaders headers={headers} setHeaders={setHeaders} />
      <BodySection
        label={t("body")}
        placeholder={t("json/text-editor")}
        value={body}
        onChange={setBody}
      />
      <button onClick={sendRequest}>{t("send-request")}</button>
    </div>
  );
};
