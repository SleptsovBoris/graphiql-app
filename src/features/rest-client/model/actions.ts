import { RestAction, RestState } from "./types";

import { Header, HttpMethod } from "@/shared/lib/http/types";

export const setMethod = (value: HttpMethod): RestAction => ({
  type: "SET_METHOD",
  payload: value,
});

export const setUrl = (value: string): RestAction => ({
  type: "SET_URL",
  payload: value,
});

export const setHeaders = (value: Header[]): RestAction => ({
  type: "SET_HEADERS",
  payload: value,
});

export const setBody = (value: string): RestAction => ({
  type: "SET_BODY",
  payload: value,
});

export const setResponse = (value: {
  status: number;
  body: string;
}): RestAction => ({
  type: "SET_RESPONSE",
  payload: value,
});

export const setLoading = (value: boolean): RestAction => ({
  type: "SET_LOADING",
  payload: value,
});

export const setError = (value: string): RestAction => ({
  type: "SET_ERROR",
  payload: value,
});

export const hydrate = (value: Partial<RestState>): RestAction => ({
  type: "HYDRATE",
  payload: value,
});

export const reset = (): RestAction => ({
  type: "RESET",
});
