import { HttpMethod } from "./types";

export const HTTP_METHODS = [
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "OPTIONS",
  "HEAD",
] as const;

export const METHODS_WITHOUT_BODY = new Set<HttpMethod>(["GET", "HEAD"]);
