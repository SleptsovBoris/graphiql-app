import { httpClient } from "@/shared/utils/httpClient";

type Header = { key: string; value: string };

type RestRequest = {
  method: string;
  url: string;
  headers: Header[];
  body?: string;
  signal?: AbortSignal;
};

export const sendRestRequest = async ({
  method,
  url,
  headers,
  body,
  signal,
}: RestRequest) => {
  const mergedHeaders = Object.fromEntries(
    headers.filter((h) => h.key.trim()).map((h) => [h.key, h.value]),
  );

  const options: RequestInit = {
    method,
    headers: mergedHeaders,
    signal,
  };

  const normalizedMethod = method.toUpperCase();

  if (!["GET", "HEAD"].includes(normalizedMethod) && body) {
    options.body = body;
  }

  const response = await httpClient(url, options);

  return {
    status: `${response.status} ${response.statusText}`,
    body: response.body,
  };
};
