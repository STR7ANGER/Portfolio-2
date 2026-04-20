import { Wrench } from "lucide-react"

import { toolCards } from "@/components/portfolio-data"
import { SectionTitle } from "@/components/section-title"

export function Tools() {
  return (
    <section id="tools" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Tools"
        title="The practical side of how I work"
        description="These are the systems and helper workflows I keep close because they save time and make shipping easier."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {toolCards.map((tool) => (
          <div
            key={tool.title}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                <Wrench className="size-5 text-cyan-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{tool.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
