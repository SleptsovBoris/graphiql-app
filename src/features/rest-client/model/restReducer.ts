import { RestState, Header } from "./types";

export type RestAction = Action;

type Action =
  | { type: "SET_METHOD"; payload: string }
  | { type: "SET_URL"; payload: string }
  | { type: "SET_HEADERS"; payload: Header[] }
  | { type: "SET_BODY"; payload: string }
  | { type: "SET_RESPONSE"; payload: { status: string; body: string } }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string }
  | { type: "CLEAR_ERROR" }
  | { type: "HYDRATE"; payload: Partial<RestState> }
  | { type: "RESET" };

export const initialState: RestState = {
  method: "GET",
  url: "",
  headers: [{ key: "", value: "" }],
  body: "",
  responseStatus: "",
  responseBody: "",
  isLoading: false,
  error: null,
};

export const restReducer = (state: RestState, action: Action): RestState => {
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
      return { ...state, isLoading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "CLEAR_ERROR":
      return { ...state, error: null };

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
