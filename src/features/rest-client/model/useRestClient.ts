"use client";
import { useEffect, useReducer, useRef } from "react";

import { restReducer, initialState } from "./restReducer";
import { sendRestRequest } from "../lib/restApi";

export const useRestClient = () => {
  const [state, dispatch] = useReducer(restReducer, initialState);
  const controllerRef = useRef<AbortController | null>(null);
  const requestIdRef = useRef(0);

  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
    };
  }, []);

  const sendRequest = async () => {
    controllerRef.current?.abort();

    const controller = new AbortController();
    controllerRef.current = controller;

    const currentRequestId = ++requestIdRef.current;

    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "CLEAR_ERROR" });

    try {
      const response = await sendRestRequest({
        ...state,
        signal: controller.signal,
      });

      if (currentRequestId !== requestIdRef.current) return;

      dispatch({
        type: "SET_RESPONSE",
        payload: response,
      });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
      dispatch({
        type: "SET_ERROR",
        payload: String(error),
      });
    } finally {
      if (currentRequestId === requestIdRef.current) {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    }
  };

  return {
    state,
    dispatch,
    sendRequest,
  };
};
