import { useInView } from "react-intersection-observer";
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
    {
        name: "Molek CBT System",
        imageUrl: "https://www.molekschool.com/logo.webp",
        link: "https://github.com/moh-Adedamola/molek-monolithic-cbt-system",
        description: "[Production Ready] 🎓 Molek CBT – A comprehensive offline Computer-Based Testing system for Nigerian schools. Built with Electron, React, and Node.js.",
        tags: ["electron", "react", "nodejs", "sqlite3", "express", "vite", "tailwindcss", "offline-first"],
        featured: true
    },
    {
        name: "Budu Elite Football Club Blog",
        imageUrl: "https://th.bing.com/th/id/R.590fe86a56bae1b5e7aa5989b793f3b6?rik=J5N9gCc97eh1mg&pid=ImgRaw&r=0",
        link: "https://buduelite.netlify.app/",
        description: "Dynamic blog platform featuring club news, player highlights, match reports, and admin-controlled content management. Built with cloud-hosted database and optimized for SEO, currently in active testing phase.",
        tags: ["Django", "React", "Vite", "Render", "Netlify", "Cloudinary", "Redis", "Zustand", "Google SEO"],
    },
    {
        name: "Eco Warrior Africa",
        imageUrl: "https://eco-warrior-8041.onrender.com/logo.png",
        link: "https://eco-warrior-8041.onrender.com/",
        description: "[Beta Testing Phase] 🌱 Eco Warrior – A MERN-based platform for climate-conscious storytelling.",
        tags: ["node", "react", "tailwindcss", "supabase", "cloudinary", "render", "vite"]
    },
    {
        name: "Molek School Portal",
        imageUrl: "https://www.molekschool.com/logo.webp",
        link: "https://www.molekschool.com/",
        description: "Comprehensive school management system featuring online portal with offline CBT (Computer-Based Testing) exam capabilities. Includes admin interface, student registration, exam scheduling, real-time monitoring, and automatic synchronization.",
        tags: ["Python", "Django", "JavaScript", "React", "Vite", "Node.js", "Supabase", "Cloudinary", "Tailwind CSS"],
        featured: true
    },
    {
        name: "Tenderville School Portal",
        imageUrl: "https://res.cloudinary.com/dgvjxhqjd/image/upload/v1753304581/TVS_LOGOS_dlkdd4.jpg",
        link: "https://tenderville.net/",
        description: "Full-featured educational platform empowering students, staff, and parents in Lekki, Lagos. Features seamless authentication, dynamic dashboards, academic management, and real-time communication tools built with modern web technologies.",
        tags: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Supabase", "Cloudinary", "Tailwind CSS", "IndexedDB"],
    },
    {
        name: "HopeChain: Web3 Fundraising",
        imageUrl: "https://img.freepik.com/premium-vector/heart-logo_1068907-159.jpg",
        link: "https://hope-chain-2025-sui-hackerton.vercel.app/",
        description: "Decentralized fundraising platform built with Sui Move smart contracts. Ensures secure on-chain transactions while keeping user data private off-chain. Winner of SUI x Semicolon Hackathon 2025, designed for nonprofits and community empowerment.",
        tags: ["Web3", "Sui Move", "Blockchain", "React", "TypeScript", "Smart Contracts"],
        featured: true
    },
    {
        name: "First Mission NGO Portal",
        imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/002/826/640/small_2x/ngos-concept-icon-development-program-abstract-idea-thin-line-illustration-community-mobilization-environment-protection-stimulating-employment-isolated-outline-color-drawing-vector.jpg",
        link: "https://first-mission-humanitarian-aid-with-five.vercel.app",
        description: "Intuitive web platform designed for First Mission Humanitarian Aid NGO. Features donor management, campaign tracking, volunteer coordination, and impact reporting. Currently in development with production deployment pending client approval.",
        tags: ["React", "TypeScript", "Vite", "Django", "Cloudinary", "Tailwind CSS", "Render", "Vercel"],
    },
    {
        name: "Attendance Management System",
        imageUrl: "https://www.bvp-connects.com/attendance-logo.png",
        link: "https://attendanceapp-uok5.onrender.com/",
        description: "Embedded system designed to eliminate attendance fraud with built-in timer verification. Features real-time tracking, automated reporting, and secure authentication for workplace attendance management.",
        tags: ["React", "Node.js", "MongoDB", "Express", "MERN Stack"],
    },
    {
        name: "Badify Music App",
        imageUrl: "https://th.bing.com/th/id/R.9c51bbc96a108e023f49e1421af11b5b?rik=kNq8m5NVL34Mew&pid=ImgRaw&r=0",
        link: "https://badify-music-app.onrender.com/",
        description: "Flask-based music discovery application integrated with Deezer API. Features song search, preview playback, artist information, and curated playlists for an enhanced music exploration experience.",
        tags: ["Flask", "Python", "Deezer API", "Music"],
    },
    {
        name: "Movie Discovery Hub",
        imageUrl: "https://logodix.com/logo/818943.png",
        link: "https://our-fav-hub.vercel.app/",
        description: "Intuitive web application for browsing and discovering movies. Features advanced search, filtering by genre and rating, detailed movie information, and personalized recommendations.",
        tags: ["React", "TMDB API", "Entertainment", "UI/UX"],
    },
    {
        name: "Weather Intelligence App",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3845/3845731.png",
        link: "https://weather-app-frontend-tan.vercel.app/",
        description: "Real-time weather application providing current conditions, forecasts, and weather alerts for locations worldwide. Features responsive design and intuitive data visualization.",
        tags: ["Flask", "React", "OpenWeather API", "Responsive Design"],
    },
    {
        name: "Credit Card Validator",
        imageUrl: "https://th.bing.com/th/id/OIP.iBGmFz2jxm0jssqbQCyJNwHaHa?pid=ImgDet&w=474&h=474&rs=1",
        link: "https://credit-card-validator-seven.vercel.app/",
        description: "Secure validation tool implementing the Luhn algorithm to verify credit card numbers. Features instant validation feedback and support for major card networks.",
        tags: ["Python", "Flask", "Luhn Algorithm", "Security"],
    },
    {
        name: "Secure Password Generator",
        imageUrl: "https://th.bing.com/th/id/R.cc45ea6c8ba00fd6e94b2932b3a3694e?rik=sBTUA3EM4X0tyQ&pid=ImgRaw&r=0",
        link: "https://password-generator-web-seven.vercel.app/",
        description: "Advanced password generation tool creating cryptographically secure passwords. Features customizable length, character sets, and strength indicators for enhanced security.",
        tags: ["Node.js", "Security", "Cryptography", "JavaScript"],
    },
]

