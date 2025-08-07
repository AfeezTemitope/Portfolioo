import { motion, easeOut } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Code, Palette, Award } from "lucide-react"

const educationData = [
    {
        icon: Palette,
        title: "Wadyson Printing Production",
        subtitle: "Corel Draw & Graphic Design",
        date: "2013 - 2017",
        color: "text-pink-400",
    },
    {
        icon: GraduationCap,
        title: "Lagos State University",
        subtitle: "Bachelor of Science & Technology",
        date: "2015 - 2021",
        color: "text-blue-400",
    },
    {
        icon: Award,
        title: "National Youth Service Corps (NYSC)",
        subtitle: "Community Development & Service",
        date: "2023",
        color: "text-green-400",
    },
    {
        icon: Code,
        title: "Semicolon Africa",
        subtitle: "Software Engineering Diploma",
        date: "2024 - 2025",
        color: "text-purple-400",
    },
    {
        icon: GraduationCap,
        title: "Henley Business School, UK",
        subtitle: "Business Management & Entrepreneurship",
        date: "2025",
        color: "text-yellow-400",
    },
]

export default function AboutMe() {
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
                ease: easeOut,
            },
        },
    }

    return (
        <section id="about" className="py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-center mb-12">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">tbelzbby</span>
                    </motion.h2>

                    <motion.div variants={itemVariants} className="space-y-6 text-lg text-white/80 mb-16">
                        <p>
                            I’m <span className="text-blue-400 font-semibold">Bello Afeez Temitope</span>—but my tech friends call me BadAfeez. I’m a curious, caffeine-fueled software engineer who loves turning wild ideas into working code. My tech journey kicked off with a simple question: “How do apps even work?” Fast-forward a few years, and now I’m building full-stack magic with Java, Python, JavaScript, and frameworks like Spring Boot, Django, and React.
                        </p>

                        <p>
                            In 2025, I dove into the blockchain rabbit hole and joined the SUI x Semicolon Hackathon. That’s where <span className="text-blue-400 font-semibold">HopeChain</span> was born—a decentralized fundraising platform powered by <em>Sui Move</em> smart contracts. It’s all about secure transactions and private giving. Wanna see it in action? Check out{" "}
                            <a
                                href="https://hope-chain-2025-sui-hackerton.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline transition-colors"
                            >
                                HopeChain
                            </a>
                            .
                        </p>

                        <p>
                            My toolkit includes Docker, AWS, TailwindCSS, JUnit, Pytest, and a sprinkle of CI/CD magic. I’m big on teamwork, continuous learning, and building stuff that actually helps people.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl lg:text-3xl font-semibold mb-8 text-center">🎓 Education</h3>
                        <div className="grid gap-6 md:gap-8">
                            {educationData.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.div key={index} variants={itemVariants} className="relative">
                                        <div className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group rounded-lg p-6">
                                            <div className="flex items-start gap-4">
                                                <div className={`${item.color} bg-white/10 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                                                    <Icon size={24} />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                                                    <p className="text-white/70 mb-2">{item.subtitle}</p>
                                                    <p className="text-sm text-white/50">{item.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-16 space-y-6 text-lg text-white/80">
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-4">🛠️ Other cool stuff I do:</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Graphic Design (Photoshop, Corel Draw, Canva)</li>
                                <li>Decentralized Apps (Web3, Sui Move Language)</li>
                            </ul>
                        </div>

                        <p>
                            When I’m not coding, you’ll find me chasing footballs, exploring new tech trends, or tinkering with side projects that make the world a little better. Let’s build something awesome together.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
