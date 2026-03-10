import { GraphQLAction, GraphQLState } from "./types";

export const initialState: GraphQLState = {
  url: "",
  headers: [{ key: "", value: "" }],
  query: "",
  variables: "",
  responseStatus: null,
  responseBody: null,
  documentation: null,
  isLoading: false,
  error: null,
};

export const graphqlReducer = (
  state: GraphQLState,
  action: GraphQLAction,
): GraphQLState => {
  switch (action.type) {
    case "SET_URL":
      return { ...state, url: action.payload };

    case "SET_HEADERS":
      return { ...state, headers: action.payload };

    case "SET_QUERY":
      return { ...state, query: action.payload };

    case "SET_VARIABLES":
      return { ...state, variables: action.payload };

    case "SET_RESPONSE":
      return {
        ...state,
        responseStatus: action.payload.status,
        responseBody: action.payload.body,
      };

    case "SET_DOCUMENTATION":
      return { ...state, documentation: action.payload };

    case "SET_LOADING":
      return { ...state, isLoading: action.payload, error: null };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "HYDRATE":
      return { ...state, ...action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};
