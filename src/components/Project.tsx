import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink } from "lucide-react"

const projects = [
    {
        name: "Attendance(MERN STACK)",
        imageUrl: "https://www.bvp-connects.com/attendance-logo.png",
        link: "https://attendanceapp-uok5.onrender.com/",
        description:
            "An embedded system designed to solve issues related to tampered attendance sheets. This system incorporates an inbuilt timer to verify when users arrive at work.",
        tags: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
        name: "HopeChain: Web3 for Community Empowerment",
        imageUrl: "https://img.freepik.com/premium-vector/heart-logo_1068907-159.jpg",
        link: "https://hope-chain-2025-sui-hackerton.vercel.app/",
        description:
            "HopeChain is a decentralized fundraising platform built with Sui Move smart contracts. It ensures secure on-chain transactions while keeping user data private off-chain. Designed for nonprofits and local communities, HopeChain brings transparency, trust, and scalability to impact-driven initiatives using Web3 architecture.",
        tags: ["Web3", "Sui Move", "Blockchain", "React"],
    },
    {
        name: "Football Club Blog",
        imageUrl: "https://th.bing.com/th/id/R.590fe86a56bae1b5e7aa5989b793f3b6?rik=J5N9gCc97eh1mg&pid=ImgRaw&r=0",
        link: "https://befa-five.vercel.app/",
        description:
            "A live blog platform for Budu Elite Football Club, crafted with Django and Vite-powered React. It delivers club news, announcements, and feature articles, all controlled through a personalized admin dashboard. The site leverages a cloud-hosted database via Render and is currently undergoing active user testing ahead of full-scale development.",
        tags: ["Django", "React", "Vite", "Render"],
    },
    {
        name: "Badify Music App",
        imageUrl: "https://th.bing.com/th/id/R.9c51bbc96a108e023f49e1421af11b5b?rik=kNq8m5NVL34Mew&pid=ImgRaw&r=0",
        link: "https://badify-music-app.onrender.com/",
        description: "A Flask-based web app for searching and previewing songs using the Deezer API",
        tags: ["Flask", "Python", "API", "Music"],
    },
    {
        name: "Credit Card Validator(Python Flask)",
        imageUrl: "https://th.bing.com/th/id/OIP.iBGmFz2jxm0jssqbQCyJNwHaHa?pid=ImgDet&w=474&h=474&rs=1",
        link: "https://credit-card-validator-seven.vercel.app/",
        description: "A tool to validate credit card numbers using the Luhn algorithm.",
        tags: ["Python", "Flask", "Algorithm", "Security"],
    },
    {
        name: "Movie App",
        imageUrl: "https://logodix.com/logo/818943.png",
        link: "https://our-fav-hub.vercel.app/",
        description: "A web application for browsing and discovering movies.",
        tags: ["React", "API", "Entertainment", "UI/UX"],
    },
    {
        name: "Weather App(Flask&React)",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3845/3845731.png",
        link: "https://weather-app-frontend-tan.vercel.app/",
        description: "A web application providing current weather information for various locations.",
        tags: ["Flask", "React", "Weather API", "Responsive"],
    },
    {
        name: "Password Generator(NodeJS)",
        imageUrl: "https://th.bing.com/th/id/R.cc45ea6c8ba00fd6e94b2932b3a3694e?rik=sBTUA3EM4X0tyQ&pid=ImgRaw&r=0",
        link: "https://password-generator-web-seven.vercel.app/",
        description: "A tool to generate strong and secure passwords.",
        tags: ["Node.js", "Security", "Tool", "JavaScript"],
    },
]

export default function Project() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    return (
        <section id="projects" className="py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
                    <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {projects.map((project, index) => (
                            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} className="h-full">
                                <div className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group h-full flex flex-col rounded-lg p-6">
                                    <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-white/10">
                                        <img
                                            src={project.imageUrl || "/placeholder.svg"}
                                            alt={project.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.name}
                                    </h3>

                                    <p className="text-white/70 text-sm mb-4 flex-grow">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                        {tag}
                      </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => window.open(project.link, "_blank")}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 group/btn"
                                    >
                                        <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        Visit Project
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
