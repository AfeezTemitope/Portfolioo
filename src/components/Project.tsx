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
            name: "Attendance(MERN STACK)",
            imageUrl: "https://www.bvp-connects.com/attendance-logo.png",
            link: "https://attendanceapp-uok5.onrender.com/",
            description: "An embedded system designed to solve issues related to tampered attendance sheets. This system incorporates an inbuilt timer to verify when users arrive at work."
        },
        {
            name: "Badify Music App",
            imageUrl: "https://th.bing.com/th/id/R.9c51bbc96a108e023f49e1421af11b5b?rik=kNq8m5NVL34Mew&pid=ImgRaw&r=0",
            link: "https://badify-music-app.onrender.com/",
            description: "A Flask-based web app for searching and previewing songs using the Deezer API",
        },
        {
            name: "Football Club Blog",
            imageUrl: "https://th.bing.com/th/id/R.590fe86a56bae1b5e7aa5989b793f3b6?rik=J5N9gCc97eh1mg&pid=ImgRaw&r=0",
            link: "https://befav2.onrender.com/",
            description: "A MERN STACk blog dedicated to budu elite football club, featuring club news, club announcement, and articles.",
        },
        {
            name: "Credit Card Validator(Python Flask)",
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
            name: "Weather App(Flask&React)",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/3845/3845731.png",
            link: "https://weather-app-frontend-tan.vercel.app/",
            description: "A web application providing current weather information for various locations.",
        },
        {
            name: "Password Generator(NodeJS)",
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
