import { motion, easeOut } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Smartphone } from "lucide-react"
import { FaHtml5, FaCss3Alt, FaPython, FaAws, FaDocker, FaReact, FaGithub, FaJava } from "react-icons/fa"
import {
    SiJavascript,
    SiTypescript,
    SiFirebase,
    SiSupabase,
    SiDjango,
    SiSpringboot,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiNextdotjs,
    SiTailwindcss,
    SiRedis,
    SiJest,
} from "react-icons/si"
import { BiLogoFlask } from "react-icons/bi"

const techData = {
    "Frontend Development": [
        { name: "React.js", icon: <FaReact size={32} />, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", icon: <SiNextdotjs size={32} />, color: "from-gray-800 to-black" },
        { name: "JavaScript", icon: <SiJavascript size={32} />, color: "from-yellow-400 to-yellow-600" },
        { name: "TypeScript", icon: <SiTypescript size={32} />, color: "from-blue-500 to-blue-700" },
        { name: "HTML5", icon: <FaHtml5 size={32} />, color: "from-orange-400 to-orange-600" },
        { name: "CSS3", icon: <FaCss3Alt size={32} />, color: "from-blue-400 to-blue-600" },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={32} />, color: "from-teal-400 to-teal-600" },
    ],
    "Backend Development": [
        { name: "Django", icon: <SiDjango size={32} />, color: "from-green-400 to-green-600" },
        { name: "Flask", icon: <BiLogoFlask size={32} />, color: "from-red-400 to-red-600" },
        { name: "Spring Boot", icon: <SiSpringboot size={32} />, color: "from-green-400 to-green-600" },
        { name: "Node.js", icon: <SiNodedotjs size={32} />, color: "from-green-400 to-green-600" },
        { name: "Java", icon: <FaJava size={32} />, color: "from-red-500 to-red-700" },
        { name: "Python", icon: <FaPython size={32} />, color: "from-blue-400 to-yellow-400" },
    ],
    "Database & Storage": [
        { name: "PostgreSQL", icon: <SiPostgresql size={32} />, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", icon: <SiMongodb size={32} />, color: "from-green-400 to-green-600" },
        { name: "MySQL", icon: <SiMysql size={32} />, color: "from-blue-400 to-blue-600" },
        { name: "Supabase", icon: <SiSupabase size={32} />, color: "from-teal-400 to-teal-600" },
        { name: "Firebase", icon: <SiFirebase size={32} />, color: "from-orange-500 to-red-500" },
        { name: "Redis", icon: <SiRedis size={32} />, color: "from-red-400 to-red-600" },
    ],
    "Mobile Development": [
        { name: "React Native", icon: <Smartphone size={32} />, color: "from-blue-400 to-purple-600" }
    ],
    "DevOps & Cloud": [
        { name: "AWS", icon: <FaAws size={32} />, color: "from-orange-400 to-orange-600" },
        { name: "Docker", icon: <FaDocker size={32} />, color: "from-blue-400 to-blue-600" },
        { name: "GitHub Actions", icon: <FaGithub size={32} />, color: "from-gray-400 to-gray-600" },
    ],
    "Testing & Quality": [
        { name: "Jest", icon: <SiJest size={32} />, color: "from-red-400 to-red-600" },
    ],
}

export default function Stack() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
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
                ease: easeOut,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: easeOut,
            },
        },
    }

    return (
        <section id="stack" className="py-24 lg:py-32 relative overflow-hidden" aria-labelledby="stack-heading">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-20 space-y-4">
                        <motion.h2
                            id="stack-heading"
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                        >
                            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                                Tech Stack
                            </span>
                        </motion.h2>
                        <motion.p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Technologies and tools I use to bring ideas to life
                        </motion.p>
                    </motion.div>

                    {/* Tech Categories */}
                    <div className="space-y-16">
                        {Object.entries(techData).map(([category, technologies], categoryIndex) => (
                            <motion.div
                                key={category}
                                variants={itemVariants}
                                className="space-y-8"
                            >
                                <motion.div
                                    className="flex items-center gap-4 justify-center"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: categoryIndex * 0.1 }}
                                >
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                    <h3 className="text-2xl sm:text-3xl font-bold text-center text-white/90 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                                        {category}
                                    </h3>
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                </motion.div>

                                <div className={`grid gap-4 sm:gap-6 ${
                                    technologies.length <= 3
                                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
                                        : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                                }`}>
                                    {technologies.map((tech, index) => (
                                        <motion.div
                                            key={tech.name}
                                            variants={cardVariants}
                                            whileHover={{
                                                scale: 1.08,
                                                y: -8,
                                                transition: { duration: 0.2 }
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div
                                                className="group relative bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] overflow-hidden"
                                                title={tech.name}
                                            >
                                                {/* Gradient background on hover */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                                {/* Icon */}
                                                <motion.div
                                                    className="relative mb-4 text-white/90 group-hover:text-white transition-colors duration-300"
                                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    {tech.icon}
                                                </motion.div>

                                                {/* Tech Name */}
                                                <h4 className="relative text-sm sm:text-base lg:text-lg font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                                                    {tech.name}
                                                </h4>

                                                {/* Animated border glow */}
                                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} blur-xl -z-10`} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-20 text-center"
                    >
                        <motion.div
                            className="inline-block bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-8 py-6"
                            whileHover={{ scale: 1.02 }}
                        >
                            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
                                Continuously learning and exploring new technologies to stay at the forefront of software development.
                                <span className="text-blue-400 font-semibold"> Always open to mastering new tools</span> that can enhance my ability to build better solutions.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}