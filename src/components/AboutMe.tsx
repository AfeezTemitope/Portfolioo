import { motion, easeOut } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Code, Palette, Award, Briefcase, Building2 } from "lucide-react"

const experienceData = [
    {
        icon: Briefcase,
        title: "Freelance Full-Stack Software Engineer",
        subtitle: "Building scalable web applications across education, e-commerce, Web3, and NGO sectors",
        date: "July 2025 - Present",
        location: "Lagos, Nigeria",
        color: "text-blue-400",
        bgColor: "from-blue-500/20 to-blue-600/20",
        highlights: [
            // MOLEK School Portal (Full-Stack)
            "Architected MOLEK School Management System: Django REST API backend + React admin dashboard + React student portal, serving 1000+ students with 99.9% uptime",
            "Implemented complete Nigerian grading system (CA1/CA2/OBJ/Theory = 100 marks) with automated grade calculation, class position ranking, and cumulative report card generation",
            "Designed 15+ interconnected Django models with Redis caching reducing database query load by 60%",
            
            // MOLEK CBT System (Full-Stack)
            "Built offline-first CBT system using Electron + React frontend and Node.js/Express backend with SQLite persistence, handling 50+ concurrent exam sessions",
            "Developed anti-cheat detection (tab switching, window blur tracking), server-side timer verification, and audit logging for exam integrity",
            "Created seamless CBT-to-Django data pipeline for automated OBJ score integration across the school ecosystem",
            
            // TENDERVILE School Portal
            "Developed TENDERVILE School Portal with Node.js/Express backend, React frontend, and MongoDB - featuring student enrollment, attendance tracking, and parent communication modules",
            
            // NGO & Content Platforms
            "Built First Mission NGO platform (donor management, campaign tracking) and Eco Warrior Africa (climate storytelling with Cloudinary media integration)",
            
            // Budu Elite
            "Created Budu Elite FC blog platform with Django REST backend, React frontend, Redis caching, and SEO optimization"
        ]
    },
    {
        icon: Building2,
        title: "Python Backend Engineer",
        subtitle: "Meerge Africa",
        date: "May 2025 - July 2025",
        location: "Lagos, Nigeria",
        color: "text-green-400",
        bgColor: "from-green-500/20 to-green-600/20",
        highlights: [
            "Developed complete user management and payment platform for e-commerce food delivery application using Django REST Framework",
            "Integrated Paystack API for payment processing with webhook handling for real-time transaction updates",
            "Configured Redis caching reducing API response latency by 40%",
            "Implemented Twilio OTP verification for secure user authentication"
        ]
    },
    {
        icon: Code,
        title: "Blockchain Developer",
        subtitle: "SUI x SEMICOLON Hackathon",
        date: "June 2025",
        location: "Lagos, Nigeria",
        color: "text-purple-400",
        bgColor: "from-purple-500/20 to-purple-600/20",
        highlights: [
            "Built HopeChain - decentralized fundraising dApp using Sui Move smart contracts with React frontend",
            "Architected hybrid off-chain/on-chain system: PostgreSQL for sensitive user data, Sui blockchain for transparent donations",
            "Implemented wallet-based authentication bridging Web2 and Web3 user experiences",
            "Winner of SUI x Semicolon Hackathon 2025"
        ]
    },
    {
        icon: Code,
        title: "Software Engineer",
        subtitle: "Semicolon Africa",
        date: "February 2024 - April 2025",
        location: "Lagos, Nigeria",
        color: "text-yellow-400",
        bgColor: "from-yellow-500/20 to-yellow-600/20",
        highlights: [
            "Developed multiple full-stack applications using React.js, Django, and Node.js with responsive design principles",
            "Built fitness tracking application with React frontend and Django REST backend",
            "Created football club blog platform using MERN stack (MongoDB, Express, React, Node.js)",
            "Deployed applications using Docker containers and CI/CD pipelines on AWS",
            "Achieved 85% test coverage using Jest, Pytest, and JUnit across projects"
        ]
    },
    {
        icon: Palette,
        title: "Graphic Designer",
        subtitle: "WADYSON PRINTING PRODUCTION NIGERIA ENTERPRISE",
        date: "June 2013 - May 2017",
        location: "Lagos, Nigeria",
        color: "text-pink-400",
        bgColor: "from-pink-500/20 to-pink-600/20",
        highlights: [
            "Designed visual assets, branding materials, and creative graphics for print production",
            "Utilized Photoshop, Corel Draw, and other design tools for professional print production"
        ]
    }
]

