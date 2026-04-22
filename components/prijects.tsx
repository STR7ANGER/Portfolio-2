import Image from "next/image"
import { ExternalLink } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LightPillar from "@/components/LightPillar"
import SplitText from "@/components/SplitText"
import { MagicCard } from "@/components/ui/magic-card"

const projects = [
  {
    name: "Taskmorpher",
    image: "/taskmorpher.png",
    description: "Productivity workspace with task tracking and collaboration.",
    source: "https://github.com/STR7ANGER/TaskMorpher",
    live: "https://task-morpher.vercel.app/",
  },
  {
    name: "Job Portal",
    image: "/jobprotal.png",
    description: "Job listing and hiring workflow platform for recruiters and candidates.",
    source: "https://github.com/STR7ANGER/JOB-PORTAL",
    live: "https://job-portal-green-nu.vercel.app/",
  },
  {
    name: "Virtual Venture",
    image: "/virtualventure.png",
    description: "Virtual business and trading simulator with live-style interactions.",
    source: "https://github.com/STR7ANGER/Virtual_Ventures",
    live: "https://virtual-ventures.netlify.app/",
  },
  {
    name: "Tech UI",
    image: "/techui.png",
    description: "Reusable UI components and design system for modern web apps.",
    source: "https://github.com/STR7ANGER/UI_Library",
    live: "https://astonishing-arithmetic-d5066a.netlify.app/",
  },
  {
    name: "Learning Habits",
    image: "/learninghabit.png",
    description: "Learning tracker focused on consistency, streaks, and progress insights.",
    source: "https://github.com/STR7ANGER/Learning-Habits",
    live: "https://learning-habits-ebon.vercel.app/",
  },
  {
    name: "Bloomify",
    image: "/bloomify.png",
    description: "Growth-focused app experience with clean UX and engagement flows.",
    source: "https://github.com/STR7ANGER/Bloomify",
    live: "https://bloomify-bay.vercel.app/",
  },
]

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.22 1.84 1.22 1.08 1.82 2.82 1.3 3.5 1 .1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.31-5.47-5.86 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.52.12-3.16 0 0 1.01-.32 3.3 1.22a11.7 11.7 0 0 1 6 0c2.29-1.54 3.3-1.22 3.3-1.22.65 1.64.24 2.86.12 3.16.77.84 1.23 1.9 1.23 3.2 0 4.56-2.8 5.55-5.48 5.85.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}

export function Prijects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-black">
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
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-6">
        <div className="mb-10 max-w-3xl">
          <SplitText
            text="Projects that show how I think"
            tag="h2"
            splitType="words"
            delay={40}
            duration={1}
            className="block text-3xl font-semibold tracking-tight text-white md:text-4xl"
            textAlign="left"
          />
          <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
            A mix of product thinking, scale-minded engineering, and interface polish.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <MagicCard
              key={project.name}
              gradientFrom="#ffffff"
              gradientTo="#ffffff"
              className="rounded-[2rem] transition-transform duration-300 hover:-translate-y-2"
            >
              <Card className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/30">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={640}
                  height={360}
                  className="h-48 w-full object-cover"
                />

                <CardHeader className="px-5 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-2xl text-white">{project.name}</CardTitle>
                    <div className="flex items-center gap-3 text-zinc-400">
                      <a href={project.source} target="_blank" rel="noreferrer" aria-label={`${project.name} source code`}>
                        <GitHubIcon className="size-4 transition hover:text-white" />
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`}>
                        <ExternalLink className="size-4 transition hover:text-white" />
                      </a>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-5 pb-5">
                  <CardDescription className="text-sm leading-7 text-zinc-400">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  )
}
