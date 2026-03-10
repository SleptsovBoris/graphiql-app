import { Header } from "@/shared/lib/http/types";
import { httpClient } from "@/shared/utils/httpClient";

type GraphQLRequest = {
  url: string;
  headers: Header[];
  query: string;
  variables: string;
  signal?: AbortSignal;
};

export const sendGraphQLRequest = async ({
  url,
  headers,
  query,
  variables,
  signal,
}: GraphQLRequest) => {
  if (!url) {
    throw new Error("URL is required");
  }

  let parsedVariables: unknown = null;

  if (variables) {
    try {
      parsedVariables = JSON.parse(variables);
    } catch {
      throw new Error("Variables must be valid JSON");
    }
  }

  const mergedHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...Object.fromEntries(
      headers.filter((h) => h.key.trim()).map((h) => [h.key, h.value]),
    ),
  };

  const options: RequestInit = {
    method: "POST",
    headers: mergedHeaders,
    body: JSON.stringify({
      query,
      variables: parsedVariables,
    }),
    signal,
  };

  const response = await httpClient(url, options);

  return {
    status: response.status,
    body: response.body,
  };
};
