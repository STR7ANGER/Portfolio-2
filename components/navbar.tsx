"use client"

import Link from "next/link"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

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

type BubbleStyle = {
  left: number
  width: number
  opacity: number
}

export function Navbar() {
  const [activeItem, setActiveItem] = useState("Home")
  const [desktopBubble, setDesktopBubble] = useState<BubbleStyle>({
    left: 0,
    width: 0,
    opacity: 0,
  })
  const [mobileBubble, setMobileBubble] = useState<BubbleStyle>({
    left: 0,
    width: 0,
    opacity: 0,
  })

  const desktopNavRef = useRef<HTMLDivElement | null>(null)
  const mobileNavRef = useRef<HTMLDivElement | null>(null)
  const desktopItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const mobileItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const clickScrollTargetRef = useRef<string | null>(null)
  const clickScrollTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        item,
        element: document.getElementById(item.toLowerCase()),
      }))
      .filter(
        (section): section is { item: string; element: HTMLElement } =>
          Boolean(section.element)
      )

    let ticking = false

    const updateActiveItem = () => {
      if (clickScrollTargetRef.current) {
        const targetSection = sections.find(
          (section) => section.item === clickScrollTargetRef.current
        )?.element

        if (targetSection) {
          const distanceFromTarget = Math.abs(
            targetSection.offsetTop - window.scrollY
          )

          if (distanceFromTarget > 24) {
            ticking = false
            return
          }
        }

        clickScrollTargetRef.current = null
      }

      const headerOffset = 140
      const scrollPosition = window.scrollY + headerOffset

      let nextActiveItem = sections[0]?.item ?? "Home"

      for (const section of sections) {
        if (scrollPosition >= section.element.offsetTop) {
          nextActiveItem = section.item
        } else {
          break
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 16
      ) {
        nextActiveItem = sections[sections.length - 1]?.item ?? nextActiveItem
      }

      setActiveItem((current) =>
        current === nextActiveItem ? current : nextActiveItem
      )
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveItem)
        ticking = true
      }
    }

    updateActiveItem()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      if (clickScrollTimeoutRef.current) {
        window.clearTimeout(clickScrollTimeoutRef.current)
      }
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  useLayoutEffect(() => {
    const updateBubble = (
      navRef: React.RefObject<HTMLDivElement | null>,
      itemRefs: React.MutableRefObject<Record<string, HTMLAnchorElement | null>>,
      setBubble: React.Dispatch<React.SetStateAction<BubbleStyle>>
    ) => {
      const nav = navRef.current
      const activeNode = itemRefs.current[activeItem]

      if (!nav || !activeNode) {
        setBubble((current) => ({ ...current, opacity: 0 }))
        return
      }

      setBubble({
        left: activeNode.offsetLeft,
        width: activeNode.offsetWidth,
        opacity: 1,
      })
    }

    updateBubble(desktopNavRef, desktopItemRefs, setDesktopBubble)
    updateBubble(mobileNavRef, mobileItemRefs, setMobileBubble)

    const onResize = () => {
      updateBubble(desktopNavRef, desktopItemRefs, setDesktopBubble)
      updateBubble(mobileNavRef, mobileItemRefs, setMobileBubble)
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [activeItem])

  const handleClick = (item: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    clickScrollTargetRef.current = item
    if (clickScrollTimeoutRef.current) {
      window.clearTimeout(clickScrollTimeoutRef.current)
    }
    clickScrollTimeoutRef.current = window.setTimeout(() => {
      clickScrollTargetRef.current = null
    }, 900)
    setActiveItem(item)
    document.getElementById(item.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <div
          ref={desktopNavRef}
          className="relative hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex"
        >
          <div
            className="pointer-events-none absolute inset-y-1 rounded-full bg-white transition-all duration-300 ease-out"
            style={{
              left: desktopBubble.left,
              width: desktopBubble.width,
              opacity: desktopBubble.opacity,
            }}
          />
          {navItems.map((item) => {
            const isActive = activeItem === item

            return (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                ref={(node) => {
                  desktopItemRefs.current[item] = node
                }}
                onClick={handleClick(item)}
                className={`relative z-10 rounded-full px-4 py-2 text-sm transition ${
                  isActive ? "text-zinc-950" : "text-zinc-300 hover:text-white"
                }`}
              >
                {item}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="overflow-x-auto px-4 py-3 lg:hidden">
        <div
          ref={mobileNavRef}
          className="relative flex w-max gap-2 rounded-full border border-white/10 bg-white/5 p-1"
        >
          <div
            className="pointer-events-none absolute inset-y-1 rounded-full bg-white transition-all duration-300 ease-out"
            style={{
              left: mobileBubble.left,
              width: mobileBubble.width,
              opacity: mobileBubble.opacity,
            }}
          />
          {navItems.map((item) => {
            const isActive = activeItem === item

            return (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                ref={(node) => {
                  mobileItemRefs.current[item] = node
                }}
                onClick={handleClick(item)}
                className={`relative z-10 rounded-full px-3 py-1.5 text-xs transition ${
                  isActive ? "text-zinc-950" : "text-zinc-300 hover:text-white"
                }`}
              >
                {item}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}
