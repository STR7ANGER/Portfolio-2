import { Code2, Layers3 } from "lucide-react"

import { About } from "@/components/about"
import { Contact } from "@/components/Contact"
import { DSA } from "@/components/DSA"
import { Expirence } from "@/components/expirence"
import { Home } from "@/components/home"
import { Navbar } from "@/components/navbar"
import { Prijects } from "@/components/prijects"
import { RetroGrid } from "@/components/ui/retro-grid"
import { Skills } from "@/components/Skills"
import { Tools } from "@/components/tools"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <Navbar />

      <Home />
      <About />
      <Expirence />
      <Prijects />
      <Skills />
      <Tools />
      <DSA />
      <Contact />

      <footer className="relative overflow-hidden bg-black">
        <RetroGrid
          className="opacity-35"
          angle={60}
          cellSize={60}
          darkLineColor="#3f3f46"
          lightLineColor="#a1a1aa"
        />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 px-4 py-14 text-sm text-zinc-300 sm:px-6 lg:flex-row lg:items-center lg:justify-end lg:px-8">
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
        </div>
      </footer>
    </main>
  )
}
