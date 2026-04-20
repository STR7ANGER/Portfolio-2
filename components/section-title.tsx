import { Sparkles } from "lucide-react"

type SectionTitleProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-300">
        <Sparkles className="size-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
        {description}
      </p>
    </div>
  )
}
