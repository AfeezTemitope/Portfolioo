import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Code, FolderOpen, Phone } from "lucide-react"
import { useActiveSection, scrollToSection, type SectionId } from "../hooks/useActiveSection"

const navItems: { id: SectionId; label: string; icon: typeof Home }[] = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "stack", label: "Stack", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: Phone },
]

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const activeSection = useActiveSection()

    useEffect(() => {
        let ticking = false
        const onScroll = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 50)
                ticking = false
            })
        }
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-gray-950/95 backdrop-blur-lg shadow-2xl border-b border-white/10"
                    : "bg-transparent"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo/Brand */}
                    <motion.button
                        onClick={() => scrollToSection("home")}
                        className="text-xl sm:text-2xl font-bold text-white hover:text-blue-400 transition-colors relative group"
                        aria-label="Go to home section"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="flex items-center gap-2">
                            <span className="text-2xl">💻</span>
                            <span>Afeez Bello</span>
                        </span>
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                    </motion.button>

                    {/* Desktop Navigation — mobile uses the bottom tab bar */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {navItems.map((item, index) => {
                            const Icon = item.icon
                            const isActive = activeSection === item.id
                            return (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative flex flex-col items-center gap-1 px-4 py-3 text-sm lg:text-base font-medium rounded-xl transition-all duration-300 ${
                                        isActive
                                            ? "text-blue-400 bg-blue-400/10"
                                            : "text-white/70 hover:text-white hover:bg-white/5"
                                    }`}
                                    aria-label={`Navigate to ${item.label}`}
                                    aria-current={isActive ? "page" : undefined}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon size={20} aria-hidden="true" />
                                    <span>{item.label}</span>
                                    {isActive && (
                                        <motion.div
                                            className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full"
                                            layoutId="activeIndicator"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 30
                                            }}
                                        />
                                    )}
                                </motion.button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}
