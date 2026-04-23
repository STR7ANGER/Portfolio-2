import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/validation/contact"

export const runtime = "nodejs"

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function buildSenderConfirmationHtml(params: {
  safeName: string
  signatureName: string
  profileLinks: {
    linkedin: string
    github: string
    leetcode: string
    x: string
  }
}) {
  const { safeName, signatureName, profileLinks } = params

  const linkStyle = "color:#ffffff;text-decoration:underline"

  return `
    <div style="margin:0;padding:0;background:#ffffff;">
      <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
        I received your message — I’ll get back to you soon.
      </div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;margin:0;padding:0;">
        <tr>
          <td align="center" style="padding:28px 16px;">
            <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="width:100%;max-width:640px;border:1px solid #e4e4e7;border-radius:28px;overflow:hidden;background:#000000;">
              <tr>
                <td style="padding:26px 26px 0;">
                  <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#f4f4f5;">
                    <div style="letter-spacing:.28em;text-transform:uppercase;font-size:11px;color:#a1a1aa;">
                      Message received
                    </div>
                    <h1 style="margin:10px 0 0;font-size:22px;line-height:1.25;font-weight:650;color:#ffffff;">
                      Hi ${safeName},
                    </h1>
                    <p style="margin:12px 0 0;font-size:14px;line-height:1.75;color:#d4d4d8;">
                      I received your mail message. Thanks for reaching out — your note is safely in my inbox.
                    </p>
                    <p style="margin:12px 0 0;font-size:14px;line-height:1.75;color:#d4d4d8;">
                      In the meantime, here’s something awesome: I’m currently building and shipping more polished work — you can browse it below while I get back to you.
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:18px 26px 0;">
                  <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;">
                    <div style="font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:#a1a1aa;margin:0 0 10px;">
                      Check out my profile & work
                    </div>
                    <div style="font-size:14px;line-height:1.8;color:#e4e4e7;">
                      <a href="${profileLinks.linkedin}" target="_blank" rel="noreferrer" style="${linkStyle}">LinkedIn</a>
                      <span style="color:#52525b;"> · </span>
                      <a href="${profileLinks.github}" target="_blank" rel="noreferrer" style="${linkStyle}">GitHub</a>
                      <span style="color:#52525b;"> · </span>
                      <a href="${profileLinks.leetcode}" target="_blank" rel="noreferrer" style="${linkStyle}">LeetCode</a>
                      <span style="color:#52525b;"> · </span>
                      <a href="${profileLinks.x}" target="_blank" rel="noreferrer" style="${linkStyle}">X</a>
                    </div>
                    <p style="margin:14px 0 0;font-size:14px;line-height:1.75;color:#d4d4d8;">
                      We’ll connect soon :)
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:22px 26px 26px;">
                  <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;border-top:1px solid #1f1f1f;padding-top:18px;">
                    <p style="margin:0;font-size:14px;line-height:1.75;color:#e4e4e7;">
                      Thank you,<br />
                      ${escapeHtml(signatureName)}
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `
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
    const body = (await request.json()) as unknown
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid input." },
        { status: 400 }
      )
    }

    const { name, phone, email, message } = parsed.data
    const safeName = escapeHtml(name)
    const safePhone = escapeHtml(phone)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

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
      html: buildSenderConfirmationHtml({
        safeName,
        signatureName: "Aditya Maurya",
        profileLinks: {
          linkedin: "https://www.linkedin.com/in/adimaurya/",
          github: "https://github.com/STR7ANGER",
          leetcode: "https://leetcode.com/Xiafloxy/",
          x: "https://x.com/AdI0_0I",
        },
      }),
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
