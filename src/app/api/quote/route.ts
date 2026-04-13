import { NextRequest, NextResponse } from "next/server";
import { sendQuoteNotification, sendQuoteAutoReply } from "@/lib/sendEmail";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, category, location, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !category || !location || !message) {
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

    const formData = { name, email, phone, category, location, message };

    // Send notification to admin and auto-reply to user in parallel
    await Promise.all([
      sendQuoteNotification(formData),
      sendQuoteAutoReply(formData),
    ]);

    return NextResponse.json({
      success: true,
      message: "Your quote request has been submitted successfully! We'll prepare your estimate shortly.",
    });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
