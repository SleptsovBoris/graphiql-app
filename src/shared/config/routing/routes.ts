export const ROUTE_SEGMENTS = {
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
  REST_CLIENT: "rest-client",
  GRAPHIQL_CLIENT: "graphiql-client",
  HISTORY: "history",
} as const;

export const PUBLIC_ROUTES = [
  ROUTE_SEGMENTS.SIGN_IN,
  ROUTE_SEGMENTS.SIGN_UP,
] as const;

export const PROTECTED_ROUTES = [
  ROUTE_SEGMENTS.REST_CLIENT,
  ROUTE_SEGMENTS.GRAPHIQL_CLIENT,
  ROUTE_SEGMENTS.HISTORY,
] as const;

export const ROUTES = {
  ROOT: "/",
  LOGOUT_API: "/api/auth/logout",
  LOGIN_API: "/api/auth/login",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  REST_CLIENT: "/rest-client",
  GRAPHIQL_CLIENT: "/graphiql-client",
};
