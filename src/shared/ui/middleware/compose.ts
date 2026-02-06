import { NextRequest, NextResponse } from "next/server";

import { MiddlewareHandler } from "./types";

export function composeMiddleware(handlers: MiddlewareHandler[]) {
  return (req: NextRequest) => {
    for (const handler of handlers) {
      const result = handler(req);
      if (result) return result;
    }
    return NextResponse.next();
  };
}
