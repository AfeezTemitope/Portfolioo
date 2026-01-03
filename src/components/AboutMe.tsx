import { motion, easeOut } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Code, Palette, Award, Briefcase } from "lucide-react"

const educationData = [
    {
        icon: Palette,
        title: "Wadyson Printing Production",
        subtitle: "Graphic Designer - CorelDraw & Visual Design",
        date: "June 2013 - May 2017",
        color: "text-pink-400",
        bgColor: "from-pink-500/20 to-pink-600/20"
    },
    {
        icon: GraduationCap,
        title: "Lagos State University",
        subtitle: "Bachelor of Technology - Project Management Technology",
        date: "December 2015 - February 2021",
        color: "text-blue-400",
        bgColor: "from-blue-500/20 to-blue-600/20"
    },
    {
        icon: Award,
        title: "National Youth Service Corps (NYSC)",
        subtitle: "Community Development & Service",
        date: "2023",
        color: "text-green-400",
        bgColor: "from-green-500/20 to-green-600/20"
    },
    {
        icon: Code,
        title: "Semicolon Africa",
        subtitle: "Software Engineering Diploma",
        date: "February 2024 - February 2025",
        color: "text-purple-400",
        bgColor: "from-purple-500/20 to-purple-600/20"
    },
    {
        icon: Briefcase,
        title: "Henley Business School, University of Reading",
        subtitle: "Business Management & Entrepreneurship (Awaiting Certification)",
        date: "2025",
        color: "text-yellow-400",
        bgColor: "from-yellow-500/20 to-yellow-600/20"
    },
]

export default function AboutMe() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: easeOut },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: easeOut },
        },
    }

    return (
        <section id="about" className="py-24 lg:py-32 relative overflow-hidden" aria-labelledby="about-heading">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-5xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
                        <motion.h2
                            id="about-heading"
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                        >
                            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                                About Me
                            </span>
                        </motion.h2>
                        <motion.p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Software engineer, problem solver, and continuous learner
                        </motion.p>
                    </motion.div>

                    {/* Introduction Paragraphs */}
                    <motion.div variants={itemVariants} className="space-y-6 text-base sm:text-lg leading-relaxed text-white/80 mb-20">
                        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                            <p className="text-white/90 leading-relaxed">
                                I'm <span className="text-blue-400 font-semibold">Afeez Temitope Bello</span>—known in the tech
                                community as <span className="text-purple-400 font-semibold">BadAfeez😄</span>. I'm a
                                software engineer with <span className="font-semibold text-white">3+ years of experience</span> turning
                                complex challenges into elegant solutions. My journey began with a simple question: "How do apps actually work?"
                                That curiosity has evolved into expertise across the full stack—from crafting intuitive frontends with
                                <span className="text-blue-400 font-medium"> React.js</span> and
                                <span className="text-blue-400 font-medium"> Next.js</span> to building robust backends with
                                <span className="text-green-400 font-medium"> Django</span>,
                                <span className="text-green-400 font-medium"> Spring Boot</span>, and
                                <span className="text-green-400 font-medium"> Node.js</span>.
                            </p>

                            <p className="text-white/90 leading-relaxed">
                                In 2025, I dove into the blockchain ecosystem and participated in the
                                <span className="text-purple-400 font-semibold"> SUI x Semicolon Hackathon</span>, where I worked with smart minds and  built
                                <span className="text-blue-400 font-semibold"> HopeChain</span>—a decentralized fundraising platform
                                powered by Sui Move smart contracts. This project demonstrates my ability to architect hybrid systems that
                                store sensitive data off-chain for privacy while leveraging blockchain for transparent, immutable transactions.
                                Experience it live at{" "}
                                <a
                                    href="https://hope-chain-2025-sui-hackerton.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors font-medium"
                                >
                                    HopeChain
                                </a>.
                            </p>

                            <p className="text-white/90 leading-relaxed">
                                My technical arsenal includes modern deployment tools like
                                <span className="text-blue-400 font-medium"> Docker</span>,
                                <span className="text-orange-400 font-medium"> AWS</span>, and
                                <span className="text-teal-400 font-medium"> Supabase</span>, coupled with testing frameworks like
                                <span className="font-medium"> JUnit</span>,
                                <span className="font-medium"> Pytest</span>, and
                                <span className="font-medium"> Jest</span>. I thrive in Agile environments, value continuous learning,
                                and am driven by building solutions that make a real impact on people's lives.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education & Experience Timeline */}
                    <motion.section
                        variants={itemVariants}
                        aria-labelledby="education-heading"
                        className="mb-20"
                    >
                        <motion.h3
                            id="education-heading"
                            variants={itemVariants}
                            className="text-3xl lg:text-4xl font-bold mb-12 text-center"
                        >
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                🎓 Education & Experience
                            </span>
                        </motion.h3>

                        <div className="space-y-6">
                            {educationData.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.article
                                        key={index}
                                        variants={cardVariants}
                                        className="group relative"
                                        whileHover={{ x: 8 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                                            {/* Gradient background on hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-r ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                            <div className="relative flex items-start gap-6">
                                                <motion.div
                                                    className={`${item.color} bg-white/10 p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0`}
                                                    whileHover={{ rotate: 12 }}
                                                >
                                                    <Icon size={28} aria-hidden="true" />
                                                </motion.div>

                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-white/80 mb-3 text-base sm:text-lg leading-relaxed">
                                                        {item.subtitle}
                                                    </p>
                                                    <time className="text-sm sm:text-base text-white/60 font-medium inline-flex items-center gap-2">
                                                        <span className={`w-2 h-2 rounded-full ${item.color.replace('text', 'bg')}`} />
                                                        {item.date}
                                                    </time>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.article>
                                )
                            })}
                        </div>
                    </motion.section>

                    {/* Additional Skills & Interests */}
                    <motion.section
                        variants={itemVariants}
                        aria-labelledby="skills-heading"
                        className="space-y-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10"
                        >
                            <h3 id="skills-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-3xl">🛠️</span>
                                Additional Skills & Expertise
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                <motion.div
                                    className="space-y-3"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h4 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full" />
                                        Design & Creativity
                                    </h4>
                                    <p className="text-white/70 leading-relaxed">
                                        Professional graphic design experience with Adobe Photoshop, CorelDRAW, and Canva.
                                        Skilled in creating visual assets, branding materials, and print production graphics.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="space-y-3"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h4 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full" />
                                        Web3 & Blockchain
                                    </h4>
                                    <p className="text-white/70 leading-relaxed">
                                        Experienced in building decentralized applications (dApps) with Sui Move language,
                                        smart contract development, and hybrid on-chain/off-chain architecture design.
                                    </p>
                                </motion.div>
                            </div>

                            <motion.div
                                className="pt-6 border-t border-white/10"
                                variants={itemVariants}
                            >
                                <p className="text-white/80 leading-relaxed text-lg">
                                    <span className="text-2xl mr-2">⚽</span>
                                    When I'm not coding, you'll find me on the football field, exploring emerging tech trends,
                                    or building side projects that solve real-world problems. I'm passionate about collaboration
                                    and always excited to connect with fellow developers and innovators.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            variants={itemVariants}
                            className="text-center pt-8"
                        >
                            <motion.p
                                className="text-xl text-white/90 font-medium mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                Let's build something amazing together! 🚀
                            </motion.p>
                        </motion.div>
                    </motion.section>
                </motion.div>
            </div>
        </section>
    )
}