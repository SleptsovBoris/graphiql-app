import { GraphQLAction, GraphQLState } from "./types";

import { Header } from "@/shared/lib/http/types";

export const setUrl = (url: string): GraphQLAction => ({
  type: "SET_URL",
  payload: url,
});

export const setHeaders = (headers: Header[]): GraphQLAction => ({
  type: "SET_HEADERS",
  payload: headers,
});

export const setQuery = (query: string): GraphQLAction => ({
  type: "SET_QUERY",
  payload: query,
});

export const setVariables = (variables: string): GraphQLAction => ({
  type: "SET_VARIABLES",
  payload: variables,
});

export const setLoading = (value: boolean): GraphQLAction => ({
  type: "SET_LOADING",
  payload: value,
});

export const setError = (error: string): GraphQLAction => ({
  type: "SET_ERROR",
  payload: error,
});

export const setResponse = (response: {
  status: number;
  body: string;
}): GraphQLAction => ({
  type: "SET_RESPONSE",
  payload: response,
});

export const setDocumentation = (doc: string): GraphQLAction => ({
  type: "SET_DOCUMENTATION",
  payload: doc,
});

export const hydrate = (
  partialState: Partial<GraphQLState>,
): GraphQLAction => ({
  type: "HYDRATE",
  payload: partialState,
});

export const reset = (): GraphQLAction => ({
  type: "RESET",
});
