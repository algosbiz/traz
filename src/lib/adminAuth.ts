import { compare } from "bcryptjs";
import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export const ADMIN_COOKIE_NAME = "dmg_admin_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

interface SessionPayload {
  email: string;
  expiresAt: number;
}

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must contain at least 32 characters.");
  }
  return secret;
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url");
}

export function createAdminSession(email: string) {
  const payload: SessionPayload = {
    email,
    expiresAt: Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS,
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${encodedPayload}.${sign(encodedPayload)}`;
}

export function verifyAdminSession(token?: string | null): SessionPayload | null {
  if (!token) return null;

  try {
    const [encodedPayload, signature] = token.split(".");
    if (!encodedPayload || !signature) return null;

    const expectedSignature = sign(encodedPayload);
    const actualBuffer = Buffer.from(signature);
    const expectedBuffer = Buffer.from(expectedSignature);

    if (
      actualBuffer.length !== expectedBuffer.length ||
      !timingSafeEqual(actualBuffer, expectedBuffer)
    ) {
      return null;
    }

    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as SessionPayload;

    if (
      payload.expiresAt <= Math.floor(Date.now() / 1000) ||
      payload.email !== process.env.ADMIN_EMAIL
    ) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function getAdminSession() {
  return verifyAdminSession(cookies().get(ADMIN_COOKIE_NAME)?.value);
}

export function getAdminSessionFromRequest(request: NextRequest) {
  return verifyAdminSession(request.cookies.get(ADMIN_COOKIE_NAME)?.value);
}

export async function verifyAdminCredentials(email: string, password: string) {
  const adminEmail = process.env.ADMIN_EMAIL;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !passwordHash) return false;
  if (!/^\$2[aby]\$\d{2}\$.{53}$/.test(passwordHash)) {
    throw new Error(
      "ADMIN_PASSWORD_HASH is invalid. Generate it again and keep the escaped dollar signs.",
    );
  }
  if (email !== adminEmail) return false;
  return compare(password, passwordHash);
}

export const adminCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: SESSION_DURATION_SECONDS,
};
