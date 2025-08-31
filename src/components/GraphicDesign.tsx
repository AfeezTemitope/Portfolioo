import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface DesignProject {
    id: number;
    title: string;
    image: string;
    category: string;
    clientReview: {
        text?: string;
        image?: string;
        author: string;
        company: string;
        rating: number;
    };
}

const projects: DesignProject[] = [
    {
        id: 1,
        title: "Coffee Shop Event Flier",
        image: "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/eflier-coffee.jpg",
        category: "Event Design",
        clientReview: {
            text: "Absolutely stunning design! The flier perfectly captured our coffee shop's vibe and increased event attendance by 200%. The design team exceeded our expectations.",
            author: "Sarah Johnson",
            company: "Brew & Bean Café",
            rating: 5
        }
    },
    {
        id: 2,
        title: "Business Conference Flier",
        image: "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/eflier-conference.jpg",
        category: "Corporate Design",
        clientReview: {
            text: "Professional, clean, and impactful. This design helped us attract high-profile speakers and attendees. The branding consistency was excellent throughout.",
            author: "Michael Chen",
            company: "TechForum Events",
            rating: 5
        }
    },
    {
        id: 3,
        title: "Music Festival Flier",
        image: "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/eflier-festival.jpg",
        category: "Entertainment Design",
        clientReview: {
            text: "The creative energy in this design is incredible! It perfectly represents our festival's atmosphere and helped us sell out all tickets in record time.",
            author: "Alex Rivera",
            company: "SoundWave Festival",
            rating: 5
        }
    }
];

export default function GraphicDesignCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const currentProject = projects[currentIndex];

    return (
        <div id={'graphics'} className="w-full max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Graphic Design Portfolio
                </h2>
                <p className="text-gray-300">Showcasing creative e-fliers with client testimonials</p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-lg shadow-xl backdrop-blur-sm">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* E-flier Image */}
                        <div className="relative aspect-[4/5] lg:aspect-auto">
                            <img
                                src={currentProject.image}
                                alt={currentProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                            {/* Project Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                                    <span className="text-sm font-medium text-blue-400">{currentProject.category}</span>
                                    <h3 className="text-xl font-bold mt-1">{currentProject.title}</h3>
                                </div>
                            </div>
                        </div>

                        {/* Client Review */}
                        <div className="p-8 flex flex-col justify-center">
                            <div className="mb-6">
                                <Quote className="h-8 w-8 text-blue-400 mb-4" />

                                {/* Review Text */}
                                {currentProject.clientReview.image ? (
                                    <div className="mb-6">
                                        <img
                                            src={currentProject.clientReview.image}
                                            alt={`Review from ${currentProject.clientReview.author}`}
                                            className="w-full rounded-lg shadow-lg"
                                        />
                                    </div>
                                ) : (
                                    <blockquote className="text-lg leading-relaxed text-white mb-6">
                                        "{currentProject.clientReview.text}"
                                    </blockquote>
                                )}

                                {/* Star Rating */}
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${
                                                i < currentProject.clientReview.rating
                                                    ? 'fill-blue-400 text-blue-400'
                                                    : 'text-gray-400'
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Author Info */}
                                <div className="border-l-4 border-blue-400 pl-4">
                                    <p className="font-semibold text-white">{currentProject.clientReview.author}</p>
                                    <p className="text-sm text-gray-300">{currentProject.clientReview.company}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 border border-white/20 text-white hover:bg-black/80 backdrop-blur-sm rounded-lg p-2 transition-all duration-200"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 border border-white/20 text-white hover:bg-black/80 backdrop-blur-sm rounded-lg p-2 transition-all duration-200"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'bg-blue-400 scale-125 shadow-lg shadow-blue-400/50'
                                    : 'bg-gray-600 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>

                {/* Slide Counter */}
                <div className="text-center mt-4">
          <span className="text-sm text-gray-400">
            {currentIndex + 1} / {projects.length}
          </span>
                </div>
            </div>
        </div>
    );
}