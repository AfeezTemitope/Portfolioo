import { useEffect } from "react"
import "./App.css"
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Stack from "./components/Stack"
import AboutMe from "./components/AboutMe"
import { Project } from "./components/Project"
import ReviewForm from "./components/ReviewForm"
import Footer from "./components/Footer"

function App() {
    useEffect(() => {
        // Set document title and meta tags for SEO
        document.title = "Bello Afeez Temitope - Full Stack Software Engineer | React, Django, Spring Boot"

        // Update or create meta tags
        const metaTags = {
            description: "Full-stack software engineer with 3+ years of experience building scalable web applications. Expert in React, Django, Spring Boot, Node.js, and Web3 technologies. Based in Lagos, Nigeria.",
            keywords: "Bello Afeez Temitope, BadAfeez, Full Stack Developer, Software Engineer, React Developer, Django Developer, Spring Boot, Node.js, Web3, Blockchain Developer, Lagos Nigeria, JavaScript, Python, Java, TypeScript",
            author: "Bello Afeez Temitope",
            "og:title": "Bello Afeez Temitope - Full Stack Software Engineer",
            "og:description": "Passionate software engineer specializing in building scalable applications with React, Django, Spring Boot, and Web3 technologies.",
            "og:type": "website",
            "og:url": window.location.href,
            "og:image": "https://res.cloudinary.com/dgvjxhqjd/image/upload/v1753571024/DSC06734-2_e4ykmb.jpg",
            "twitter:card": "summary_large_image",
            "twitter:title": "Bello Afeez Temitope - Full Stack Software Engineer",
            "twitter:description": "Full-stack engineer building scalable applications with modern technologies",
            "twitter:image": "https://res.cloudinary.com/dgvjxhqjd/image/upload/v1753571024/DSC06734-2_e4ykmb.jpg",
        }

        Object.entries(metaTags).forEach(([name, content]) => {
            let meta = document.querySelector(`meta[name="${name}"]`) ||
                document.querySelector(`meta[property="${name}"]`)

            if (!meta) {
                meta = document.createElement("meta")
                if (name.startsWith("og:") || name.startsWith("twitter:")) {
                    meta.setAttribute("property", name)
                } else {
                    meta.setAttribute("name", name)
                }
                document.head.appendChild(meta)
            }
            meta.setAttribute("content", content)
        })

        // Add canonical URL
        let canonical = document.querySelector('link[rel="canonical"]')
        if (!canonical) {
            canonical = document.createElement("link")
            canonical.setAttribute("rel", "canonical")
            document.head.appendChild(canonical)
        }
        canonical.setAttribute("href", window.location.href)

        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = "smooth"

        return () => {
            document.documentElement.style.scrollBehavior = "auto"
        }
    }, [])

    return (
        <div className="flex flex-col min-h-screen bg-gray-950 text-white antialiased">
            {/* Skip to main content link for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
            >
                Skip to main content
            </a>

            {/* Navigation */}
            <NavBar />

            {/* Main Content */}
            <main id="main-content" className="flex-1 bg-gray-950">
                <Header />
                <div className="relative">
                    <Stack />
                    <AboutMe />
                    <Project />
                </div>
                <ReviewForm />
            </main>

            {/* Footer */}
            <Footer />

            {/* Scroll to top button */}
            <ScrollToTop />
        </div>
    )
}

// Scroll to Top Component
function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500)
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    if (!isVisible) return null

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-label="Scroll to top"
        >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
            </svg>
        </button>
    )
}

function useState<T>(initialValue: T): [T, (value: T) => void] {
    return [initialValue as T, () => {}] as [T, (value: T) => void]
}

export default App