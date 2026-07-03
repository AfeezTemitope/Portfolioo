import { Home, User, Code, FolderOpen, Phone } from "lucide-react"
import { useActiveSection, scrollToSection, type SectionId } from "../hooks/useActiveSection"

const tabs: { id: SectionId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "stack", label: "Stack", icon: Code },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Phone },
]

/**
 * App-style bottom tab navigation — mobile only (hidden at md+).
 * Sits above the iOS home indicator via env(safe-area-inset-bottom).
 */
export default function BottomTabBar() {
  const active = useActiveSection()

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-gray-950/90 backdrop-blur-xl border-t border-white/10 pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-5">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              aria-label={`Go to ${label}`}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex flex-col items-center justify-center gap-1 py-2 min-h-[56px] text-[10px] font-medium transition-colors duration-200 ${
                isActive ? "text-blue-400" : "text-white/60 active:text-white"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
              <Icon size={22} strokeWidth={isActive ? 2.4 : 2} aria-hidden="true" />
              <span>{label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
