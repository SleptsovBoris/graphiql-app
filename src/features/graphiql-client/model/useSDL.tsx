"use client";

import { useEffect, useState } from "react";

import { fetchSDL } from "../lib/fetchSdl";

type UseSDLResult = {
  documentation: string | null;
  loading: boolean;
  error: string | null;
};

const sdlCache = new Map<string, string>();

export const useSDL = (sdlUrl: string | null): UseSDLResult => {
  const [result, setResult] = useState<UseSDLResult>({
    documentation: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (!sdlUrl) {
      setResult({ documentation: null, loading: false, error: null });
      return;
    }

    if (sdlCache.has(sdlUrl)) {
      setResult({
        documentation: sdlCache.get(sdlUrl) || null,
        loading: false,
        error: null,
      });
      return;
    }

    const controller = new AbortController();

    setResult({ documentation: null, loading: true, error: null });

    fetchSDL(sdlUrl, controller.signal)
      .then((res) => {
        setResult({ documentation: res.body, loading: false, error: null });
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setResult({
          documentation: null,
          loading: false,
          error: err instanceof Error ? err.message : "Failed to load schema",
        });
      });

    return () => controller.abort();
  }, [sdlUrl]);

  return result;
};
