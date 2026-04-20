import Link from "next/link"
import { BadgeCheck, FolderGit2, Globe2, Mail, MessageCircleMore } from "lucide-react"

import { SectionTitle } from "@/components/section-title"
import { Button } from "@/components/ui/button"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "adityamaurya.2807@gmail.com",
    href: "mailto:adityamaurya.2807@gmail.com",
  },
  {
    icon: MessageCircleMore,
    label: "Gmail",
    value: "Open compose window",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=adityamaurya.2807@gmail.com",
  },
  {
    icon: BadgeCheck,
    label: "LinkedIn",
    value: "linkedin.com/in/adimaurya",
    href: "https://www.linkedin.com/in/adimaurya",
  },
  {
    icon: FolderGit2,
    label: "GitHub",
    value: "github.com/STR7ANGER",
    href: "https://github.com/STR7ANGER",
  },
] as const

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 lg:p-10">
        <SectionTitle
          eyebrow="Contact"
          title="Let&apos;s make something ridiculously good"
          description="If you want a developer who cares about both the architecture and the aesthetic, I&apos;m in."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5 transition hover:border-cyan-300/30 hover:bg-black/30"
            >
              <item.icon className="size-5 text-cyan-300" />
              <div className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
                {item.label}
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-200">{item.value}</div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="rounded-full bg-white px-5 text-zinc-950 hover:bg-zinc-200">
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=adityamaurya.2807@gmail.com">
              Contact on Google
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/10 bg-white/5 px-5 text-white hover:bg-white/10"
          >
            <Link href="https://adityamaurya.me">
              Visit domain
              <Globe2 className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
