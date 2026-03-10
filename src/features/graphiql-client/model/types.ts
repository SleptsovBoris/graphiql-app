import { BaseRequestAction, BaseRequestState } from "@/shared/lib/http/types";

export type GraphQLState = BaseRequestState & {
  query: string;
  variables: string;
  documentation: string | null;
};

export type GraphQLAction =
  | BaseRequestAction
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_VARIABLES"; payload: string }
  | { type: "SET_DOCUMENTATION"; payload: string | null }
  | { type: "HYDRATE"; payload: Partial<GraphQLState> };
