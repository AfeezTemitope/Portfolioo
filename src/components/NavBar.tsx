import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Home, User, Code, FolderOpen, Phone, X } from "lucide-react"

const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#stack", label: "Stack", icon: Code },
    { href: "#projects", label: "Projects", icon: FolderOpen },
    { href: "#contact", label: "Contact", icon: Phone },
]

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            const sections = navItems.map((item) => item.href.substring(1))
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.substring(1))
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsOpen(false)
    }

    return (
        <>
            {/* Desktop & Mobile Navigation Bar */}
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
                    <div className="flex items-center justify-between h-20">
                        {/* Logo/Brand */}
                        <motion.button
                            onClick={() => scrollToSection("#home")}
                            className="text-xl sm:text-2xl font-bold text-white hover:text-blue-400 transition-colors relative group"
                            aria-label="Go to home section"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-2xl">💻</span>
                                <span>BadAfeez</span>
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                        </motion.button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                            {navItems.map((item, index) => {
                                const Icon = item.icon
                                const isActive = activeSection === item.href.substring(1)
                                return (
                                    <motion.button
                                        key={item.href}
                                        onClick={() => scrollToSection(item.href)}
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

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white hover:bg-white/10 p-3 rounded-xl transition-colors border border-white/10"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-gray-950/98 backdrop-blur-xl border-l border-white/10 z-50 md:hidden shadow-2xl"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                        >
                            <div className="flex flex-col h-full p-8 pt-24">
                                {/* Menu Header */}
                                {/*<motion.div*/}
                                {/*    className="mb-8"*/}
                                {/*    initial={{ opacity: 0, y: -20 }}*/}
                                {/*    animate={{ opacity: 1, y: 0 }}*/}
                                {/*    transition={{ delay: 0.1 }}*/}
                                {/*>*/}
                                {/*    <h3 className="text-white text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">*/}
                                {/*        Navigation*/}
                                {/*    </h3>*/}
                                {/*    <p className="text-white/60 text-sm">Explore my portfolio</p>*/}
                                {/*</motion.div>*/}

                                {/* Menu Items */}
                                <nav className="flex-1 space-y-2">
                                    {navItems.map((item, index) => {
                                        const Icon = item.icon
                                        const isActive = activeSection === item.href.substring(1)
                                        return (
                                            <motion.button
                                                key={item.href}
                                                onClick={() => scrollToSection(item.href)}
                                                className={`w-full flex items-center gap-4 px-5 py-4 text-left text-base font-medium rounded-xl transition-all duration-300 ${
                                                    isActive
                                                        ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                                                        : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
                                                }`}
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + index * 0.05 }}
                                                whileHover={{ x: 4 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Icon size={22} />
                                                <span className="flex-1">{item.label}</span>
                                                {isActive && (
                                                    <motion.div
                                                        className="w-2 h-2 bg-blue-400 rounded-full"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 500,
                                                            damping: 30
                                                        }}
                                                    />
                                                )}
                                            </motion.button>
                                        )
                                    })}
                                </nav>

                                {/* Footer Text */}
                                {/*<motion.div*/}
                                {/*    className="mt-auto pt-6 border-t border-white/10"*/}
                                {/*    initial={{ opacity: 0 }}*/}
                                {/*    animate={{ opacity: 1 }}*/}
                                {/*    transition={{ delay: 0.4 }}*/}
                                {/*>*/}
                                {/*    <p className="text-white/50 text-sm text-center">*/}
                                {/*        Made with 💙 by BadAfeez*/}
                                {/*    </p>*/}
                                {/*</motion.div>*/}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}