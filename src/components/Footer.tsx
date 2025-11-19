import { motion } from "framer-motion"
import { Mail, MessageCircle, Instagram, Linkedin, Github, Heart } from "lucide-react"

const TikTokIcon = ({ size = 24, color = "#fff" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width={size}
        height={size}
        fill={color}
        aria-hidden="true"
    >
        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
)

const socialLinks = [
    {
        icon: Mail,
        link: "mailto:belloafeez28@gmail.com",
        label: "Email",
        color: "hover:text-red-400",
        hoverBg: "hover:bg-red-500/10",
    },
    {
        icon: MessageCircle,
        link: "https://wa.me/+2349014465194",
        label: "WhatsApp",
        color: "hover:text-green-400",
        hoverBg: "hover:bg-green-500/10",
    },
    {
        icon: Instagram,
        link: "https://www.instagram.com/tbelzbby08?igsh=MWMydWRhcWl3Nmt0Nw%3D%3D&utm_source=qr",
        label: "Instagram",
        color: "hover:text-pink-400",
        hoverBg: "hover:bg-pink-500/10",
    },
    {
        icon: TikTokIcon,
        link: "https://www.tiktok.com/@tbelzbby2?_t=ZS-8zm6Cxr4Hzu&_r=1",
        label: "TikTok",
        color: "hover:text-gray-300",
        hoverBg: "hover:bg-gray-500/10",
    },
    {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/afeez-bello-548749275/",
        label: "LinkedIn",
        color: "hover:text-blue-400",
        hoverBg: "hover:bg-blue-500/10",
    },
    {
        icon: Github,
        link: "https://github.com/AfeezTemitope",
        label: "GitHub",
        color: "hover:text-gray-400",
        hoverBg: "hover:bg-gray-500/10",
    },
]

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
]

export default function Footer() {
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.substring(1))
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <footer className="bg-gray-950/50 border-t border-white/10 backdrop-blur-md relative overflow-hidden" role="contentinfo">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                        {/* Brand & Description */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    Bello Afeez Temitope
                                </h3>
                                <p className="text-white/70 leading-relaxed">
                                    Full-Stack Software Engineer passionate about building scalable solutions
                                    and exploring cutting-edge technologies.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-white/60">
                                <span>📍</span>
                                <span>Lagos, Nigeria</span>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h4 className="text-xl font-bold text-white">Quick Links</h4>
                            <nav className="flex flex-col space-y-3" aria-label="Footer navigation">
                                {quickLinks.map((link) => (
                                    <motion.button
                                        key={link.href}
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-white/70 hover:text-blue-400 transition-colors text-left group flex items-center gap-2"
                                        whileHover={{ x: 4 }}
                                        aria-label={`Navigate to ${link.label} section`}
                                    >
                                        <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.label}
                                    </motion.button>
                                ))}
                            </nav>
                        </motion.div>

                        {/* Connect Section */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h4 className="text-xl font-bold text-white">Let's Connect</h4>
                            <p className="text-white/70 leading-relaxed">
                                Feel free to reach out for collaborations, opportunities, or just a friendly chat!
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group relative p-3.5 bg-white/5 border border-white/10 rounded-xl text-white/70 ${social.color} ${social.hoverBg} transition-all duration-300 hover:scale-110 hover:border-white/20`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label={`Connect with Bello Afeez Temitope on ${social.label}`}
                                        >
                                            <Icon size={22} />
                                            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg">
                                                {social.label}
                                            </span>
                                        </motion.a>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        variants={itemVariants}
                        className="border-t border-white/10 pt-8"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            {/* Copyright */}
                            <motion.div
                                className="text-white/60 text-sm text-center md:text-left"
                                variants={itemVariants}
                            >
                                <p className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                                    <span>&copy; {new Date().getFullYear()} Bello Afeez Temitope.</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span>All rights reserved.</span>
                                </p>
                            </motion.div>

                            {/* Made with love */}
                            <motion.div
                                className="flex items-center gap-2 text-white/60 text-sm"
                                variants={itemVariants}
                            >
                                <span>Built with</span>
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Heart size={16} className="text-red-400 fill-red-400" />
                                </motion.div>
                                <span>using React & TypeScript</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 text-center"
                    >
                        <p className="text-white/50 text-xs leading-relaxed">
                            Constantly learning, building, and sharing knowledge with the developer community.
                            <br className="hidden sm:block" />
                            Open to exciting opportunities and collaborations.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    )
}