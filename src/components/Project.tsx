import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowUpRight } from 'lucide-react'

const projects = [
    {
        name: "Tenderville School Portal",
        imageUrl: "https://res.cloudinary.com/dgvjxhqjd/image/upload/v1753304581/TVS_LOGOS_dlkdd4.jpg",
        link: "https://tenderville.onrender.com/",
        description:
            "A comprehensive school portal for Tenderville School in Lekki, Lagos. This preview version is hosted on Render for development tracking and will go live officially upon client launch.",
        tags: ["React", "Node.js", "MongoDB", "Express", "Supabase", "Cloudinary", "Tailwind CSS", "TypeScript", "indexeddb"],
    },
    {
        name: "First Mission NGO Portal",
        imageUrl:
            "https://static.vecteezy.com/system/resources/thumbnails/002/826/640/small_2x/ngos-concept-icon-development-program-abstract-idea-thin-line-illustration-community-mobilization-environment-protection-stimulating-employment-isolated-outline-color-drawing-vector.jpg",
        link: "https://first-mission-humanitarian-aid-with-five.vercel.app",
        description:
            "An intuitive web platform designed for First Mission Humanitarian Aid NGO. Currently deployed to Vercel for development visibility, with final production release planned post-client approval.",
        tags: ["React", "TypeScript", "Vite", "Django", "Cloudinary", "Tailwind CSS", "Render", "Vercel"],
    },
    {
        name: "Football Club Blog",
        imageUrl: "https://th.bing.com/th/id/R.590fe86a56bae1b5e7aa5989b793f3b6?rik=J5N9gCc97eh1mg&pid=ImgRaw&r=0",
        link: "https://buduelite.netlify.app/",
        description: "A dynamic blog platform for Budu Elite Football Club, built with Django and React (powered by Vite). It features club news, player highlights, and admin-controlled content. The app uses a cloud-hosted database via Render and is currently in active testing ahead of full-scale deployment.",
        tags: ["Django", "React", "Vite", "Render", "Netlify", "Cloudinary", "Cloudflare", "Google SEO", "Redis", "Zustand"]
    },
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

export function Project() {
    const {ref, inView} = useInView({threshold: 0.1, triggerOnce: true})

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: {opacity: 0, y: 40, scale: 0.95},
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    return (
        <section id="projects" className="py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div ref={ref} variants={containerVariants} initial="hidden"
                            animate={inView ? "visible" : "hidden"}>
                    <motion.div variants={itemVariants} className="text-center mb-20">
                        <p className="text-4xl lg:text-6xl font-bold mb-4">
                            <span
                                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Projects i`ve worked on
                            </span>
                        </p>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            A collection of projects that showcase my passion for creating meaningful digital
                            experiences
                        </p>
                    </motion.div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="break-inside-avoid"
                            >
                                <motion.div
                                    className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
                                    whileHover={{
                                        y: -8,
                                        transition: {duration: 0.3, ease: "easeOut"}
                                    }}
                                >
                                    {/* Floating gradient orb */}
                                    <div
                                        className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"/>

                                    <div className="relative p-6">
                                        <div className="relative mb-6 rounded-xl overflow-hidden bg-white/5">
                                            <img
                                                loading="lazy"
                                                src={project.imageUrl || "/fallback.jpg"}
                                                alt={project.name}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                                {project.name}
                                            </h3>

                                            <p className="text-white/70 text-sm leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full border border-blue-500/20 backdrop-blur-sm"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {project.tags.length > 4 && (
                                                    <span
                                                        className="px-3 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                                                        +{project.tags.length - 4}
                                                    </span>
                                                )}
                                            </div>

                                            <motion.button
                                                onClick={() => window.open(project.link, "_blank")}
                                                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-blue-500/25"
                                                whileHover={{scale: 1.02}}
                                                whileTap={{scale: 0.98}}
                                            >
                                                <span>Explore Project</span>
                                                <ArrowUpRight size={16}
                                                              className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"/>
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
