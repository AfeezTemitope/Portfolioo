import { motion } from "framer-motion"
import { Mail, MessageCircle, Instagram, Linkedin, Github } from "lucide-react"

const socialLinks = [
    {
        icon: Mail,
        link: "mailto:belloafeez28@gmail.com",
        label: "Email",
        color: "hover:text-red-400",
    },
    {
        icon: MessageCircle,
        link: "https://wa.me/+2349014465194",
        label: "WhatsApp",
        color: "hover:text-green-400",
    },
    {
        icon: Instagram,
        link: "https://www.instagram.com/boyalone_01?igsh=MWgwNTZlODI1d3k5NQ%3D%3D&utm_source=qr",
        label: "Instagram",
        color: "hover:text-pink-400",
    },
    {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/afeez-bello-548749275/",
        label: "LinkedIn",
        color: "hover:text-blue-400",
    },
    {
        icon: Github,
        link: "https://github.com/AfeezTemitope",
        label: "GitHub",
        color: "hover:text-gray-400",
    },
]

export default function Footer() {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
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
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            },
        },
    }

    return (
        <footer className="bg-gray-950 border-t border-white/10 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.div variants={itemVariants} className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
                        <p className="text-white/70">Feel free to reach out for collaborations or just a friendly chat</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-8">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon
                            return (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 bg-white/10 rounded-full text-white/70 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            )
                        })}
                    </motion.div>

                    {/*<motion.div variants={itemVariants} className="border-t border-white/10 pt-8 text-white/50">*/}
                    {/*    <p className="text-sm">&copy; {new Date().getFullYear()} Bello Afeez Temitope. All rights reserved.</p>*/}
                    {/*    <p className="text-xs mt-2">Built with React, Vite, Tailwind CSS, and Framer Motion</p>*/}
                    {/*</motion.div>*/}
                </motion.div>
            </div>
        </footer>
    )
}
