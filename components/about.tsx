import { GraduationCap } from "lucide-react"

import { aboutStats } from "@/components/portfolio-data"
import { SectionTitle } from "@/components/section-title"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="About"
        title="A bento snapshot of who I am"
        description="A quick high-signal read on my background, pace, and what I care about when building products."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-6 md:row-span-2">
          <GraduationCap className="size-6 text-cyan-300" />
          <h3 className="mt-6 text-2xl font-semibold text-white">
            Student by title, engineer by default
          </h3>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            I&apos;m pursuing B.Tech in Computer Science Engineering with Cloud
            Computing at Bennett University, and I spend most of my time turning
            ideas into usable products, scalable systems, and dev workflows that
            actually help teams move faster.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-300">
            I like products that feel sharp, infrastructure that doesn&apos;t break,
            and codebases that don&apos;t make future-me suffer.
          </div>
        </div>

        {aboutStats.map((stat) => (
          <div
            key={stat.title}
            className={`rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 ${stat.className ?? ""}`}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {stat.title}
            </div>
            <div className="mt-4 text-2xl font-semibold text-white">{stat.value}</div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{stat.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
