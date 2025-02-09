const Project = () => {
    const projects = [
        {
            name: "fitness App(backend link)",
            imageUrl: "https://th.bing.com/th/id/OIP.cxJWyP3a9SOU8CJjnu1YAQHaE0?rs=1&pid=ImgDetMain",
            link: "https://workoutandgetfit-production.up.railway.app/api/register/",
        },
        {
            name: "weather App",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/3845/3845731.png",
            link: "https://weather-app-frontend-tan.vercel.app/",
        },
        {
            name: "Football Club Blog",
            imageUrl: "https://th.bing.com/th/id/R.590fe86a56bae1b5e7aa5989b793f3b6?rik=J5N9gCc97eh1mg&pid=ImgRaw&r=0",
            link: "https://budu-elite-football-academy-blog.vercel.app/",
        },
        {
            name: "Credit Card Validator",
            imageUrl: "https://th.bing.com/th/id/OIP.iBGmFz2jxm0jssqbQCyJNwHaHa?pid=ImgDet&w=474&h=474&rs=1",
            link: "https://credit-card-validator-seven.vercel.app/",
        },
        {
            name: "Movie App",
            imageUrl: "https://logodix.com/logo/818943.png",
            link: "https://our-fav-hub.vercel.app/",
        },
        {
            name: "Password Generator",
            imageUrl: "https://th.bing.com/th/id/R.cc45ea6c8ba00fd6e94b2932b3a3694e?rik=sBTUA3EM4X0tyQ&pid=ImgRaw&r=0",
            link: "https://password-generator-web-seven.vercel.app/",
        },
    ];

    return (
        <div id="project" className="min-h-screen py-10">
            <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between"
                    >
                        {/* Project Image */}
                        <div className="w-40 h-40 bg-gray-600 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                            <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Project Name */}
                        <h3 className="text-xl font-semibold mb-4">{project.name}</h3>

                        {/* Project Link */}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
                        >
                            Visit Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
