import { useTranslations } from "next-intl";

import { BodySection } from "./BodySection";
import { MethodUrlSection } from "./MethodUrlSection";
import styles from "./styles.module.scss";
import { RestAction } from "../model/restReducer";
import { Header, RestState } from "../model/types";

import { HttpHeaders } from "@/shared/ui/HttpHeaders";

type Props = {
  state: RestState;
  dispatch: React.Dispatch<RestAction>;
  sendRequest: () => void;
};

export const RequestSection = ({ state, dispatch, sendRequest }: Props) => {
  const t = useTranslations();
  const { method, url, headers, body } = state;
  return (
    <div className={styles.requestSection}>
      <MethodUrlSection
        method={method}
        setMethod={(value) => dispatch({ type: "SET_METHOD", payload: value })}
        url={url}
        setUrl={(value) => dispatch({ type: "SET_URL", payload: value })}
      />
      <HttpHeaders
        headers={headers}
        setHeaders={(newHeaders: Header[]) =>
          dispatch({ type: "SET_HEADERS", payload: newHeaders })
        }
      />
      <BodySection
        label={t("body")}
        placeholder={t("json/text-editor")}
        value={body}
        onChange={(value) => dispatch({ type: "SET_BODY", payload: value })}
      />
      <button onClick={sendRequest}>{t("send-request")}</button>
    </div>
  );
};