const educationData = [
    {
        icon: Code,
        title: "Semicolon Africa",
        subtitle: "Diploma in Software Engineering",
        date: "February 2024 - February 2025",
        location: "Sabo Yaba, Lagos, Nigeria",
        color: "text-purple-400",
        bgColor: "from-purple-500/20 to-purple-600/20"
    },
    {
        icon: Briefcase,
        title: "Henley Business School, University of Reading",
        subtitle: "Business Management & Entrepreneurship Module (Awaiting Certification)",
        date: "2025",
        location: "United Kingdom",
        color: "text-yellow-400",
        bgColor: "from-yellow-500/20 to-yellow-600/20"
    },
    {
        icon: GraduationCap,
        title: "Lagos State University",
        subtitle: "Bachelor of Technology (B.Tech.) - Project Management Technology",
        date: "December 2015 - February 2021",
        location: "Lagos, Nigeria",
        color: "text-blue-400",
        bgColor: "from-blue-500/20 to-blue-600/20"
    },
    {
        icon: Award,
        title: "National Youth Service Corps (NYSC)",
        subtitle: "Community Development & Service",
        date: "2023",
        location: "Nigeria",
        color: "text-green-400",
        bgColor: "from-green-500/20 to-green-600/20"
    }
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
                            Software engineer with 4+ years of experience building scalable applications
                        </motion.p>
                    </motion.div>

                    {/* Professional Summary */}
                    <motion.div variants={itemVariants} className="space-y-6 text-base sm:text-lg leading-relaxed text-white/80 mb-20">
                        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                            <p className="text-white/90 leading-relaxed">
                                I'm <span className="text-blue-400 font-semibold">Afeez Temitope Bello</span>, a software engineer with 
                                <span className="font-semibold text-white"> 4+ years of experience</span> designing and maintaining scalable 
                                applications across Web2 and Web3 environments. I work with <span className="text-blue-400 font-medium">Java</span>, 
                                <span className="text-green-400 font-medium"> Python</span>, and 
                                <span className="text-yellow-400 font-medium"> JavaScript</span>, building solutions with frameworks like 
                                <span className="text-green-400 font-medium"> Spring Boot</span>, 
                                <span className="text-green-400 font-medium"> Django</span>, 
                                <span className="text-blue-400 font-medium"> React.js</span>, and 
                                <span className="text-green-400 font-medium"> Node.js</span>.
                            </p>

                            <p className="text-white/90 leading-relaxed">
                                Recently, I explored decentralized architectures using <span className="text-purple-400 font-semibold">Sui Move</span> and 
                                the Sui blockchain, building <span className="text-blue-400 font-semibold">HopeChain</span>—a decentralized fundraising 
                                platform that manages user data off-chain and executes transactions on-chain. This project won the 
                                <span className="text-purple-400 font-semibold"> SUI x Semicolon Hackathon 2025</span>.
                            </p>

                            <p className="text-white/90 leading-relaxed">
                                My work focuses on building performance-optimized solutions and ensuring application maintainability and scalability. 
                                I'm skilled at working with cross-functional teams in Agile environments, deploying applications using 
                                <span className="font-medium"> Docker</span>, <span className="font-medium">AWS</span>, and CI/CD pipelines. 
                                I also have experience with databases like <span className="font-medium">PostgreSQL</span>, 
                                <span className="font-medium"> MongoDB</span>, and <span className="font-medium">MySQL</span>, along with 
                                testing frameworks including <span className="font-medium">JUnit</span>, 
                                <span className="font-medium"> Pytest</span>, and <span className="font-medium">Jest</span>.
                            </p>
                        </div>
                    </motion.div>

                    {/* Professional Experience */}
                    <motion.section
                        variants={itemVariants}
                        aria-labelledby="experience-heading"
                        className="mb-20"
                    >
                        <motion.h3
                            id="experience-heading"
                            variants={itemVariants}
                            className="text-3xl lg:text-4xl font-bold mb-12 text-center"
                        >
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                💼 Professional Experience
                            </span>
                        </motion.h3>

                        <div className="space-y-6">
                            {experienceData.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.article
                                        key={index}
                                        variants={cardVariants}
                                        className="group relative"
                                    >
                                        <div className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                                            <div className={`absolute inset-0 bg-gradient-to-r ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                            <div className="relative">
                                                <div className="flex items-start gap-6 mb-4">
                                                    <motion.div
                                                        className={`${item.color} bg-white/10 p-4 rounded-xl flex-shrink-0`}
                                                    >
                                                        <Icon size={28} aria-hidden="true" />
                                                    </motion.div>

                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-white/80 mb-2 text-base sm:text-lg">
                                                            {item.subtitle}
                                                        </p>
                                                        <div className="flex flex-wrap gap-4 text-sm text-white/60">
                                                            <time className="flex items-center gap-2">
                                                                <span className={`w-2 h-2 rounded-full ${item.color.replace('text', 'bg')}`} />
                                                                {item.date}
                                                            </time>
                                                            <span className="text-white/40">•</span>
                                                            <span>{item.location}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {item.highlights && (
                                                    <ul className="space-y-2 ml-[76px] text-white/70">
                                                        {item.highlights.map((highlight, idx) => (
                                                            <li key={idx} className="flex items-start gap-3">
                                                                <span className="text-blue-400 mt-1.5 flex-shrink-0">•</span>
                                                                <span className="leading-relaxed">{highlight}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </motion.article>
                                )
                            })}
                        </div>
                    </motion.section>

                    {/* Education */}
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
                                🎓 Education
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
                                    >
                                        <div className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                                            <div className={`absolute inset-0 bg-gradient-to-r ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                            <div className="relative flex items-start gap-6">
                                                <motion.div
                                                    className={`${item.color} bg-white/10 p-4 rounded-xl flex-shrink-0`}
                                                >
                                                    <Icon size={28} aria-hidden="true" />
                                                </motion.div>

                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-white/80 mb-3 text-base sm:text-lg leading-relaxed">
                                                        {item.subtitle}
                                                    </p>
                                                    <div className="flex flex-wrap gap-4 text-sm text-white/60">
                                                        <time className="flex items-center gap-2">
                                                            <span className={`w-2 h-2 rounded-full ${item.color.replace('text', 'bg')}`} />
                                                            {item.date}
                                                        </time>
                                                        <span className="text-white/40">•</span>
                                                        <span>{item.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.article>
                                )
                            })}
                        </div>
                    </motion.section>

                    {/* Skills & Expertise */}
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
                                <motion.div className="space-y-3">
                                    <h4 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full" />
                                        Design & Creativity
                                    </h4>
                                    <p className="text-white/70 leading-relaxed">
                                        Professional graphic design experience with Adobe Photoshop, CorelDRAW, and Canva.
                                        Skilled in creating visual assets, branding materials, and print production graphics.
                                    </p>
                                </motion.div>

                                <motion.div className="space-y-3">
                                    <h4 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full" />
                                        Web3 & Blockchain
                                    </h4>
                                    <p className="text-white/70 leading-relaxed">
                                        Experience building decentralized applications (dApps) with Sui Move language,
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
                                    or building side projects that solve real-world problems.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.section>
                </motion.div>
            </div>
        </section>
    )
}