// src/app/api/contact/route.ts
export const runtime = "nodejs";   // 👈 important

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body ?? {};

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error("Missing EMAIL_USER/EMAIL_PASS/EMAIL_TO env vars");
      return NextResponse.json(
        { success: false, error: "Email not configured on server" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mail = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email || undefined,
      subject: `Contact Form: ${subject || "No subject"}`,
      html: `
        <h3>Contact form submission</h3>
        <p><strong>Name:</strong> ${name ?? "-"}</p>
        <p><strong>Email:</strong> ${email ?? "-"}</p>
        <p><strong>Phone:</strong> ${phone ?? "-"}</p>
        <p><strong>Message:</strong><br/>${(message ?? "-").replace(/\n/g, "<br/>")}</p>
      `,
    };

    const info = await transporter.sendMail(mail);
    console.log("Email sent:", info?.messageId ?? info);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Send mail error:", err);
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
