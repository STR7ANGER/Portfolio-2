"use client"

import { ExternalLink, Mail, Phone, Send, User } from "lucide-react"
import { type ChangeEvent, type FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import SplitText from "@/components/SplitText"

type FormState = {
  name: string
  phone: string
  email: string
  message: string
}

const initialFormState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error"
    message: string
  }>({
    type: "idle",
    message: "",
  })

  const updateField =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({
        ...current,
        [field]: event.target.value,
      }))
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: "idle", message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = (await response.json()) as { error?: string; message?: string }

      if (!response.ok) {
        throw new Error(data.error ?? "Could not send message.")
      }

      setForm(initialFormState)
      setStatus({
        type: "success",
        message: data.message ?? "Message sent successfully.",
      })
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <SplitText
            text="Let's make something ridiculously good"
            tag="h2"
            splitType="words"
            delay={40}
            duration={1}
            className="block text-3xl font-semibold tracking-tight text-white md:text-4xl"
            textAlign="left"
          />
          <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
            Send a message straight from here. I&apos;ll receive it on Gmail, and the sender gets a confirmation email too.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30">
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                    <Mail className="size-4 text-cyan-300" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Email
                    </div>
                    <a
                      href="mailto:adityamaurya.2807@gmail.com"
                      className="mt-1 inline-flex items-center gap-2 text-sm text-zinc-200 transition hover:text-white"
                    >
                      adityamaurya.2807@gmail.com
                      <ExternalLink className="size-3.5 text-zinc-500" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                    <Phone className="size-4 text-cyan-300" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Phone
                    </div>
                    <a
                      href="tel:+918602019492"
                      className="mt-1 inline-flex items-center gap-2 text-sm text-zinc-200 transition hover:text-white"
                    >
                      +91-8602019492
                      <ExternalLink className="size-3.5 text-zinc-500" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                    <User className="size-4 text-cyan-300" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Instagram
                    </div>
                    <a
                      href="https://www.instagram.com/_.strange.0_0"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-2 text-sm text-zinc-200 transition hover:text-white"
                    >
                      @_.strange.0_0
                      <ExternalLink className="size-3.5 text-zinc-500" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                    <User className="size-4 text-cyan-300" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      LinkedIn
                    </div>
                    <a
                      href="https://www.linkedin.com/in/adimaurya/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-2 text-sm text-zinc-200 transition hover:text-white"
                    >
                      adimaurya
                      <ExternalLink className="size-3.5 text-zinc-500" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                    <User className="size-4 text-cyan-300" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      X
                    </div>
                    <a
                      href="https://x.com/AdI0_0I"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-2 text-sm text-zinc-200 transition hover:text-white"
                    >
                      @AdI0_0I
                      <ExternalLink className="size-3.5 text-zinc-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30 lg:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-200">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={updateField("name")}
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-200">
                  Phone number
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={updateField("phone")}
                  required
                  placeholder="Your phone number"
                  className="w-full rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/40"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-zinc-200">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={updateField("email")}
                required
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/40"
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-zinc-200">
                Message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField("message")}
                required
                placeholder="Tell me what you want to build."
                rows={7}
                className="w-full resize-none rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/40"
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-white px-5 text-zinc-950 hover:bg-zinc-200"
              >
                {isSubmitting ? "Sending..." : "Send"}
                <Send className="size-4" />
              </Button>

              {status.type !== "idle" ? (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-cyan-300" : "text-red-300"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
