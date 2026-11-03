import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  )

export default async (req: Request) => {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405)

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return json({ error: "Invalid request" }, 400)
  }

  const name = String(body.name ?? "").trim()
  const email = String(body.email ?? "").trim()
  const message = String(body.message ?? "").trim()
  const honeypot = String(body.company ?? "")

  // Bots fill hidden fields; pretend success and drop it
  if (honeypot) return json({ ok: true })

  if (name.length < 2 || name.length > 100) return json({ error: "Invalid name" }, 400)
  if (message.length < 10 || message.length > 1000) return json({ error: "Invalid message" }, 400)
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: "Invalid email" }, 400)

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM!,
    to: [process.env.CONTACT_TO_EMAIL!],
    replyTo: email || undefined,
    subject: `Portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email || "not provided"}\n\n${message}`,
    html: `
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${email ? escapeHtml(email) : "not provided"}</p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    `,
  })

  if (error) {
    console.error("Resend error:", error)
    return json({ error: "Failed to send" }, 502)
  }

  return json({ ok: true, id: data?.id })
}

export const config = { path: "/api/contact" }