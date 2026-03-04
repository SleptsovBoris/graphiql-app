import { RestAction, RestState } from "./types";

export const initialState: RestState = {
  method: "GET",
  url: "",
  headers: [{ key: "", value: "" }],
  body: "",
  responseStatus: null,
  responseBody: null,
  isLoading: false,
  error: null,
};

export const restReducer = (
  state: RestState,
  action: RestAction,
): RestState => {
  switch (action.type) {
    case "SET_METHOD":
      return { ...state, method: action.payload };

    case "SET_URL":
      return { ...state, url: action.payload };

    case "SET_HEADERS":
      return { ...state, headers: action.payload };

    case "SET_BODY":
      return { ...state, body: action.payload };

    case "SET_LOADING":
      return { ...state, isLoading: action.payload, error: null };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "SET_RESPONSE":
      return {
        ...state,
        responseStatus: action.payload.status,
        responseBody: action.payload.body,
      };

    case "HYDRATE":
      return { ...state, ...action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};
