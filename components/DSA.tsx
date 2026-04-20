import { Trophy } from "lucide-react"

import { dsaStats } from "@/components/portfolio-data"
import { SectionTitle } from "@/components/section-title"

export function DSA() {
  return (
    <section id="dsa" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="DSA"
        title="Yes, I flex LeetCode too"
        description="Because shipping products is fun, but having algorithmic discipline in the bag is also very nice."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dsaStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center"
          >
            <Trophy className="mx-auto size-5 text-cyan-300" />
            <div className="mt-4 text-3xl font-semibold text-white">{stat.value}</div>
            <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/20 p-6">
        <p className="text-sm leading-7 text-zinc-300">
          I&apos;ve solved 800+ LeetCode problems, crossed a 1650+ contest rating,
          and keep sharpening fundamentals across DSA, DBMS, operating systems,
          computer networks, and system design.
        </p>
      </div>
    </section>
  )
}
