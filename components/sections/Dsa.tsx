import { Trophy } from "lucide-react"

import SplitText from "@/components/SplitText"
import { NumberTicker } from "@/components/ui/number-ticker"
import { ShineBorder } from "@/components/ui/shine-border"

export interface LeetcodeStats {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
}

export async function fetchLeetcodeStats(
  username: string
): Promise<LeetcodeStats | null> {
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      // Cache response for 1 hour to prevent hitting API limits
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      console.error("Failed to fetch LeetCode stats")
      return null
    }

    const data = await response.json()
    const statsArray = data?.data?.matchedUser?.submitStats?.acSubmissionNum

    if (!statsArray) return null

    let totalSolved = 0,
      easySolved = 0,
      mediumSolved = 0,
      hardSolved = 0

    statsArray.forEach((item: { difficulty: string; count: number }) => {
      if (item.difficulty === "All") totalSolved = item.count
      if (item.difficulty === "Easy") easySolved = item.count
      if (item.difficulty === "Medium") mediumSolved = item.count
      if (item.difficulty === "Hard") hardSolved = item.count
    })

    return { totalSolved, easySolved, mediumSolved, hardSolved }
  } catch (error) {
    console.error("Error fetching LeetCode data:", error)
    return null
  }
}

export async function Dsa() {
  const leetcodeUsername = "Xiafloxy"
  const leetcodeStats = await fetchLeetcodeStats(leetcodeUsername)
  const codolioUrl = "https://codolio.com/profile/Xifloxy"

  return (
    <section id="dsa" className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <SplitText
            text="Yes, I flex LeetCode too"
            tag="h2"
            splitType="words"
            delay={40}
            duration={1}
            className="block text-3xl font-semibold tracking-tight text-white md:text-4xl"
            textAlign="left"
          />
          <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
            Because shipping products is fun, but having algorithmic discipline in the
            bag is also very nice.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30">
            <ShineBorder shineColor={["#ffffff"]} borderWidth={1} duration={12} />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-zinc-300">LeetCode</div>
                  <a
                    href={`https://leetcode.com/${leetcodeUsername}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex text-xs text-cyan-300 hover:text-cyan-200"
                  >
                    @{leetcodeUsername}
                  </a>
                </div>
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/80">
                  <Trophy className="size-5 text-cyan-300" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs text-zinc-400">Total</div>
                  <div className="mt-1 text-2xl font-semibold text-white">
                    {leetcodeStats ? (
                      <NumberTicker value={leetcodeStats.totalSolved} className="text-white" />
                    ) : (
                      "—"
                    )}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs text-zinc-400">Easy</div>
                  <div className="mt-1 text-2xl font-semibold text-white">
                    {leetcodeStats ? (
                      <NumberTicker value={leetcodeStats.easySolved} className="text-white" />
                    ) : (
                      "—"
                    )}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs text-zinc-400">Medium</div>
                  <div className="mt-1 text-2xl font-semibold text-white">
                    {leetcodeStats ? (
                      <NumberTicker value={leetcodeStats.mediumSolved} className="text-white" />
                    ) : (
                      "—"
                    )}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs text-zinc-400">Hard</div>
                  <div className="mt-1 text-2xl font-semibold text-white">
                    {leetcodeStats ? (
                      <NumberTicker value={leetcodeStats.hardSolved} className="text-white" />
                    ) : (
                      "—"
                    )}
                  </div>
                </div>
              </div>

              {!leetcodeStats ? (
                <div className="mt-4 text-xs text-zinc-500">
                  Stats are temporarily unavailable (LeetCode rate limit / network).
                  The rest of the section still renders.
                </div>
              ) : null}
            </div>
          </div>

          <a
            href={codolioUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30 transition hover:border-white/20"
          >
            <ShineBorder shineColor={["#ffffff"]} borderWidth={1} duration={12} />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-zinc-300">Codolio</div>
                  <div className="mt-1 text-xs text-zinc-400">
                    Checkout my other coding profiles
                  </div>
                  <div className="mt-4 inline-flex text-xs text-cyan-300 group-hover:text-cyan-200">
                    Open profile →
                  </div>
                </div>
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/80">
                  <Trophy className="size-5 text-cyan-300" />
                </div>
              </div>
              <div className="mt-5 text-xs text-zinc-500">{codolioUrl}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export { Dsa as DSA }

