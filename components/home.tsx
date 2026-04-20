"use client"

import Link from "next/link"
import { ArrowRight, Check, Copy } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"

export function Home() {
  const [isCopied, setIsCopied] = useState(false)
  const email = "adityamaurya.2807@gmail.com"

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 1200)
    } catch {
      setIsCopied(false)
    }
  }

  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            I&apos;m Aditya Maurya
          </h1>
          <div className="mt-5 text-lg font-medium text-zinc-200 sm:text-xl">
            Full-stack developer building clean products, strong backends, and
            scalable cloud systems.
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I focus on web apps that feel sharp in the UI and solid under the hood,
            with experience across product engineering, deployment workflows, and
            real-world shipping.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-white px-5 text-zinc-950 hover:bg-zinc-200">
              <Link href="#projects">
                Explore projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/10 bg-white/5 px-5 text-white hover:bg-white/10"
            >
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=adityamaurya.2807@gmail.com">
                Contact
              </Link>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/30">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
            <div className="ml-3 text-xs text-zinc-500">aditya@portfolio:~</div>
          </div>

          <div className="space-y-4 p-5 font-mono text-sm leading-7 text-zinc-300">
            <div className="break-words">
              <span className="mr-1 text-zinc-100">$</span>
              <span className="text-zinc-100">whoami</span>
            </div>
            <div className="break-words text-zinc-400">Aditya Maurya</div>

            <div className="break-words">
              <span className="mr-1 text-zinc-100">$</span>
              <span className="text-zinc-100">stack --top</span>
            </div>
            <div className="break-words text-zinc-400">Next · Node · TS · PSQL · AWS · GO</div>

            <div className="break-words">
              <span className="mr-1 text-zinc-100">$</span>
              <span className="text-zinc-100">status</span>
            </div>
            <div className="break-words text-zinc-400">
              Building polished apps with reliable backend systems.
            </div>

            <div className="break-words">
              <span className="mr-1 text-zinc-100">$</span>
              <span className="text-zinc-100">contact</span>
            </div>
            <div className="group flex items-center gap-2">
              <Link
                href={`mailto:${email}`}
                className="block break-words text-zinc-400 transition hover:text-white"
              >
                {email}
              </Link>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="rounded p-1 text-zinc-500 opacity-0 transition hover:text-white group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                aria-label="Copy email address"
                title={isCopied ? "Copied!" : "Copy email"}
              >
                {isCopied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              </button>
            </div>

            <div className="break-words">
              <span className="mr-1 text-zinc-100">$</span>
              <span className="text-zinc-100">social</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-zinc-400">
              <Link
                href="https://www.linkedin.com/in/adimaurya"
                className="transition hover:text-white"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/STR7ANGER"
                className="transition hover:text-white"
              >
                GitHub
              </Link>
              <Link href="https://leetcode.com/" className="transition hover:text-white">
                LeetCode
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
