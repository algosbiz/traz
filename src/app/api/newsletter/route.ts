import { NextRequest, NextResponse } from "next/server";
import {
  sendNewsletterWelcome,
  sendNewsletterNotification,
} from "@/lib/sendEmail";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Welcome the subscriber and notify the admin(s) in parallel.
    await Promise.all([
      sendNewsletterWelcome(email),
      sendNewsletterNotification(email),
    ]);

    return NextResponse.json({
      success: true,
      message: "You've been subscribed successfully! Check your inbox for a welcome email.",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
