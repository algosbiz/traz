/**
 * SendGrid Email Utility
 * Uses SendGrid v3 REST API directly via fetch (edge-compatible, no npm package needed)
 */

const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";

interface EmailParams {
  /** Single address, an array, or a comma-separated list (e.g. ADMIN_EMAIL). */
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

async function sendEmail({ to, subject, html, replyTo }: EmailParams): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  const senderEmail = process.env.SENDER_EMAIL;
  const siteName = process.env.SITE_NAME || "DMG Masonry";

  if (!apiKey || !senderEmail) {
    throw new Error("Missing SendGrid configuration. Check SENDGRID_API_KEY and SENDER_EMAIL in .env.local");
  }

  // Normalise `to` into a recipient list so a comma-separated ADMIN_EMAIL
  // reaches everyone (e.g. "will@dmgmasonry.ca,contact@algoseabiz.com").
  const recipients = (Array.isArray(to) ? to : to.split(","))
    .map((email) => email.trim())
    .filter(Boolean)
    .map((email) => ({ email }));

  if (recipients.length === 0) {
    throw new Error("sendEmail: no valid recipient address provided in `to`.");
  }

  const body: Record<string, unknown> = {
    personalizations: [{ to: recipients }],
    from: { email: senderEmail, name: siteName },
    subject,
    content: [{ type: "text/html", value: html }],
  };

  if (replyTo) {
    body.reply_to = { email: replyTo };
  }

  const response = await fetch(SENDGRID_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("SendGrid API error:", response.status, errorText);
    throw new Error(`Failed to send email: ${response.status}`);
  }
}

// ─── Email Template Wrapper ──────────────────────────────────────────────────

function wrapInTemplate(content: string): string {
  const siteName = process.env.SITE_NAME || "DMG Masonry";
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:1px;">${siteName}</h1>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding:40px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#f8f9fa;padding:24px 40px;text-align:center;border-top:1px solid #eee;">
              <p style="margin:0;color:#999;font-size:12px;line-height:1.6;">
                &copy; ${new Date().getFullYear()} ${siteName}. All rights reserved.<br>
                This email was sent automatically. Please do not reply directly to this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Contact Form Emails ─────────────────────────────────────────────────────

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactNotification(data: ContactFormData): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) throw new Error("Missing ADMIN_EMAIL in .env.local");

  const html = wrapInTemplate(`
    <h2 style="margin:0 0 8px;color:#1a1a2e;font-size:22px;">New Contact Message</h2>
    <p style="margin:0 0 24px;color:#666;font-size:14px;">You have received a new message from your website contact form.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td style="padding:12px 16px;background-color:#f8f9fa;border-left:4px solid #0f3460;font-size:13px;color:#888;font-weight:600;width:120px;">Name</td>
        <td style="padding:12px 16px;background-color:#f8f9fa;font-size:14px;color:#333;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;border-left:4px solid #0f3460;font-size:13px;color:#888;font-weight:600;">Email</td>
        <td style="padding:12px 16px;font-size:14px;color:#333;"><a href="mailto:${data.email}" style="color:#0f3460;">${data.email}</a></td>
      </tr>
      <tr>
        <td style="padding:12px 16px;background-color:#f8f9fa;border-left:4px solid #0f3460;font-size:13px;color:#888;font-weight:600;">Phone</td>
        <td style="padding:12px 16px;background-color:#f8f9fa;font-size:14px;color:#333;"><a href="tel:${data.phone}" style="color:#0f3460;">${data.phone}</a></td>
      </tr>
    </table>

    <div style="padding:16px;background-color:#f8f9fa;border-radius:8px;border-left:4px solid #0f3460;">
      <p style="margin:0 0 4px;font-size:13px;color:#888;font-weight:600;">Message</p>
      <p style="margin:0;font-size:14px;color:#333;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
    </div>
  `);

  await sendEmail({
    to: adminEmail,
    subject: `[DMG Masonry] New Contact Message from ${data.name}`,
    html,
    replyTo: data.email,
  });
}

