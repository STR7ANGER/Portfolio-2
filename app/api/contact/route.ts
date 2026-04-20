import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

type ContactPayload = {
  name?: string
  phone?: string
  email?: string
  message?: string
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function getRequiredEnv(name: string) {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }

  return value
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const name = body.name?.trim() ?? ""
    const phone = body.phone?.trim() ?? ""
    const email = body.email?.trim() ?? ""
    const message = body.message?.trim() ?? ""
    const safeName = escapeHtml(name)
    const safePhone = escapeHtml(phone)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Please fill out name, phone number, email, and message." },
        { status: 400 }
      )
    }

    const ownerEmail = getRequiredEnv("GMAIL_USER")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: ownerEmail,
        pass: getRequiredEnv("GMAIL_APP_PASSWORD"),
      },
    })

    await transporter.sendMail({
      from: ownerEmail,
      replyTo: email,
      to: ownerEmail,
      subject: `Portfolio contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    })

    await transporter.sendMail({
      from: ownerEmail,
      to: email,
      subject: "Got your message",
      text: [
        `Hi ${name},`,
        "",
        "Thanks for reaching out through my portfolio.",
        "I received your message and will get back to you soon.",
        "",
        "Here is a copy of what you sent:",
        message,
        "",
        `Phone: ${phone}`,
        `Email: ${email}`,
        "",
        "Aditya Maurya",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <p>Hi ${safeName},</p>
          <p>Thanks for reaching out through my portfolio. I received your message and will get back to you soon.</p>
          <div style="margin-top: 20px; padding: 16px; border-radius: 12px; background: #f4f4f5;">
            <p style="margin: 0 0 8px;"><strong>Your message</strong></p>
            <p style="margin: 0;">${safeMessage}</p>
          </div>
          <p style="margin-top: 20px;">Phone: ${safePhone}<br />Email: ${safeEmail}</p>
          <p style="margin-top: 20px;">Aditya Maurya</p>
        </div>
      `,
    })

    return NextResponse.json({
      message: "Message sent. A confirmation email is on its way too.",
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error:
          error instanceof Error && error.message.startsWith("Missing environment variable")
            ? "Email service is not configured yet."
            : "Could not send your message right now.",
      },
      { status: 500 }
    )
  }
}
