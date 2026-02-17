import { NextRequest, NextResponse } from "next/server";

export type MiddlewareHandler = (req: NextRequest) => NextResponse | void;
