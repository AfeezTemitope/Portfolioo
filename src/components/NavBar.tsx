"use client"

import { useState, useEffect } from "react"
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

            // Update active section based on scroll position
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
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <button
                                onClick={() => scrollToSection("#home")}
                                className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
                            >
                                Afeez T.
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <button
                                        key={item.href}
                                        onClick={() => scrollToSection(item.href)}
                                        className={`flex flex-col items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-blue-400 hover:scale-105 ${
                                            activeSection === item.href.substring(1) ? "text-blue-400" : "text-white/80"
                                        }`}
                                    >
                                        <Icon size={18} />
                                        {item.label}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                            <span className="sr-only">Toggle menu</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
                    <div className="fixed right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-lg border-l border-white/10 transform transition-transform duration-300">
                        <div className="flex flex-col p-6 pt-20">
                            <h3 className="text-white text-xl font-semibold mb-8">Navigation</h3>
                            {navItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <button
                                        key={item.href}
                                        onClick={() => scrollToSection(item.href)}
                                        className={`flex items-center gap-3 px-4 py-4 text-left text-lg font-medium transition-all duration-200 rounded-lg hover:bg-white/10 ${
                                            activeSection === item.href.substring(1) ? "text-blue-400 bg-blue-400/10" : "text-white/80"
                                        }`}
                                    >
                                        <Icon size={20} />
                                        {item.label}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
