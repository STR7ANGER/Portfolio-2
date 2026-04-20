import { Code2, Layers3 } from "lucide-react"

import { About } from "@/components/about"
import { Contact } from "@/components/Contact"
import { DSA } from "@/components/DSA"
import { Expirence } from "@/components/expirence"
import { Home } from "@/components/home"
import { Navbar } from "@/components/navbar"
import { Prijects } from "@/components/prijects"
import { Skills } from "@/components/Skills"
import { Tools } from "@/components/tools"

export default function Page() {
  return (
    <main className="min-h-screen bg-transparent text-zinc-100">
      <Navbar />

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
