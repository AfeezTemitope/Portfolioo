import { motion } from "framer-motion"
import { Mail, MessageCircle, Instagram, Linkedin, Github } from "lucide-react"

const TikTokIcon = ({ size = 24, color = "#fff" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width={size}
        height={size}
        fill={color}
    >
        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
);

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
        link: "https://www.instagram.com/tbelzbby08?igsh=MWMydWRhcWl3Nmt0Nw%3D%3D&utm_source=qr",
        label: "Instagram",
        color: "hover:text-pink-400",
    },
    {
        icon: TikTokIcon,
        link: "https://www.tiktok.com/@tbelzbby2?_t=ZS-8zm6Cxr4Hzu&_r=1",
        label: "TikTok",
        color: "hover:text-black",
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
];


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
                                    className={`p-3 bg-white/10 rounded-full text-white/70 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20 relative group`} // Added 'relative group' for tooltip
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <Icon size={20} />
                                    {/* Tooltip */}
                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                        {social.label}
                                    </span>
                                </motion.a>
                            )
                        })}
                    </motion.div>
                    <motion.div variants={itemVariants} className="border-t border-white/10 pt-8 text-white/50">
                        <p className="text-sm">&copy; {new Date().getFullYear()} Bello Afeez Temitope. All rights reserved.</p>
                        {/*<p className="text-xs mt-2">Built with React, Vite, Tailwind CSS, and Framer Motion</p>*/}
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    )
}