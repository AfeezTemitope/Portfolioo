import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Download, Mail, ArrowDown } from "lucide-react"

const IMAGE_URL = "https://res.cloudinary.com/dgvjxhqjd/image/upload/v1753571024/DSC06734-2_e4ykmb.jpg"
const fallback = "./Afeez.png"

export default function Header() {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
    const [profileImage, setProfileImage] = useState("")

    useEffect(() => {
        setProfileImage(IMAGE_URL)
    }, [])

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -5 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 1.2 }
        }
    }

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
    }

    return (
        <header id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
            {/* Background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                    className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
                <div ref={ref} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* IMAGE SECTION */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="flex-shrink-0 order-1 lg:order-2"
                    >
                        <div className="relative">
                            <motion.div
                                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1.5 shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={profileImage || fallback}
                                    alt="Afeez Temitope Bello - Software Engineer"
                                    width="420"
                                    height="420"
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            </motion.div>

                            {/* Glow animation */}
                            <motion.div
                                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 -z-10 blur-2xl"
                                animate={{ opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>

                    {/* TEXT SECTION */}
                    <div className="flex-1 text-center lg:text-left order-2 lg:order-1 space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                                    Bello Afeez
                                </span>
                                <br />
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-semibold">
                                    Temitope
                                </span>
                            </h1>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/80">
                                Software Engineer
                            </h2>
                        </div>

                        <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Software engineer with 3+ years of experience designing and maintaining scalable applications 
                            across Web2 and Web3 environments. Skilled in <span className="text-blue-400 font-semibold">Java</span>, 
                            <span className="text-green-400 font-semibold"> Python</span>, and 
                            <span className="text-yellow-400 font-semibold"> JavaScript</span>, building solutions with 
                            Spring Boot, Django, and React.js.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <a
                                href="mailto:belloafeez28@gmail.com"
                                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-3 text-lg"
                            >
                                <Mail className="w-5 h-5" />
                                Contact Me
                            </a>

                            <a
                                href="https://docs.google.com/document/d/1EaO2I89DpHW_YfcIw5gq7O0PkZSDPbBG/export?format=pdf"
                                download="Bello_Afeez_Temitope_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-6">
                            {["React", "Django", "Spring Boot", "Node.js", "Web3"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Floating Scroll Indicator */}
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50 cursor-pointer"
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                    <span className="text-sm font-medium">Scroll Down</span>
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </div>
        </header>
    )
}