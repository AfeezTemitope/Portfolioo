import { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import BottomTabBar from "./components/BottomTabBar"
import Header from "./components/Header"
import Stack from "./components/Stack"
import AboutMe from "./components/AboutMe"
import { Project } from "./components/Project"
import ReviewForm from "./components/ReviewForm"
import Footer from "./components/Footer"
import LoadingScreen from "./components/LoadingScreen"
import PWAInstallPrompt from "./components/PWAInstallPrompt"

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Hide loading screen once everything is ready (or after max ~600ms on fast connections)
        const minDisplay = setTimeout(() => setIsLoading(false), 600)
        const onLoad = () => setIsLoading(false)
        if (document.readyState === "complete") {
            setTimeout(() => setIsLoading(false), 600)
        } else {
            window.addEventListener("load", onLoad)
        }

        return () => {
            clearTimeout(minDisplay)
            window.removeEventListener("load", onLoad)
        }
    }, [])

    return (
        <>
            <LoadingScreen show={isLoading} />
            {/* Bottom padding on mobile keeps content clear of the fixed tab bar */}
            <div className="flex flex-col min-h-screen bg-gray-950 text-white antialiased pb-[calc(4.25rem+env(safe-area-inset-bottom))] md:pb-0">
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
                >
                    Skip to main content
                </a>

                <NavBar />

                <main id="main-content" className="flex-1 bg-gray-950">
                    <Header />
                    <div className="relative">
                        <Stack />
                        <AboutMe />
                        <Project />
                    </div>
                    <ReviewForm />
                </main>

                <Footer />
                <ScrollToTop />
                <PWAInstallPrompt />
                <BottomTabBar />
            </div>
        </>
    )
}

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let ticking = false
        const toggle = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(() => {
                setIsVisible(window.scrollY > 500)
                ticking = false
            })
        }
        window.addEventListener("scroll", toggle, { passive: true })
        return () => window.removeEventListener("scroll", toggle)
    }, [])

    if (!isVisible) return null

    // Desktop only — on mobile the Home tab in the bottom bar covers this
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hidden md:block fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-label="Scroll to top"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    )
}

export default App
