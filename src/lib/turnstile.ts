/**
 * Cloudflare Turnstile server-side verification.
 *
 * Validates the token produced by the client widget against Cloudflare's
 * siteverify API before a submission is trusted. Uses `fetch` +
 * `URLSearchParams` only, so it runs on the edge runtime.
 */

const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(
  token: string | undefined | null,
  remoteIp?: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error("Turnstile: TURNSTILE_SECRET_KEY is not set.");
    return false;
  }
  if (!token) {
    return false;
  }

  const form = new URLSearchParams();
  form.append("secret", secret);
  form.append("response", token);
  if (remoteIp) form.append("remoteip", remoteIp);

  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });

    if (!res.ok) {
      console.error("Turnstile siteverify HTTP error:", res.status);
      return false;
    }

    const data = (await res.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    if (!data.success) {
      console.error("Turnstile verification failed:", data["error-codes"]);
    }
    return data.success === true;
  } catch (err) {
    console.error("Turnstile siteverify request error:", err);
    return false;
  }
}
