import type React from "react"
import { useState } from "react"
import { motion, easeOut } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, Check } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ReviewForm() {
    const [name, setName] = useState("")
    const [review, setReview] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!name || !review) {
            setError("Please fill in both name and review.")
            return
        }

        const templateParams = {
            from_name: name,
            message: review,
        }
        console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID!)
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID!,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
            )
            .then(() => {
                setIsSubmitted(true)
                setName("")
                setReview("")
                setError(null)
                setTimeout(() => setIsSubmitted(false), 3000)
            })
            .catch((err) => {
                console.error("Email sending failed:", err)
                setError("Oops! Something went wrong.")
            })
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeOut },
        },
    }

    return (
        <section id="contact" className="py-20 lg:py-32 bg-white/5">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-2xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Leave a Review
              </span>
                        </h2>
                        <p className="text-white/70 text-lg">
                            I'd love to hear your thoughts and feedback
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-8">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check size={32} className="text-green-400" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Thank you!</h3>
                                <p className="text-white/70">
                                    Your review has been sent successfully.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-white/90 font-medium">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none rounded-lg px-4 py-3 transition-all duration-200"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="review" className="block text-white/90 font-medium">
                                        Your Review
                                    </label>
                                    <textarea
                                        id="review"
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none rounded-lg px-4 py-3 min-h-[120px] resize-none transition-all duration-200"
                                        placeholder="Share your thoughts, feedback, or experience..."
                                        required
                                    />
                                </div>

                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm bg-red-400/10 px-4 py-2 rounded-lg"
                                    >
                                        {error}
                                    </motion.p>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 group"
                                >
                                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                    Send Review
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
