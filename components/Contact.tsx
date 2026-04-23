"use client"

import { ExternalLink, Mail, Phone, Send, User } from "lucide-react"
import { type ChangeEvent, type FormEvent, useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import SplitText from "@/components/SplitText"
import { Toaster } from "@/components/ui/sonner"
import { contactSchema, type ContactInput } from "@/lib/validation/contact"

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
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactInput, string>>
  >({})

  const validateAll = (next: FormState) => {
    const parsed = contactSchema.safeParse(next)
    if (parsed.success) return {}

    const nextErrors: Partial<Record<keyof ContactInput, string>> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactInput | undefined
      if (key && !nextErrors[key]) nextErrors[key] = issue.message
    }
    return nextErrors
  }

  const updateField =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value
      setForm((current) => ({ ...current, [field]: value }))

      if (hasSubmitted) {
        const inputField = field as keyof ContactInput
        setErrors((current) => {
          if (!current[inputField]) return current
          const next = { ...current }
          delete next[inputField]
          return next
        })
      }
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setHasSubmitted(true)
    const nextErrors = validateAll(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      toast.error("Please fix the highlighted fields and try again.")
      return
    }

    setIsSubmitting(true)

    try {
      toast.loading("Sending message...", { id: "contact-send" })
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
      setHasSubmitted(false)
      setErrors({})
      toast.success(data.message ?? "Message sent successfully.", {
        id: "contact-send",
      })
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message.",
        { id: "contact-send" }
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-black">
      <Toaster richColors closeButton />
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
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=adityamaurya.2807@gmail.com"
                      target="_blank"
                      rel="noreferrer"
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
                  aria-invalid={hasSubmitted && Boolean(errors.name)}
                  className={`w-full rounded-2xl border bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/40 ${
                    hasSubmitted && errors.name
                      ? "border-red-500/60 focus:border-red-500/70"
                      : "border-white/10"
                  }`}
                />
                {hasSubmitted && errors.name ? (
                  <p className="mt-1 text-xs text-red-300">{errors.name}</p>
                ) : null}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-200">
                  Phone number
                </span>
                <input
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  name="phone"
                  value={form.phone}
                  onChange={updateField("phone")}
                  required
                  placeholder="+91-8602019492"
                  aria-invalid={hasSubmitted && Boolean(errors.phone)}
                  className={`w-full rounded-2xl border bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/40 ${
                    hasSubmitted && errors.phone
                      ? "border-red-500/60 focus:border-red-500/70"
                      : "border-white/10"
                  }`}
                />
                {hasSubmitted && errors.phone ? (
                  <p className="mt-1 text-xs text-red-300">{errors.phone}</p>
                ) : null}
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
                aria-invalid={hasSubmitted && Boolean(errors.email)}
                className={`w-full rounded-2xl border bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/40 ${
                  hasSubmitted && errors.email
                    ? "border-red-500/60 focus:border-red-500/70"
                    : "border-white/10"
                }`}
              />
              {hasSubmitted && errors.email ? (
                <p className="mt-1 text-xs text-red-300">{errors.email}</p>
              ) : null}
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
                aria-invalid={hasSubmitted && Boolean(errors.message)}
                className={`w-full resize-none rounded-2xl border bg-zinc-900/80 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/40 ${
                  hasSubmitted && errors.message
                    ? "border-red-500/60 focus:border-red-500/70"
                    : "border-white/10"
                }`}
              />
              {hasSubmitted && errors.message ? (
                <p className="mt-1 text-xs text-red-300">{errors.message}</p>
              ) : null}
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
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
