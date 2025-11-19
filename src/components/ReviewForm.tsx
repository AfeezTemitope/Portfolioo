import type React from "react"
import { useState } from "react"
import { motion, easeOut } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, Check, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ReviewForm() {
    const [name, setName] = useState("")
    const [review, setReview] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!name.trim() || !review.trim()) {
            setError("Please fill in both your name and review.")
            return
        }

        if (name.trim().length < 2) {
            setError("Please enter a valid name (at least 2 characters).")
            return
        }

        if (review.trim().length < 10) {
            setError("Please write a more detailed review (at least 10 characters).")
            return
        }

        setIsSubmitting(true)
        setError(null)

        const templateParams = {
            from_name: name.trim(),
            message: review.trim(),
        }

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID!,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
            )
            .then(() => {
                setIsSubmitted(true)
                setName("")
                setReview("")
                setError(null)
                setTimeout(() => {
                    setIsSubmitted(false)
                }, 5000)
            })
            .catch((err) => {
                console.error("Email sending failed:", err)
                setError("Oops! Something went wrong. Please try again or contact me directly via email.")
            })
            .finally(() => {
                setIsSubmitting(false)
            })
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: easeOut },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: easeOut },
        },
    }

    return (
        <section id="contact" className="py-24 lg:py-32 bg-gray-950 relative overflow-hidden" aria-labelledby="contact-heading">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-3xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
                        <h2 id="contact-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                                Get In Touch
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                            I'd love to hear your thoughts, feedback, or discuss potential collaborations.
                            Drop me a message and I'll get back to you as soon as possible!
                        </p>
                    </motion.div>

                    {/* Form Container */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-8 sm:p-10 shadow-2xl"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-center py-12"
                            >
                                <motion.div
                                    className="w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15,
                                        delay: 0.2
                                    }}
                                >
                                    <Check size={40} className="text-green-400" />
                                </motion.div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Thank You!</h3>
                                <p className="text-white/70 text-lg leading-relaxed">
                                    Your message has been sent successfully. I'll get back to you soon!
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <motion.div variants={itemVariants} className="space-y-3">
                                    <label htmlFor="name" className="block text-white/90 font-semibold text-lg">
                                        Your Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 focus:outline-none rounded-xl px-5 py-4 text-base transition-all duration-200"
                                        placeholder="Enter your full name"
                                        required
                                        disabled={isSubmitting}
                                        maxLength={100}
                                    />
                                </motion.div>

                                {/* Review/Message Textarea */}
                                <motion.div variants={itemVariants} className="space-y-3">
                                    <label htmlFor="review" className="block text-white/90 font-semibold text-lg">
                                        Your Message <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        id="review"
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 focus:outline-none rounded-xl px-5 py-4 min-h-[160px] resize-y text-base transition-all duration-200"
                                        placeholder="Share your thoughts, feedback, project ideas, or just say hello..."
                                        required
                                        disabled={isSubmitting}
                                        maxLength={1000}
                                    />
                                    <p className="text-white/40 text-sm text-right">
                                        {review.length}/1000 characters
                                    </p>
                                </motion.div>

                                {/* Error Message */}
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-start gap-3 text-red-400 text-sm bg-red-400/10 px-5 py-4 rounded-xl border border-red-400/20"
                                        role="alert"
                                    >
                                        <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                                        <span>{error}</span>
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                                    disabled={isSubmitting}
                                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    variants={itemVariants}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </motion.button>

                                {/* Privacy Note */}
                                <motion.p
                                    variants={itemVariants}
                                    className="text-white/50 text-sm text-center leading-relaxed"
                                >
                                    Your information is secure and will only be used to respond to your message.
                                    I respect your privacy.
                                </motion.p>
                            </form>
                        )}
                    </motion.div>

                    {/* Alternative Contact Methods */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 text-center"
                    >
                        <p className="text-white/60 mb-4">Or reach out directly via:</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.a
                                href="mailto:belloafeez28@gmail.com"
                                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white/80 hover:text-white transition-all duration-300 font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                📧 belloafeez28@gmail.com
                            </motion.a>
                            <motion.a
                                href="https://wa.me/+2349014465194"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white/80 hover:text-white transition-all duration-300 font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                💬 WhatsApp
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}