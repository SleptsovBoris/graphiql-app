import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { adminAuth } from "@/shared/config/authorization/firebase-admin";

export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return NextResponse.json({}, { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");

  const decoded = await adminAuth.verifyIdToken(token);

  (await cookies()).set("session", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return NextResponse.json({ uid: decoded.uid });
}
