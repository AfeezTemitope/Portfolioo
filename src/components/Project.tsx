import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ExternalLink, Database, Server, X } from "lucide-react";

const projects = [
  {
    name: "MOLEK School Management System",
    link: "https://molekschool.com",
    imageUrl: "/molek-admin.webp",
    description:
      "Production 4-application school platform serving a Nigerian secondary school. Django REST API backend (40+ endpoints, 15+ models), React admin dashboard with unified CSV score upload and results manager (admin.molekschool.com), React student portal with report card downloads matching physical recording sheet format, and offline Electron CBT desktop app with anti-cheat and SQLite. Nigerian grading system with automated scoring, cumulative reports, bulk CSV pipeline, and dual-portal JWT auth. Optimized cumulative queries from 2,100 to 3 (700x faster). Automated daily PostgreSQL backups via GitHub Actions.",
    tags: ["Django", "React", "PostgreSQL", "Redis", "Electron", "SQLite", "Railway", "Vercel"],
    icon: Database,
    backendRole: "Full-Stack — Solo Engineer",
    featured: true,
  },
  {
    name: "Budu Elite Football Club Blog",
    imageUrl: "https://th.bing.com/th/id/R.590fe86a56bae1b5e7aa5989b793f3b6?rik=J5N9gCc97eh1mg&pid=ImgRaw&r=0",
    link: "https://buduelite.netlify.app/",
    description:
      "Dynamic blog platform featuring club news, player highlights, match reports, and admin-controlled content management. Built with cloud-hosted database and optimized for SEO, currently in active testing phase.",
    tags: ["Django", "React", "Vite", "Render", "Netlify", "Cloudinary", "Redis", "Zustand", "Google SEO"],
  },
  {
    name: "First Mission NGO Portal",
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/002/826/640/small_2x/ngos-concept-icon-development-program-abstract-idea-thin-line-illustration-community-mobilization-environment-protection-stimulating-employment-isolated-outline-color-drawing-vector.jpg",
    link: "https://www.firstmission-ng.org",
    description:
      "Intuitive web platform designed for First Mission Humanitarian Aid NGO. Features donor management, campaign tracking, volunteer coordination, and impact reporting.",
    tags: ["React", "TypeScript", "Vite", "Cloudinary", "Tailwind CSS", "namecheap", "Vercel"],
  },
  {
    name: "Eco Warrior Africa",
    imageUrl: "https://eco-warrior-8041.onrender.com/logo.png",
    link: "https://eco-warrior-8041.onrender.com/",
    description: "[Beta Testing Phase] Eco Warrior – A MERN-based platform for climate-conscious storytelling.",
    tags: ["node", "react", "tailwindcss", "cloudinary", "render", "vite"],
  },
  {
    name: "MOLEK CBT System — Desktop",
    link: "https://molekschool.com",
    imageUrl: "/molek-cbt.webp",
    description:
      "Offline-first Electron desktop application for Computer-Based Testing with React frontend and Node.js/SQLite backend. Server-verified timers, anti-cheat detection (tab switching, window blur tracking), bulk Excel question import with image support, and CSV export pipeline that feeds directly into the Django backend for automated grading.",
    tags: ["Electron", "React", "Node.js", "SQLite", "Vite", "CSV Export"],
    icon: Server,
    backendRole: "Offline Desktop Application",
    featured: true,
  },
  {
    name: "Tenderville School Portal",
    imageUrl: "https://res.cloudinary.com/dgvjxhqjd/image/upload/v1753304581/TVS_LOGOS_dlkdd4.jpg",
    link: "https://tendervilleng.net/",
    description:
      "Full-featured educational platform empowering students, staff, and parents in Lekki, Lagos. Features seamless authentication, dynamic dashboards, academic management, and real-time communication tools built with modern web technologies.",
    tags: ["Nextjs", "TypeScript", "Node.js", "MongoDB", "Express", "Cloudinary", "Tailwind CSS", "IndexedDB"],
  },
  {
    name: "HopeChain: Web3 Fundraising",
    imageUrl: "https://img.freepik.com/premium-vector/heart-logo_1068907-159.jpg",
    link: "https://hope-chain-2025-sui-hackerton.vercel.app/",
    description:
      "Decentralized fundraising platform built with Sui Move smart contracts. Ensures secure on-chain transactions while keeping user data private off-chain.Designed for nonprofits and community empowerment.",
    tags: ["Web3", "Sui Move", "Blockchain", "React", "TypeScript", "Smart Contracts"],
    featured: true,
  },
  {
    name: "Attendance Management System",
    imageUrl: "https://www.bvp-connects.com/attendance-logo.png",
    link: "https://attendanceapp-uok5.onrender.com/",
    description:
      "Embedded system designed to eliminate attendance fraud with built-in timer verification. Features real-time tracking, automated reporting, and secure authentication for workplace attendance management.",
    tags: ["React", "Node.js", "MongoDB", "Express", "MERN Stack"],
  },
  {
    name: "Badify Music App",
    imageUrl: "https://th.bing.com/th/id/R.9c51bbc96a108e023f49e1421af11b5b?rik=kNq8m5NVL34Mew&pid=ImgRaw&r=0",
    link: "https://badify-music-app.onrender.com/",
    description:
      "Flask-based music discovery application integrated with Deezer API. Features song search, preview playback, artist information, and curated playlists for an enhanced music exploration experience.",
    tags: ["Flask", "Python", "Deezer API", "Music"],
  },
  {
    name: "Movie Discovery Hub",
    imageUrl: "https://logodix.com/logo/818943.png",
    link: "https://our-fav-hub.vercel.app/",
    description:
      "Intuitive web application for browsing and discovering movies. Features advanced search, filtering by genre and rating, detailed movie information, and personalized recommendations.",
    tags: ["React", "TMDB API", "Entertainment", "UI/UX"],
  },
  {
    name: "Weather Intelligence App",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3845/3845731.png",
    link: "https://weather-app-frontend-tan.vercel.app/",
    description:
      "Real-time weather application providing current conditions, forecasts, and weather alerts for locations worldwide. Features responsive design and intuitive data visualization.",
    tags: ["Flask", "React", "OpenWeather API", "Responsive Design"],
  },
  {
    name: "Credit Card Validator",
    imageUrl: "https://th.bing.com/th/id/OIP.iBGmFz2jxm0jssqbQCyJNwHaHa?pid=ImgDet&w=474&h=474&rs=1",
    link: "https://credit-card-validator-seven.vercel.app/",
    description:
      "Secure validation tool implementing the Luhn algorithm to verify credit card numbers. Features instant validation feedback and support for major card networks.",
    tags: ["Python", "Flask", "Luhn Algorithm", "Security"],
  },
  {
    name: "Secure Password Generator",
    imageUrl: "https://th.bing.com/th/id/R.cc45ea6c8ba00fd6e94b2932b3a3694e?rik=sBTUA3EM4X0tyQ&pid=ImgRaw&r=0",
    link: "https://password-generator-web-seven.vercel.app/",
    description:
      "Advanced password generation tool creating cryptographically secure passwords. Features customizable length, character sets, and strength indicators for enhanced security.",
    tags: ["Node.js", "Security", "Cryptography", "JavaScript"],
  },
];