export function Project() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="projects" className="py-24 lg:py-32 relative overflow-hidden" aria-labelledby="projects-heading">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                {inView && (
                    <>
                        {/* Section Header */}
                        <div className="text-center mb-20 space-y-6">
                            <h2 id="projects-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                                    Featured Projects
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
                                A showcase of real-world applications spanning education, Web3, NGO management, and more.
                                Each project demonstrates my commitment to building scalable, user-centric solutions.
                            </p>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {projects.map((project, index) => (
                                <article
                                    key={index}
                                    className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                                >
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                                ⭐ Featured
                                            </span>
                                        </div>
                                    )}

                                    <div className="relative p-6 flex flex-col h-full">
                                        {/* Project Image */}
                                        <div className="relative mb-6 rounded-xl overflow-hidden bg-white/5 aspect-video">
                                            <img
                                                loading="lazy"
                                                src={project.imageUrl || "/fallback.jpg"}
                                                alt={`${project.name} - Project screenshot showcasing features and interface`}
                                                width="400"
                                                height="225"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-full">
                                                    <ExternalLink className="w-5 h-5 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Project Content */}
                                        <div className="flex-1 flex flex-col space-y-4">
                                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                                                {project.name}
                                            </h3>
                                            <p className="text-white/70 text-sm sm:text-base leading-relaxed flex-1">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-2.5 py-1 bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-blue-300 text-xs font-medium rounded-md border border-blue-500/20"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {project.tags.length > 4 && (
                                                    <span className="px-2.5 py-1 bg-white/10 text-white/60 text-xs font-medium rounded-md border border-white/20">
                                                        +{project.tags.length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                                                aria-label={`View ${project.name} project live demo`}
                                            >
                                                <span>Explore Project</span>
                                                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-20 text-center">
                            <div className="inline-block bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
                                <p className="text-white/80 text-lg mb-4">
                                    These projects represent real-world solutions deployed in production environments
                                </p>
                                <p className="text-blue-400 font-semibold">
                                    Want to collaborate? Let's build something amazing together!
                                </p>
                            </div>
                        </div>
                    </>
                )}
                {!inView && <div ref={ref} />}
            </div>
        </section>
    );
}