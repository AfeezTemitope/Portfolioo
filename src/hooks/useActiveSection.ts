import { useEffect, useState } from "react"

export const SECTION_IDS = ["home", "about", "stack", "projects", "contact"] as const
export type SectionId = (typeof SECTION_IDS)[number]

/**
 * Tracks which page section is currently in view using IntersectionObserver.
 * Replaces the old per-scroll offsetTop/offsetHeight reads (layout thrash).
 * Shared by NavBar (desktop) and BottomTabBar (mobile) so both stay in sync.
 */
export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>("home")

  useEffect(() => {
    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ratios.set(entry.target.id, entry.intersectionRatio)
          } else {
            ratios.delete(entry.target.id)
          }
        }
        let best: SectionId | null = null
        let bestRatio = 0
        ratios.forEach((ratio, id) => {
          if (ratio >= bestRatio) {
            bestRatio = ratio
            best = id as SectionId
          }
        })
        if (best) setActive(best)
      },
      {
        // Active band: roughly the upper-middle of the viewport
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0, 0.05, 0.15, 0.3, 0.5, 0.75],
      },
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return active
}

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}
