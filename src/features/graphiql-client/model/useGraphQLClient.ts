"use client";
import { useCallback, useEffect, useReducer, useRef } from "react";

import * as actions from "./actions";
import { graphqlReducer, initialState } from "./graphQLReducer";
import { sendGraphQLRequest } from "../lib/graphqlApi";

import { Header } from "@/shared/lib/http/types";

export const useGraphQLClient = () => {
  const [state, dispatch] = useReducer(graphqlReducer, initialState);
  const controllerRef = useRef<AbortController | null>(null);

  const urlRef = useRef(state.url);
  const queryRef = useRef(state.query);
  const headersRef = useRef(state.headers);
  const variablesRef = useRef(state.variables);

  useEffect(() => () => controllerRef.current?.abort(), []);

  const setUrl = useCallback((url: string) => {
    urlRef.current = url;
    dispatch(actions.setUrl(url));
  }, []);

  const setQuery = useCallback((query: string) => {
    queryRef.current = query;
    dispatch(actions.setQuery(query));
  }, []);

  const setHeaders = useCallback((headers: Header[]) => {
    headersRef.current = headers;
    dispatch(actions.setHeaders(headers));
  }, []);

  const setVariables = useCallback((variables: string) => {
    variablesRef.current = variables;
    dispatch(actions.setVariables(variables));
  }, []);

  const sendRequest = useCallback(async () => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    dispatch(actions.setLoading(true));

    try {
      const response = await sendGraphQLRequest({
        url: urlRef.current,
        headers: headersRef.current,
        query: queryRef.current,
        variables: variablesRef.current,
        signal: controller.signal,
      });

      dispatch(actions.setResponse(response));
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      const message = error instanceof Error ? error.message : String(error);
      dispatch(actions.setError(message));
    } finally {
      dispatch(actions.setLoading(false));
    }
  }, []);

  return {
    state,
    setUrl,
    setQuery,
    setHeaders,
    setVariables,
    sendRequest,
  };
};