export async function sendContactAutoReply(data: ContactFormData): Promise<void> {
  const siteName = process.env.SITE_NAME || "DMG Masonry";

  const html = wrapInTemplate(`
    <h2 style="margin:0 0 8px;color:#1a1a2e;font-size:22px;">Thank You, ${data.name}! 👋</h2>
    <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.7;">
      We have received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you within <strong>1–2 business days</strong>.
    </p>

    <div style="padding:20px;background-color:#f0f7ff;border-radius:8px;margin-bottom:24px;">
      <p style="margin:0 0 4px;font-size:13px;color:#0f3460;font-weight:600;">📋 Here's a summary of your message:</p>
      <p style="margin:8px 0 0;font-size:14px;color:#333;line-height:1.6;white-space:pre-wrap;">${data.message}</p>
    </div>

    <p style="margin:0 0 8px;color:#555;font-size:14px;">
      If you need immediate assistance, feel free to call us at <a href="tel:+14036198727" style="color:#0f3460;font-weight:600;">1-403-619-8727</a>.
    </p>

    <p style="margin:24px 0 0;color:#333;font-size:14px;">
      Warm regards,<br>
      <strong>The ${siteName} Team</strong>
    </p>
  `);

  await sendEmail({
    to: data.email,
    subject: `Thank you for contacting ${siteName}!`,
    html,
  });
}

// ─── Quote Request Emails ────────────────────────────────────────────────────

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  location: string;
  message: string;
}

export async function sendQuoteNotification(data: QuoteFormData): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) throw new Error("Missing ADMIN_EMAIL in .env.local");

  const html = wrapInTemplate(`
    <h2 style="margin:0 0 8px;color:#1a1a2e;font-size:22px;">New Quote Request 📋</h2>
    <p style="margin:0 0 24px;color:#666;font-size:14px;">A new project quote has been requested from your website.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td style="padding:12px 16px;background-color:#f8f9fa;border-left:4px solid #e94560;font-size:13px;color:#888;font-weight:600;width:140px;">Name</td>
        <td style="padding:12px 16px;background-color:#f8f9fa;font-size:14px;color:#333;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;border-left:4px solid #e94560;font-size:13px;color:#888;font-weight:600;">Email</td>
        <td style="padding:12px 16px;font-size:14px;color:#333;"><a href="mailto:${data.email}" style="color:#0f3460;">${data.email}</a></td>
      </tr>
      <tr>
        <td style="padding:12px 16px;background-color:#f8f9fa;border-left:4px solid #e94560;font-size:13px;color:#888;font-weight:600;">Phone</td>
        <td style="padding:12px 16px;background-color:#f8f9fa;font-size:14px;color:#333;"><a href="tel:${data.phone}" style="color:#0f3460;">${data.phone}</a></td>
      </tr>
      <tr>
        <td style="padding:12px 16px;border-left:4px solid #e94560;font-size:13px;color:#888;font-weight:600;">Project Category</td>
        <td style="padding:12px 16px;font-size:14px;color:#333;font-weight:600;">${data.category}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;background-color:#f8f9fa;border-left:4px solid #e94560;font-size:13px;color:#888;font-weight:600;">Location</td>
        <td style="padding:12px 16px;background-color:#f8f9fa;font-size:14px;color:#333;">${data.location}</td>
      </tr>
    </table>

    <div style="padding:16px;background-color:#f8f9fa;border-radius:8px;border-left:4px solid #e94560;">
      <p style="margin:0 0 4px;font-size:13px;color:#888;font-weight:600;">Project Details</p>
      <p style="margin:0;font-size:14px;color:#333;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
    </div>
  `);

  await sendEmail({
    to: adminEmail,
    subject: `[DMG Masonry] New Quote Request from ${data.name} — ${data.category}`,
    html,
    replyTo: data.email,
  });
}

