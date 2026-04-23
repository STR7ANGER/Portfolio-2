import { BorderBeam } from "@/components/ui/border-beam"
import SplitText from "@/components/SplitText"

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++", "C#", "Java", "Go"],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "Django",
      ".NET",
      "REST APIs",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "DynamoDB"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "Automation & Tools",
    items: ["Git", "Bash", "Prisma", "Mongoose", "Entity Framework"],
  },
  {
    title: "Testing",
    items: ["Postman", "UI and workflow testing", "Jest", "Chrome DevTools"],
  },
  {
    title: "Core CS",
    items: [
      "DSA",
      "System Design",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
    ],
  },
] as const

export function Skills() {
  return (
    <section id="skills" className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <SplitText
            text="My technical stack"
            tag="h2"
            splitType="words"
            delay={40}
            duration={1}
            className="block text-3xl font-semibold tracking-tight text-white md:text-4xl"
            textAlign="left"
          />
          <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
            The core technologies I reach for when turning product ideas into something
            real.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30"
            >
              <BorderBeam
                size={140}
                duration={8}
                colorFrom="#ffffff"
                colorTo="#ffffff"
              />
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

