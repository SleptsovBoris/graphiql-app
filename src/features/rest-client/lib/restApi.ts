import { METHODS_WITHOUT_BODY } from "@/shared/lib/http/constants";
import { Header, HttpMethod } from "@/shared/lib/http/types";
import { httpClient } from "@/shared/utils/httpClient";

type RestRequest = {
  method: HttpMethod;
  url: string;
  headers: Header[];
  body?: string;
  signal?: AbortSignal;
};

type RestResponse = {
  status: number;
  body: string;
};

export const sendRestRequest = async ({
  method,
  url,
  headers,
  body,
  signal,
}: RestRequest): Promise<RestResponse> => {
  if (!url.trim()) {
    throw new Error("URL is required");
  }

  const mergedHeaders = Object.fromEntries(
    headers.filter((h) => h.key.trim()).map((h) => [h.key, h.value]),
  );

  if (body && !mergedHeaders["Content-Type"]) {
    mergedHeaders["Content-Type"] = "application/json";
  }

  const options: RequestInit = {
    method,
    headers: mergedHeaders,
    signal,
  };

  if (!METHODS_WITHOUT_BODY.has(method) && body !== undefined) {
    options.body = body;
  }

  const response = await httpClient(url, options);

  return {
    status: response.status,
    body: response.body,
  };
};
