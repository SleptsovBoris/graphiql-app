import { HTTP_METHODS } from "./constants";

export type Header = {
  key: string;
  value: string;
};

export type HttpMethod = (typeof HTTP_METHODS)[number];

export type BaseRequestState = {
  url: string;
  headers: Header[];
  responseStatus: number | null;
  responseBody: string | null;
  isLoading: boolean;
  error: string | null;
};

export type BaseRequestAction =
  | { type: "SET_URL"; payload: string }
  | { type: "SET_HEADERS"; payload: Header[] }
  | {
      type: "SET_RESPONSE";
      payload: { status: number; body: string };
    }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "RESET" };
