import { useInView } from "react-intersection-observer";

interface ProjectType {
    name: string;
    imageUrl: string;
    link: string;
    description: string;
}

const Project: React.FC = () => {
    const { ref } = useInView({ threshold: 0.5 });

    const projects: ProjectType[] = [
        {
            name: "Fitness App (Backend)",
            imageUrl: "https://th.bing.com/th/id/OIP.cxJWyP3a9SOU8CJjnu1YAQHaE0?rs=1&pid=ImgDetMain",
            link: "https://workoutandgetfit-production.up.railway.app/api/register/",
            description: "A backend API for a fitness application, handling user registration and data management.",
        },
        {
            name: "Weather App",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/3845/3845731.png",
            link: "https://weather-app-frontend-tan.vercel.app/",
            description: "A web application providing current weather information for various locations.",
        },
        {
            name: "Football Club Blog",
            imageUrl: "https://th.bing.com/th/id/R.590fe86a56bae1b5e7aa5989b793f3b6?rik=J5N9gCc97eh1mg&pid=ImgRaw&r=0",
            link: "https://budu-elite-football-academy-blog.vercel.app/",
            description: "A blog dedicated to a football club, featuring news, updates, and articles.",
        },
        {
            name: "Credit Card Validator",
            imageUrl: "https://th.bing.com/th/id/OIP.iBGmFz2jxm0jssqbQCyJNwHaHa?pid=ImgDet&w=474&h=474&rs=1",
            link: "https://credit-card-validator-seven.vercel.app/",
            description: "A tool to validate credit card numbers using the Luhn algorithm.",
        },
        {
            name: "Movie App",
            imageUrl: "https://logodix.com/logo/818943.png",
            link: "https://our-fav-hub.vercel.app/",
            description: "A web application for browsing and discovering movies.",
        },
        {
            name: "Password Generator",
            imageUrl: "https://th.bing.com/th/id/R.cc45ea6c8ba00fd6e94b2932b3a3694e?rik=sBTUA3EM4X0tyQ&pid=ImgRaw&r=0",
            link: "https://password-generator-web-seven.vercel.app/",
            description: "A tool to generate strong and secure passwords.",
        },
    ];

    return (
        <div id="project" className="py-10 sm:py-6 lg:py-8" ref={ref}>
            <h2 className="text-4xl font-bold text-center mb-8 text-white">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 px-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center min-w-0 max-w-xs mx-auto"
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.name}
                            className="w-full h-auto mb-4 object-contain"
                        />
                        <h3 className="text-xl font-semibold mb-2 text-center">{project.name}</h3>
                        <p className="text-sm mb-4 text-center">{project.description}</p>
                        <a href={project.link} className="bg-blue-500 text-white py-2 px-4 rounded-md">
                            Visit Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
