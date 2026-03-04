import { Header } from "../lib/http/types";

export const updateHeader = (
  headers: Header[],
  index: number,
  keyOrValue: "key" | "value",
  value: string,
) => {
  const newHeaders = headers.map((header, i) =>
    i === index ? { ...header, [keyOrValue]: value } : header,
  );
  return newHeaders;
};

export const removeHeader = (headers: Header[], index: number) => {
  return headers.filter((_, i) => i !== index);
};