export async function sendQuoteAutoReply(data: QuoteFormData): Promise<void> {
  const siteName = process.env.SITE_NAME || "DMG Masonry";

  const html = wrapInTemplate(`
    <h2 style="margin:0 0 8px;color:#1a1a2e;font-size:22px;">Quote Request Received! 🏗️</h2>
    <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.7;">
      Dear <strong>${data.name}</strong>, thank you for your interest in our services. We have received your quote request and our team will prepare a detailed estimate for you.
    </p>

    <div style="padding:20px;background-color:#fff8f0;border-radius:8px;margin-bottom:24px;border:1px solid #ffe0b2;">
      <p style="margin:0 0 12px;font-size:14px;color:#e65100;font-weight:600;">📋 Your Request Summary:</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:6px 0;font-size:13px;color:#888;width:120px;">Category:</td>
          <td style="padding:6px 0;font-size:14px;color:#333;font-weight:600;">${data.category}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;font-size:13px;color:#888;">Location:</td>
          <td style="padding:6px 0;font-size:14px;color:#333;">${data.location}</td>
        </tr>
      </table>
      <p style="margin:12px 0 0;font-size:14px;color:#333;line-height:1.6;white-space:pre-wrap;">${data.message}</p>
    </div>

    <p style="margin:0 0 8px;color:#555;font-size:14px;line-height:1.7;">
      We typically respond to quote requests within <strong>2–3 business days</strong>. If your project is urgent, please call us directly at <a href="tel:+14036198727" style="color:#0f3460;font-weight:600;">1-403-619-8727</a>.
    </p>

    <p style="margin:24px 0 0;color:#333;font-size:14px;">
      Best regards,<br>
      <strong>The ${siteName} Team</strong>
    </p>
  `);

  await sendEmail({
    to: data.email,
    subject: `Your Quote Request Has Been Received — ${siteName}`,
    html,
  });
}

// ─── Newsletter Emails ───────────────────────────────────────────────────────

export async function sendNewsletterNotification(email: string): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) throw new Error("Missing ADMIN_EMAIL in .env.local");

  const html = wrapInTemplate(`
    <h2 style="margin:0 0 8px;color:#1a1a2e;font-size:22px;">New Newsletter Subscriber 📩</h2>
    <p style="margin:0 0 24px;color:#666;font-size:14px;">A new visitor just subscribed to your newsletter.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding:12px 16px;background-color:#f8f9fa;border-left:4px solid #0f3460;font-size:13px;color:#888;font-weight:600;width:120px;">Email</td>
        <td style="padding:12px 16px;background-color:#f8f9fa;font-size:14px;color:#333;"><a href="mailto:${email}" style="color:#0f3460;">${email}</a></td>
      </tr>
    </table>
  `);

  await sendEmail({
    to: adminEmail,
    subject: `[DMG Masonry] New Newsletter Subscriber`,
    html,
    replyTo: email,
  });
}

export async function sendNewsletterWelcome(email: string): Promise<void> {
  const siteName = process.env.SITE_NAME || "DMG Masonry";
  const siteUrl = process.env.SITE_URL || "#";

  const html = wrapInTemplate(`
    <h2 style="margin:0 0 8px;color:#1a1a2e;font-size:22px;">Welcome to Our Newsletter! 🎉</h2>
    <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.7;">
      Thank you for subscribing to the <strong>${siteName}</strong> newsletter. You're now part of our community!
    </p>

    <div style="padding:20px;background:linear-gradient(135deg,#f0f7ff 0%,#e8f0fe 100%);border-radius:8px;margin-bottom:24px;">
      <p style="margin:0 0 12px;font-size:15px;color:#1a1a2e;font-weight:600;">Here's what you can expect:</p>
      <table role="presentation" cellpadding="0" cellspacing="0">
        <tr><td style="padding:6px 0;font-size:14px;color:#333;">✅ Latest project showcases and case studies</td></tr>
        <tr><td style="padding:6px 0;font-size:14px;color:#333;">✅ Industry insights and design trends</td></tr>
        <tr><td style="padding:6px 0;font-size:14px;color:#333;">✅ Exclusive offers and early access to new services</td></tr>
        <tr><td style="padding:6px 0;font-size:14px;color:#333;">✅ Tips and inspiration for your next project</td></tr>
      </table>
    </div>

    <div style="text-align:center;margin:32px 0;">
      <a href="${siteUrl}" style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#1a1a2e 0%,#0f3460 100%);color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:0.5px;">
        Visit Our Website →
      </a>
    </div>

    <p style="margin:0;color:#333;font-size:14px;">
      Warm regards,<br>
      <strong>The ${siteName} Team</strong>
    </p>
  `);

  await sendEmail({
    to: email,
    subject: `Welcome to ${siteName} Newsletter! 🏗️`,
    html,
  });
}
