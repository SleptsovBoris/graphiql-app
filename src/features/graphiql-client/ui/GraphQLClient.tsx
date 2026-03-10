"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { DocumentationSection } from "./DocumentationSection";
import styles from "./styles.module.scss";
import { useSDL } from "../model/useSDL";

import { useGraphQLClient } from "@/features/graphiql-client/model/useGraphQLClient";
import { RequestSection } from "@/features/graphiql-client/ui/RequestSection";
import { ResponseSection } from "@/shared/ui/ResponseSection";

const GraphQLClient = () => {
  const t = useTranslations();
  const [sdlUrl, setSdlUrl] = useState("initial-url");
  const { state, setUrl, setQuery, setHeaders, setVariables, sendRequest } =
    useGraphQLClient();
  const { documentation } = useSDL(sdlUrl);

  return (
    <div className={styles.graphiqlClientContainer}>
      <h2>GraphiQL {t("client")}</h2>

      <RequestSection
        state={state}
        setUrl={setUrl}
        setQuery={setQuery}
        setHeaders={setHeaders}
        setVariables={setVariables}
        setSdlUrl={setSdlUrl}
        sdlUrl={sdlUrl}
        sendRequest={sendRequest}
      />

      <ResponseSection
        responseStatus={state.responseStatus}
        responseBody={state.responseBody}
      />

      {documentation && <DocumentationSection documentation={documentation} />}
    </div>
  );
};

export default GraphQLClient;
