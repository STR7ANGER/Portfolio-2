"use client"

import Link from "next/link"
import { ArrowRight, Check, Copy } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

import Beams from "@/components/fx/Beams"
import SplitText from "@/components/SplitText"
import { Button } from "@/components/ui/button"

export function Home() {
  const [isCopied, setIsCopied] = useState(false)
  const email = "adityamaurya.2807@gmail.com"

  const scrollToSection = (id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

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
      className="relative min-h-svh overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2">
        <Beams
          lightColor="#ffffff"
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          speed={2}
          noiseIntensity={1.75}
          scale={0.3}
          rotation={-90}
        />
      </div>
      <div className="relative z-10 mx-auto grid min-h-svh max-w-7xl items-center gap-12 px-4 pb-16 pt-24 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-20 lg:pt-28">
        <div>
          <SplitText
            text="I'm Aditya Maurya"
            tag="h1"
            splitType="chars"
            delay={40}
            duration={2}
            className="block max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            textAlign="left"
          />
          <motion.div
            className="mt-5 text-lg font-medium text-zinc-100 sm:text-xl"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Full-stack developer building clean products, strong backends, and
            scalable cloud systems.
          </motion.div>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            I focus on web apps that feel sharp in the UI and solid under the hood,
            with experience across product engineering, deployment workflows, and
            real-world shipping.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.25 }}
          >
            <Button
              type="button"
              onClick={scrollToSection("projects")}
              className="rounded-full bg-white px-5 text-zinc-950 hover:bg-zinc-200"
            >
              Explore projects
              <ArrowRight className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={scrollToSection("contact")}
              className="rounded-full border-white/10 bg-white/5 px-5 text-white hover:bg-white/10"
            >
              Contact
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/30"
          initial={{ opacity: 0, x: 72 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
        >
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
            <div className="break-words text-zinc-400">
              Next · Node · TS · PSQL · AWS · GO
            </div>

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
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  email
                )}`}
                target="_blank"
                rel="noreferrer"
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
                {isCopied ? (
                  <Check className="size-3.5" />
                ) : (
                  <Copy className="size-3.5" />
                )}
              </button>
            </div>

            <div className="break-words">
              <span className="mr-1 text-zinc-100">$</span>
              <span className="text-zinc-100">social</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-zinc-400">
              <Link
                href="https://www.linkedin.com/in/adimaurya"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/STR7ANGER"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                GitHub
              </Link>
              <Link
                href="https://leetcode.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LeetCode
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

