"use client";
import { useCallback, useEffect, useReducer, useRef } from "react";

import * as actions from "./actions";
import { restReducer, initialState } from "./restReducer";
import { sendRestRequest } from "../lib/restApi";

import { Header, HttpMethod } from "@/shared/lib/http/types";

export const useRestClient = () => {
  const [state, dispatch] = useReducer(restReducer, initialState);
  const controllerRef = useRef<AbortController | null>(null);

  const methodRef = useRef<HttpMethod>(state.method);
  const urlRef = useRef(state.url);
  const headersRef = useRef(state.headers);
  const bodyRef = useRef(state.body);

  useEffect(() => () => controllerRef.current?.abort(), []);

  const setMethod = useCallback((method: HttpMethod) => {
    methodRef.current = method;
    dispatch(actions.setMethod(method));
  }, []);

  const setUrl = useCallback((url: string) => {
    urlRef.current = url;
    dispatch(actions.setUrl(url));
  }, []);

  const setHeaders = useCallback((headers: Header[]) => {
    headersRef.current = headers;
    dispatch(actions.setHeaders(headers));
  }, []);

  const setBody = useCallback((body: string) => {
    bodyRef.current = body;
    dispatch(actions.setBody(body));
  }, []);

  const sendRequest = useCallback(async () => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    dispatch(actions.setLoading(true));

    try {
      const response = await sendRestRequest({
        method: methodRef.current,
        url: urlRef.current,
        headers: headersRef.current,
        body: bodyRef.current,
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
    setMethod,
    setUrl,
    setHeaders,
    setBody,
    sendRequest,
  };
};
