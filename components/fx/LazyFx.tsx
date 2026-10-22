"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState, type ComponentProps } from "react"

/**
 * Below-the-fold WebGL backdrops, deferred.
 *
 * Each of these effects compiles shaders and spins up a GL context on mount.
 * Measured on a throttled mobile profile, doing that for every section at once
 * cost ~4.3s of main-thread execution, which blocked hydration and pushed LCP
 * to 7.3s — for a plain text paragraph in the hero that was waiting on its
 * reveal animation.
 *
 * `ssr: false` splits each effect into its own chunk so it is not part of the
 * initial payload, and the IntersectionObserver gate means the chunk is not
 * even fetched until the section approaches the viewport. The hero's Beams is
 * deliberately NOT wrapped — it is above the fold and must paint immediately.
 */

const DarkVeilImpl = dynamic(() => import("./DarkVeil"), { ssr: false })
const LightPillarImpl = dynamic(() => import("./LightPillar"), { ssr: false })

function useNearViewport(rootMargin = "300px") {
  const ref = useRef<HTMLDivElement>(null)
  const [isNear, setIsNear] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || isNear) return

    if (typeof IntersectionObserver === "undefined") {
      setIsNear(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsNear(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, isNear])

  return { ref, isNear }
}

export function LazyDarkVeil(props: ComponentProps<typeof DarkVeilImpl>) {
  const { ref, isNear } = useNearViewport()

  return (
    <div ref={ref} className="absolute inset-0">
      {isNear ? <DarkVeilImpl {...props} /> : null}
    </div>
  )
}

export function LazyLightPillar(props: ComponentProps<typeof LightPillarImpl>) {
  const { ref, isNear } = useNearViewport()

  return (
    <div ref={ref} className="absolute inset-0">
      {isNear ? <LightPillarImpl {...props} /> : null}
    </div>
  )
}
