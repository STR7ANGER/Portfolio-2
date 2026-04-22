import { Trophy } from "lucide-react"

import { dsaStats } from "@/components/portfolio-data"
import SplitText from "@/components/SplitText"

export function DSA() {
  return (
    <section id="dsa" className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <SplitText
            text="Yes, I flex LeetCode too"
            tag="h2"
            splitType="words"
            delay={40}
            duration={1}
            className="block text-3xl font-semibold tracking-tight text-white md:text-4xl"
            textAlign="left"
          />
          <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
            Because shipping products is fun, but having algorithmic discipline in the bag is also very nice.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dsaStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 text-center shadow-2xl shadow-black/30"
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/80">
                <Trophy className="size-5 text-cyan-300" />
              </div>
              <div className="mt-4 text-3xl font-semibold text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30">
          <p className="text-sm leading-7 text-zinc-300">
            I&apos;ve solved 800+ LeetCode problems, crossed a 1650+ contest rating,
            and keep sharpening fundamentals across DSA, DBMS, operating systems,
            computer networks, and system design.
          </p>
        </div>
      </div>
    </section>
  )
}
