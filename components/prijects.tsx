import { ExternalLink } from "lucide-react"

import { projects } from "@/components/portfolio-data"

export function Prijects() {
  return (
    <section id="projects" className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Projects that show how I think
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
            A mix of product thinking, scale-minded engineering, and interface polish.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {project.tag}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {project.name}
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 bg-zinc-900/80 p-2 text-zinc-400 transition group-hover:text-cyan-300">
                  <ExternalLink className="size-4" />
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-zinc-300">
                {project.stack}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
