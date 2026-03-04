import {
  BaseRequestAction,
  BaseRequestState,
  HttpMethod,
} from "@/shared/lib/http/types";

export type RestState = BaseRequestState & {
  method: HttpMethod;
  body: string;
};

export type RestAction =
  | BaseRequestAction
  | { type: "SET_METHOD"; payload: HttpMethod }
  | { type: "SET_BODY"; payload: string }
  | { type: "HYDRATE"; payload: Partial<RestState> };
