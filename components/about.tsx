"use client"

import {
  Briefcase,
  Cake,
  GraduationCap,
  Landmark,
  MapPin,
  MonitorSmartphone,
  Rocket,
  School,
} from "lucide-react"
import DarkVeil from "@/components/DarkVeil"

const birthday = {
  day: 28,
  monthIndex: 6,
  year: 2005,
}

const hobbiesAndSports = [
  "Chess",
  "Gaming",
  "Swimming",
  "Cafe hopping",
  "Cooking",
  "Guitar",
  "Badminton",
  "Pickleball",
  "Paddle",
  "Table tennis",
  "Football",
  "Basketball",
] as const

function getCurrentAge() {
  const today = new Date()
  let age = today.getFullYear() - birthday.year
  const hasHadBirthdayThisYear =
    today.getMonth() > birthday.monthIndex ||
    (today.getMonth() === birthday.monthIndex &&
      today.getDate() >= birthday.day)

  if (!hasHadBirthdayThisYear) {
    age -= 1
  }

  return age
}

export function About() {
  const age = getCurrentAge()

  return (
    <section id="about" className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 opacity-90 mix-blend-screen blur-[0.5px]">
        <DarkVeil
          noiseIntensity={0.12}
          scanlineIntensity={0.35}
          scanlineFrequency={3}
          warpAmount={0.85}
          speed={1.15}
          resolutionScale={1.2}
          tint={1}
          tintColor="#ffffff"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Me in a bento
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">
            Just more about me outsite the code editor.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30 xl:col-span-2 xl:row-span-2">
            <div className="flex items-center gap-3">
              <MonitorSmartphone className="size-5 text-cyan-300" />
              <div className="text-sm font-medium text-white">About me</div>
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-white">
              I build things that make life smoother.
            </h3>
            <p className="mt-5 text-sm leading-7 text-zinc-400">
              I&apos;m Aditya Maurya, a full-stack developer who loves turning ideas
              into useful, polished products. I enjoy building software that feels
              fast, clean, and genuinely helpful in everyday life.
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              The kind of work I naturally enjoy sits at the intersection of product
              thinking, backend reliability, cloud systems, and thoughtful UI.
              I&apos;m happiest when I&apos;m building tools and applications that improve
              quality of life and remove friction for real people.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30 xl:col-span-2">
            <div className="flex items-center gap-3">
              <GraduationCap className="size-5 text-cyan-300" />
              <div className="text-sm font-medium text-white">Education</div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  College
                </div>
                <div className="mt-2 text-base font-medium text-white">
                  Bennett University
                </div>
                <div className="mt-2 text-sm leading-6 text-zinc-400">
                  2023-2027
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  School
                </div>
                <div className="mt-2 text-base font-medium text-white">
                  St. Montfort
                </div>
                <div className="mt-2 text-sm leading-6 text-zinc-400">
                  PCM + CS
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-3">
              <Cake className="size-5 text-cyan-300" />
              <div className="text-sm font-medium text-white">Date of birth</div>
            </div>
            <div className="mt-6 text-2xl font-semibold text-white">28 July 2005</div>
            <div className="mt-2 text-sm text-zinc-400">
              Wish me on 28 July. Currently {age} years old.
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-3">
              <Rocket className="size-5 text-cyan-300" />
              <div className="text-sm font-medium text-white">Builder</div>
            </div>
            <p className="mt-6 text-sm leading-7 text-zinc-400">
              Every box is awesome because I care about the details. I love making
              life-quality tools and applications that feel beautiful, useful, and
              instantly practical.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-cyan-300" />
              <div className="text-sm font-medium text-white">Location</div>
            </div>
            <div className="mt-6 text-2xl font-semibold text-white">India</div>
            <div className="mt-2 text-sm leading-6 text-zinc-400">
              Available anywhere for good work, strong teams, and exciting products.
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-3">
              <Briefcase className="size-5 text-cyan-300" />
              <div className="text-sm font-medium text-white">Work snapshot</div>
            </div>
            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <div className="text-3xl font-semibold text-white">4</div>
                <div className="mt-1 text-sm text-zinc-400">Startups worked in</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
                <div className="text-3xl font-semibold text-white">2</div>
                <div className="mt-1 text-sm text-zinc-400">Company environments</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30 xl:col-span-2">
            <div className="flex items-center gap-3">
              <School className="size-5 text-cyan-300" />
              <div className="text-sm font-medium text-white">Hobbies & Sports</div>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {hobbiesAndSports.map((item) => (
                <div key={item} className="text-sm font-medium text-zinc-200">
                  - {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
