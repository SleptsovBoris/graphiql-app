import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { AUTH_COOKIE_NAME } from "@/shared/config/authorization/constants";

export async function POST() {
  (await cookies()).delete(AUTH_COOKIE_NAME);

  return NextResponse.json({ success: true });
}
