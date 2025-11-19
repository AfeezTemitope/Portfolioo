import { motion, easeOut } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Download, Mail, ArrowDown } from "lucide-react"

const IMAGE_URL = "https://res.cloudinary.com/dgvjxhqjd/image/upload/v1753571024/DSC06734-2_e4ykmb.jpg"
const fallback = './Afeez.png'

export default function Header() {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
    const [profileImage, setProfileImage] = useState("")

    useEffect(() => {
        setProfileImage(IMAGE_URL)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: easeOut },
        },
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -5 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] },
        },
    }

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    return (
        <header id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
            {/* Animated background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                >
                    {/* Image Section */}
                    <motion.div
                        variants={imageVariants}
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
                                    alt="Bello Afeez Temitope - Full Stack Software Engineer specializing in React, Django, Spring Boot, and Web3 Development"
                                    loading="eager"
                                    width="420"
                                    height="420"
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            </motion.div>
                            <motion.div
                                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 -z-10 blur-2xl"
                                animate={{
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Text Content Section */}
                    <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left order-2 lg:order-1 space-y-8">
                        <motion.div variants={itemVariants} className="space-y-4">
                            {/*<motion.p*/}
                            {/*    className="text-blue-400 font-semibold text-lg tracking-wide uppercase"*/}
                            {/*    variants={itemVariants}*/}
                            {/*>*/}
                            {/*    Welcome to my portfolio*/}
                            {/*</motion.p>*/}

                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                            >
                                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                                    Bello Afeez
                                </span>
                                <br />
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-semibold">
                                    Temitope
                                </span>
                            </motion.h1>

                            <motion.h2
                                variants={itemVariants}
                                className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/80"
                            >
                                Full-Stack Software Engineer
                            </motion.h2>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                        >
                            Passionate full-stack engineer with 3+ years of experience building scalable applications.
                            Specialized in <span className="text-blue-400 font-semibold">Java</span>, <span className="text-blue-400 font-semibold">Python</span>,
                            and <span className="text-blue-400 font-semibold">JavaScript</span> ecosystems, with expertise in
                            modern frameworks and Web3 technologies.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                        >
                            <motion.a
                                href="mailto:belloafeez28@gmail.com"
                                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-3 text-lg"
                                aria-label="Contact Bello Afeez Temitope via email"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                Contact Me
                            </motion.a>

                            <motion.a
                                href="https://docs.google.com/document/d/1nynK90gXyy7PvUxoJkJeaXIukuZNBJ1QPC8a0YEy_X8/export?format=pdf"
                                download="Bello_Afeez_Temitope_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-3 text-lg"
                                aria-label="Download Bello Afeez Temitope's resume"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                Download Resume
                            </motion.a>
                        </motion.div>

                        {/* Tech Stack Preview Pills */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-3 justify-center lg:justify-start pt-6"
                        >
                            {["React", "Django", "Spring Boot", "Node.js", "Web3"].map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    className="px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 font-medium"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Scroll Down Indicator */}
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50 cursor-pointer"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <span className="text-sm font-medium">Scroll Down</span>
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </div>
        </header>
    )
}