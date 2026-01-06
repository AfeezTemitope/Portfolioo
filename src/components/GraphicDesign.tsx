import { useState } from 'react';
import { ChevronLeft, ChevronRight, Palette, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

interface DesignWork {
    id: number;
    title: string;
    company: string;
    description: string;
    category: string;
    year: string;
    tools: string[];
    // Placeholder for design images - you can replace these with your actual work
    image: string;
}

const designWorks: DesignWork[] = [
    {
        id: 1,
        title: "Corporate Branding Package",
        company: "WADYSON PRINTING PRODUCTION",
        description: "Complete branding materials including business cards, letterheads, and promotional flyers for corporate clients.",
        category: "Brand Identity",
        year: "2013-2017",
        tools: ["CorelDRAW", "Adobe Photoshop"],
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Event Promotional Materials",
        company: "WADYSON PRINTING PRODUCTION",
        description: "Designed eye-catching event flyers, posters, and banners for various clients, ensuring high-quality print production.",
        category: "Event Design",
        year: "2013-2017",
        tools: ["CorelDRAW", "Adobe Photoshop"],
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Product Packaging Design",
        company: "WADYSON PRINTING PRODUCTION",
        description: "Created professional packaging designs for various products, focusing on visual appeal and print production requirements.",
        category: "Packaging Design",
        year: "2013-2017",
        tools: ["CorelDRAW", "Adobe Photoshop"],
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Marketing Collateral",
        company: "WADYSON PRINTING PRODUCTION",
        description: "Developed comprehensive marketing materials including brochures, catalogs, and promotional content for print production.",
        category: "Print Design",
        year: "2013-2017",
        tools: ["CorelDRAW", "Adobe Photoshop", "Canva"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop"
    }
];

export default function GraphicDesign() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % designWorks.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + designWorks.length) % designWorks.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const currentWork = designWorks[currentIndex];

    return (
        <section id="graphics" className="py-24 lg:py-32 bg-gray-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Graphic Design Portfolio
                        </span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Professional design work from my experience at WADYSON PRINTING PRODUCTION
                    </p>
                </motion.div>

                {/* Company Info Card */}
                <motion.div 
                    className="max-w-4xl mx-auto mb-12 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex items-start gap-6">
                        <div className="bg-pink-500/20 p-4 rounded-xl">
                            <Briefcase size={32} className="text-pink-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">WADYSON PRINTING PRODUCTION NIGERIA ENTERPRISE</h3>
                            <p className="text-white/70 mb-2">Graphic Designer</p>
                            <p className="text-white/60 text-sm mb-4">June 2013 - May 2017 | Lagos, Nigeria</p>
                            <p className="text-white/80 leading-relaxed">
                                Worked on designing visual assets, branding materials, and creative graphics for print production. 
                                Developed strong attention to detail and design skills using professional tools like Photoshop and CorelDRAW.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Design Carousel */}
                <motion.div 
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Design Preview */}
                            <div className="relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-pink-500/10 to-purple-500/10">
                                <img
                                    src={currentWork.image}
                                    alt={currentWork.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                
                                {/* Category Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold">
                                        {currentWork.category}
                                    </span>
                                </div>
                            </div>

                            {/* Design Details */}
                            <div className="p-8 lg:p-10 flex flex-col justify-center">
                                <div className="mb-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Palette className="text-pink-400" size={24} />
                                        <span className="text-pink-400 font-semibold">{currentWork.year}</span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                                        {currentWork.title}
                                    </h3>

                                    <p className="text-blue-400 font-semibold mb-4 text-lg">
                                        {currentWork.company}
                                    </p>

                                    <p className="text-white/70 leading-relaxed mb-6">
                                        {currentWork.description}
                                    </p>

                                    {/* Tools Used */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-white/60 mb-3">Tools & Software</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {currentWork.tools.map((tool, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border border-white/20 text-white backdrop-blur-sm rounded-xl p-3 transition-all duration-200 z-10"
                            aria-label="Previous design"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border border-white/20 text-white backdrop-blur-sm rounded-xl p-3 transition-all duration-200 z-10"
                            aria-label="Next design"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {designWorks.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex
                                        ? 'w-8 h-3 bg-gradient-to-r from-pink-400 to-purple-400'
                                        : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                                }`}
                                aria-label={`Go to design ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Counter */}
                    <div className="text-center mt-6">
                        <span className="text-white/60 text-sm">
                            {currentIndex + 1} / {designWorks.length}
                        </span>
                    </div>
                </motion.div>

                {/* Note about designs */}
                <motion.div 
                    className="max-w-3xl mx-auto mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                        <p className="text-white/70 text-sm leading-relaxed">
                            <span className="text-pink-400 font-semibold">Note:</span> These showcase examples represent the type of work 
                            completed during my time at WADYSON PRINTING PRODUCTION. Actual client work remains confidential.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}