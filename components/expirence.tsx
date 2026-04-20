import { experiences } from "@/components/portfolio-data"
import { SectionTitle } from "@/components/section-title"

export function Expirence() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionTitle
        eyebrow="Experience"
        title="Where I&apos;ve been shipping"
        description="Hands-on work across enterprise systems, AI products, fintech dashboards, and education platforms."
      />

      <div className="space-y-6">
        {experiences.map((experience) => (
          <div
            key={`${experience.company}-${experience.role}`}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 lg:p-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  {experience.location}
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {experience.role}
                </h3>
                <p className="mt-1 text-base text-cyan-300">{experience.company}</p>
              </div>
              <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300">
                {experience.period}
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {experience.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex gap-3 rounded-2xl border border-white/6 bg-black/10 px-4 py-3 text-sm leading-6 text-zinc-300"
                >
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-cyan-300" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
