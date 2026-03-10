import { httpClient } from "@/shared/utils/httpClient";

export const fetchSDL = async (sdlUrl: string, signal?: AbortSignal) => {
  const response = await httpClient(sdlUrl, { method: "GET", signal });

  return {
    status: `${response.status} ${response.statusText}`,
    body: response.body,
  };
};
