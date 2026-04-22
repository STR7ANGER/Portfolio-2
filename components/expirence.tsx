import { experiences } from "@/components/portfolio-data"
import LightPillar from "@/components/LightPillar"
import { ShineBorder } from "@/components/ui/shine-border"

export function Expirence() {
  return (
    <section id="experience" className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <LightPillar
          topColor="#ffffff"
          bottomColor="#ffffff"
          intensity={0.2}
          glowAmount={0.008}
          noiseIntensity={0.08}
          rotationSpeed={2}
          quality="medium"
          pillarWidth={3.8}
          pillarHeight={0.5}
          pillarRotation={90}
          mixBlendMode="screen"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Where I&apos;ve been shipping
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
            Hands-on work across enterprise systems, AI products, fintech dashboards, and education platforms.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/90 p-5 shadow-2xl shadow-black/30 lg:p-6"
            >
              <ShineBorder
                shineColor={["#ffffff"]}
                borderWidth={1}
                duration={12}
              />

              <div className="relative z-10 flex flex-col gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    {experience.location}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-sm text-cyan-300">{experience.company}</p>
                </div>
                <div className="w-fit rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300">
                  {experience.period}
                </div>
              </div>

              <div className="relative z-10 mt-5 rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <div className="space-y-2.5">
                  {experience.bullets.slice(0, 3).map((bullet) => (
                    <div
                      key={bullet}
                      className="flex gap-2.5 text-xs leading-5 text-zinc-300"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
