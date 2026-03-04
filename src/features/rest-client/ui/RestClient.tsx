"use client";
import { useTranslations } from "next-intl";

import styles from "./styles.module.scss";

import { useRestClient } from "@/features/rest-client/model/useRestClient";
import { RequestSection } from "@/features/rest-client/ui/RequestSection";
import { ResponseSection } from "@/shared/ui/ResponseSection";

const RestClient = () => {
  const t = useTranslations();
  const { state, setMethod, setUrl, setHeaders, setBody, sendRequest } =
    useRestClient();

  return (
    <div className={styles.restClientContainer}>
      <h2>REST {t("client")}</h2>

      <RequestSection
        state={state}
        setMethod={setMethod}
        setUrl={setUrl}
        setHeaders={setHeaders}
        setBody={setBody}
        sendRequest={sendRequest}
      />

      <ResponseSection
        responseStatus={state.responseStatus}
        responseBody={state.responseBody}
      />
    </div>
  );
};

export default RestClient;
