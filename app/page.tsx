import Link from "next/link"
import { Code2, Layers3 } from "lucide-react"

import { About } from "@/components/about"
import { Contact } from "@/components/Contact"
import { DSA } from "@/components/DSA"
import { Expirence } from "@/components/expirence"
import { Home } from "@/components/home"
import { Prijects } from "@/components/prijects"
import { Skills } from "@/components/Skills"
import { Tools } from "@/components/tools"

const navItems = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Tools",
  "DSA",
  "Contact",
]

export default function Page() {
  return (
    <main className="min-h-screen bg-transparent text-zinc-100">
      <header className="sticky top-0 z-50 bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="overflow-x-auto px-4 py-3 lg:hidden">
          <div className="flex w-max gap-2">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <Home />
      <About />
      <Expirence />
      <Prijects />
      <Skills />
      <Tools />
      <DSA />
      <Contact />

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-zinc-500 sm:px-6 lg:flex-row lg:items-center lg:justify-end lg:px-8">
        <div className="group cursor-pointer">
          Aditya Maurya
          <span className="relative inline-block px-1">
            <span className="transition-opacity duration-200 group-hover:opacity-0">
               :D
            </span>
            <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
               :P
            </span>
          </span>
        </div>
      </footer>
    </main>
  )
}