type Project = (typeof projects)[number];

// Detect touch device once on mount — switches between hover (web) and tap-modal (mobile)
function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const check = () =>
      window.matchMedia("(hover: none), (pointer: coarse)").matches;
    setIsTouch(check());
  }, []);
  return isTouch;
}

// 3D tilt card — only active on non-touch devices
function ProjectFolder({
  project,
  index,
  onTap,
  isTouch,
}: {
  project: Project;
  index: number;
  onTap: () => void;
  isTouch: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -8; // max 8deg tilt
    const ry = ((x - cx) / cx) * 8;
    cardRef.current.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(20px)`;
  };

  const handleMouseLeave = () => {
    if (isTouch || !cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1200px) rotateX(0) rotateY(0) translateZ(0)";
    setHovered(false);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isTouch && setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => isTouch && onTap()}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1)",
        animationDelay: `${index * 60}ms`,
      }}
      className="folder-card group relative bg-gradient-to-br from-white/[0.10] to-white/[0.02] border border-white/15 backdrop-blur-2xl rounded-2xl overflow-hidden cursor-pointer animate-fade-in-up will-change-transform"
      aria-label={`${project.name} — ${isTouch ? "tap to view details" : "hover to view details"}`}
    >
      {/* Folder tab (gives the OS-folder feel) */}
      <div
        aria-hidden
        className="absolute -top-2 left-6 w-20 h-4 bg-gradient-to-r from-blue-500/60 to-purple-500/60 rounded-t-lg border-t border-x border-white/20 backdrop-blur-md"
      />

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-20">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
            ★ FEATURED
          </span>
        </div>
      )}

      {/* Glow on hover */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/10 group-hover:to-blue-500/20 transition-opacity duration-500 pointer-events-none"
      />

      <div className="relative p-5 flex flex-col h-full" style={{ transform: "translateZ(30px)" }}>
        {/* Project Image */}
        <div className="relative mb-4 rounded-xl overflow-hidden bg-white/5 aspect-video">
          <img
            loading="lazy"
            src={project.imageUrl || "/fallback.webp"}
            alt={`${project.name} — Project screenshot`}
            width="400"
            height="225"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/fallback.webp";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Mobile hint */}
          {isTouch && (
            <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-md px-2 py-1 rounded-md text-[10px] text-white font-medium">
              Tap to open
            </div>
          )}
        </div>

        {/* Title — always visible */}
        <h3 className="text-lg font-bold text-white leading-tight mb-2">
          {project.name}
        </h3>

        {project.backendRole && (
          <span className="text-[10px] font-medium text-blue-300 bg-blue-500/15 px-2 py-0.5 rounded-md border border-blue-500/30 w-fit mb-2">
            {project.backendRole}
          </span>
        )}

        {/* Description — hover-reveal on web, hidden on mobile (modal handles it) */}
        {!isTouch && (
          <div
            className={`overflow-hidden transition-all duration-500 ${
              hovered ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-white/75 text-xs leading-relaxed line-clamp-4">
              {project.description}
            </p>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-blue-500/15 text-blue-200 text-[10px] font-medium rounded-md border border-blue-500/25"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 bg-white/10 text-white/60 text-[10px] rounded-md border border-white/20">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* CTA — hover-reveal on web, always visible on mobile */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-2.5 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm transition-all duration-300 ${
              isTouch ? "opacity-100" : hovered ? "opacity-100 translate-y-0" : "opacity-70"
            }`}
            aria-label={`Open ${project.name} live demo`}
          >
            <span>Open Project</span>
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

// Full-screen modal for mobile tap
function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in-up"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Modal content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto bg-gradient-to-br from-gray-900/95 to-gray-950/95 border border-white/15 backdrop-blur-2xl rounded-t-3xl sm:rounded-3xl shadow-2xl"
        style={{ animation: "modalSlide 0.35s cubic-bezier(0.2, 0.9, 0.3, 1)" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-colors"
        >
          <X size={20} className="text-white" />
        </button>

        {/* Image */}
        <div className="relative aspect-video overflow-hidden rounded-t-3xl sm:rounded-t-3xl bg-white/5">
          <img
            src={project.imageUrl || "/fallback.webp"}
            alt={project.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/fallback.webp";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          {project.featured && (
            <span className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
              ★ FEATURED
            </span>
          )}
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-5">
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white">
            {project.name}
          </h3>

          {project.backendRole && (
            <span className="inline-block text-xs font-medium text-blue-300 bg-blue-500/15 px-3 py-1 rounded-md border border-blue-500/30">
              {project.backendRole}
            </span>
          )}

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-500/15 text-blue-200 text-xs font-medium rounded-md border border-blue-500/25"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <ExternalLink size={18} />
              <span>Visit Live Project</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Project() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const isTouch = useIsTouchDevice();

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {inView && (
          <>
            <div className="text-center mb-14 sm:mb-20 space-y-4">
              <h2
                id="projects-heading"
                className="text-3xl sm:text-5xl lg:text-6xl font-bold"
              >
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
                A showcase of real-world applications spanning education, Web3, NGO management, and
                more.{" "}
                <span className="text-blue-300/80">
                  {isTouch ? "Tap a folder to dive in." : "Hover to peek inside."}
                </span>
              </p>
            </div>

            {/* 3D Folder Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <ProjectFolder
                  key={index}
                  project={project}
                  index={index}
                  isTouch={isTouch}
                  onTap={() => setActiveProject(project)}
                />
              ))}
            </div>

            <div className="mt-16 sm:mt-20 text-center">
              <div className="inline-block bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-6 sm:px-8 py-5 sm:py-6">
                <p className="text-white/80 text-base sm:text-lg mb-2">
                  Real-world solutions deployed in production
                </p>
                <p className="text-blue-400 font-semibold text-sm sm:text-base">
                  Want to collaborate? Let's build something amazing together.
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
