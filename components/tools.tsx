
import { TweetCard } from "@/components/ui/tweet-card"
import SplitText from "@/components/SplitText"

export function Tools() {
  const workInProgress = [
    {
      title: "One Chat",
      description:
        "A centralized command center that orchestrates entire projects through one master AI workflow. It plans execution, splits work, and routes tasks in parallel to the best model for each job, like Codex for backend-heavy work and Claude for frontend-focused tasks.",
      tag: "Multi-agent orchestration",
    },
    {
      title: "Quant Pilot",
      description:
        "A crypto trading simulator connected to a Solana wallet on devnet using airdrops. It is designed to simulate realistic buy and sell flows, store trade logs on-chain, and power a polished analytics dashboard for strategy tracking.",
      tag: "Crypto trading sim",
    },
    {
      title: "Chat Domain",
      description:
        "A React Flow-style chat workspace where conversations branch as a node tree. Parent context is shared across branches, with built-in actions like summarize, merge, inspect, and export so ideas can evolve in structured threads.",
      tag: "Visual chat graph",
    },
  ]

  return (
    <section id="tools" className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <SplitText
            text="Building in public"
            tag="h2"
            splitType="words"
            delay={40}
            duration={1}
            className="block text-3xl font-semibold tracking-tight text-white md:text-4xl"
            textAlign="left"
          />
          <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
            Projects I am actively building right now.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <TweetCard
            id="2046516002981392499"
            className="border-white/10 bg-zinc-950/90 text-zinc-100 shadow-2xl shadow-black/30"
          />
          <TweetCard
            id="2046963969827741804"
            className="border-white/10 bg-zinc-950/90 text-zinc-100 shadow-2xl shadow-black/30"
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workInProgress.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30 transition-colors hover:border-white/20"
            >
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium tracking-wide text-zinc-300">
                Work in progress
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {project.description}
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                {project.tag}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
