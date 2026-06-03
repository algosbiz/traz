import { NextRequest, NextResponse } from "next/server";
import { sendContactNotification, sendContactAutoReply } from "@/lib/sendEmail";
import { verifyTurnstile } from "@/lib/turnstile";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, turnstileToken } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Anti-bot: verify the Cloudflare Turnstile token before sending anything.
    const ip =
      request.headers.get("CF-Connecting-IP") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      undefined;
    const isHuman = await verifyTurnstile(turnstileToken, ip);
    if (!isHuman) {
      return NextResponse.json(
        {
          success: false,
          message: "Bot verification failed. Please refresh the page and try again.",
        },
        { status: 403 }
      );
    }

    const formData = { name, email, phone, message };

    // Send notification to admin and auto-reply to user in parallel
    await Promise.all([
      sendContactNotification(formData),
      sendContactAutoReply(formData),
    ]);

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
