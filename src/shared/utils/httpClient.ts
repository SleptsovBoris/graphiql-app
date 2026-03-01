export const httpClient = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, options);

  const contentType = response.headers.get("Content-Type") || "";
  const text = await response.text();

  let body = text;

  if (contentType.includes("application/json")) {
    try {
      body = JSON.stringify(JSON.parse(text), null, 2);
    } catch {
      body = text;
    }
  }

  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    body,
    headers: response.headers,
  };
};
