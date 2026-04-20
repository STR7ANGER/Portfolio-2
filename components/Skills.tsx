import { skillGroups } from "@/components/portfolio-data"
import { SectionTitle } from "@/components/section-title"

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Skills"
        title="My technical stack"
        description="The core technologies I reach for when turning product ideas into something real."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
