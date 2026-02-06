import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import {
  Download,
  Mail,
  ArrowDown,
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react"

const IMAGE_URL =
  "https://res.cloudinary.com/dgvjxhqjd/image/upload/v1753571024/DSC06734-2_e4ykmb.jpg"
const fallback = "./Afeez.png"

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
    </svg>
  )
}

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  )
}

const socialLinks = [
  { Icon: Github, link: "https://github.com/AfeezTemitope", label: "GitHub" },
  {
    Icon: Linkedin,
    link: "https://www.linkedin.com/in/afeez-bello-548749275/",
    label: "LinkedIn",
  },
  { Icon: XIcon, link: "https://x.com/Temitop58657799", label: "X" },
  {
    Icon: Instagram,
    link: "https://www.instagram.com/tbelzbby08",
    label: "Instagram",
  },
  {
    Icon: TikTokIcon,
    link: "https://www.tiktok.com/@tbelzbby2",
    label: "TikTok",
  },
  {
    Icon: MessageCircle,
    link: "https://wa.me/+2349014465194",
    label: "WhatsApp",
  },
]

export default function Header() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [profileImage, setProfileImage] = useState("")

  useEffect(() => {
    setProfileImage(IMAGE_URL)
  }, [])

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.2 },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  }

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* IMAGE */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex-shrink-0 order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1.5 shadow-2xl">
                <img
                  src={profileImage || fallback}
                  alt="Afeez Temitope Bello"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white/90">
              Afeez Temitope
            </h1>
            <h2 className="text-2xl text-white/80">Software Engineer</h2>

            <p className="text-lg text-white/70 max-w-2xl">
              Software engineer with 4+ years experience across Web2 and Web3,
              building scalable systems using Java, Python, JavaScript, Spring
              Boot, Django, and React.
            </p>

            {/* ✅ CTA BUTTONS – FIXED */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="mailto:belloafeez28@gmail.com"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>

              <a
                href="https://docs.google.com/document/d/1EaO2I89DpHW_YfcIw5gq7O0PkZSDPbBG/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-3 pt-4 justify-center lg:justify-start">
              {socialLinks.map(({ Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-blue-500/20"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center text-white/50"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>Scroll Down</span>
          <ArrowDown />
        </motion.div>
      </div>
    </header>
  )
}
