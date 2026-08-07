import { NextResponse } from "next/server";

import {
  ADMIN_COOKIE_NAME,
  adminCookieOptions,
  createAdminSession,
  verifyAdminCredentials,
} from "@/lib/adminAuth";

export async function POST(request: Request) {
  try {
    const { account, password } = (await request.json()) as {
      account?: string;
      password?: string;
    };

    if (!account || !password) {
      return NextResponse.json({ error: "Account and password are required." }, { status: 400 });
    }

    if (!(await verifyAdminCredentials(account.trim(), password))) {
      return NextResponse.json({ error: "Invalid account or password." }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(
      ADMIN_COOKIE_NAME,
      createAdminSession(account.trim()),
      adminCookieOptions,
    );
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to log in.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
