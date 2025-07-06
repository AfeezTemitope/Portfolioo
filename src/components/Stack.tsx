import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const techData = {
    FRONTEND: [
        { name: "JavaScript", icon: "🟨", color: "from-yellow-400 to-yellow-600" },
        { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
        { name: "HTML", icon: "🌐", color: "from-orange-400 to-orange-600" },
        { name: "CSS", icon: "🎨", color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-700" },
    ],
    BACKEND: [
        { name: "Django", icon: "🐍", color: "from-green-400 to-green-600" },
        { name: "Flask", icon: "🌶️", color: "from-red-400 to-red-600" },
        { name: "Spring Boot", icon: "🍃", color: "from-green-400 to-green-600" },
        { name: "Java", icon: "☕", color: "from-red-500 to-red-700" },
        { name: "Python", icon: "🐍", color: "from-blue-400 to-yellow-400" },
        { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    ],
    MOBILE: [{ name: "React Native", icon: "📱", color: "from-blue-400 to-purple-600" }],
    CLOUD_SERVICE: [
        { name: "Amazon Web Service", icon: "☁️", color: "from-orange-400 to-orange-600" },
        { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
        { name: "GitHub Actions", icon: "🔄", color: "from-gray-400 to-gray-600" },
    ],
    DATABASE: [
        { name: "MongoDB", icon: "🍃", color: "from-green-400 to-green-600" },
        { name: "MySQL", icon: "🐬", color: "from-blue-400 to-blue-600" },
        { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-blue-700" },
    ],
}

export default function Stack() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    }

    return (
        <section id="stack" className="py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
                    <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Tech Stack
            </span>
                    </motion.h2>

                    <div className="space-y-16">
                        {Object.entries(techData).map(([category, technologies]) => (
                            <motion.div key={category} variants={itemVariants}>
                                <h3 className="text-2xl lg:text-3xl font-semibold mb-8 text-center text-white/90 italic">
                                    {category.replace(/_/g, " ")}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
                                    {technologies.map((tech) => (
                                        <motion.div
                                            key={tech.name}
                                            variants={cardVariants}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group cursor-pointer rounded-lg p-6 flex flex-col items-center text-center">
                                                <div
                                                    className={`text-4xl mb-3 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    {tech.icon}
                                                </div>
                                                <h4 className="text-sm lg:text-base font-medium text-white group-hover:text-blue-400 transition-colors">
                                                    {tech.name}
                                                </h4>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
