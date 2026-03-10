import { useTranslations } from "next-intl";

import { EndpointInputs } from "./EndpointInputs";
import { QueryEditors } from "./QueryEditors";
import styles from "./styles.module.scss";
import { GraphQLState } from "../model/types";

import { Header } from "@/shared/lib/http/types";
import { HttpHeaders } from "@/shared/ui/HttpHeaders";

type Props = {
  state: GraphQLState;
  setUrl: (url: string) => void;
  setQuery: (query: string) => void;
  setHeaders: (headers: Header[]) => void;
  setVariables: (variables: string) => void;
  sendRequest: () => void;
  setSdlUrl: (url: string) => void;
  sdlUrl: string;
};

export const RequestSection = ({
  state,
  setUrl,
  setQuery,
  setHeaders,
  setVariables,
  sendRequest,
  setSdlUrl,
  sdlUrl,
}: Props) => {
  const t = useTranslations();
  const { url, headers, query, variables } = state;

  return (
    <div className={styles.clientSection}>
      <EndpointInputs
        url={url}
        setUrl={setUrl}
        sdlUrl={sdlUrl}
        setSdlUrl={setSdlUrl}
      />
      <HttpHeaders headers={headers} setHeaders={setHeaders} />
      <QueryEditors
        query={query}
        setQuery={setQuery}
        variables={variables}
        setVariables={setVariables}
      />
      <button type="button" onClick={sendRequest}>
        {t("send-request")}
      </button>
    </div>
  );
};
