import { Wrench } from "lucide-react"

import { toolCards } from "@/components/portfolio-data"

export function Tools() {
  return (
    <section id="tools" className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            The practical side of how I work
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
            These are the systems and helper workflows I keep close because they save time and make shipping easier.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {toolCards.map((tool) => (
            <div
              key={tool.title}
              className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-3">
                  <Wrench className="size-5 text-cyan-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{tool.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
