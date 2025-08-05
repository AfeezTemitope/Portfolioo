import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Download, Mail } from "lucide-react";

const IMAGE_URL =
    "https://res.cloudinary.com/dgvjxhqjd/image/upload/v1753571024/DSC06734-2_e4ykmb.jpg";

export default function Header() {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
    const [profileImage, setProfileImage] = useState("");

    // Store image URL in localStorage if not already set
    useEffect(() => {
        const cached = localStorage.getItem("profileImage");
        if (!cached) {
            localStorage.setItem("profileImage", IMAGE_URL);
            setProfileImage(IMAGE_URL);
        } else {
            setProfileImage(cached);
        }
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
                >
                    {/* Profile Image */}
                    <motion.div variants={imageVariants} className="flex-shrink-0 order-1 lg:order-2">
                        <div className="relative">
                            <div className="w-60 h-60 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    loading="lazy"
                                    className="w-full h-full object-contain rounded-2xl"
                                />
                            </div>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse"></div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left order-2 lg:order-1">
                        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BELLO AFEEZ
              </span>
                            <br />
                            <span className="text-2xl md:text-3xl lg:text-4xl text-white/90">TEMITOPE</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
                            I'm a full-stack software engineer driven by results. I prioritize expertise to maximize my skillset.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                                onClick={() => window.open("mailto:belloafeez28@gmail.com")}
                            >
                                <Mail className="w-5 h-5" />
                                Contact Me
                            </button>
                            <button
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                                onClick={() => window.open("/resume.pdf")}
                            >
                                <Download className="w-5 h-5" />
                                Resume
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
