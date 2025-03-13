import { FaGraduationCap, FaCode, FaPaintBrush } from "react-icons/fa";

const AboutMe = () => {
    const educationData = [
        {
            icon: <FaPaintBrush className="text-3xl mr-4 text-white" />,
            title: "Wadyson Printing Production",
            subtitle: "Corel Draw",
            date: "2009 - 2014",
        },
        {
            icon: <FaGraduationCap className="text-3xl mr-4 text-white" />,
            title: "Lagos State University",
            subtitle: "Project Management Technology",
            date: "2015 - 2020",
        },
        {
            icon: <FaGraduationCap className="text-3xl mr-4 text-white" />,
            title: "National Youth Service Corps (NYSC)",
            subtitle: "",
            date: "2022 - 2023",
        },
        {
            icon: <FaCode className="text-3xl mr-4 text-white" />,
            title: "Semicolon - Africa",
            subtitle: "Software Engineering Diploma",
            date: "2024 - 2025",
        },
    ];

    return (
        <div
            id="about"
            className="flex flex-col justify-center items-center relative py-10 min-h-screen bg-gray-800 text-white px-4 md:px-0"
        >
            <h2
                className="text-4xl font-bold text-center mb-6"
            >
                About Me
            </h2>
            <div className="container mx-auto px-4 md:px-0">
                <p className="text-lg mb-4">
                    Hello! I'm Bello Afeez Temitope, a software engineer with a
                    deep interest in how technology works.My journey into coding began with a deep curiosity about how websites function behind the scenes.
                    With over a year intense Training @ SEMICOLON AFRICA 2024-2025. i developed a strong habit
                    creating seamless and efficient user experiences, and I am always
                    eager to learn new skills and technologies. I enjoy building
                    impactful projects and solving real-world problems through coding.
                    My expertise spans backend engineering with Java, Python, and JavaScript (using frameworks like Spring Boot, Django, and Flask), as well as frontend development with HTML5, Reactjs and Typescript.
                    I also have experience in styling with CSS and TailwindCSS, and deploying projects.
                </p>

                <div className="mt-8 relative">
                    <h1>Education</h1>
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start mb-6 relative pl-8"
                        >

                            <div className="absolute top-4 bottom-4 left-4 w-px bg-gray-600"></div>
                            {item.icon}

                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-lg text-gray-300">{item.subtitle}</p>
                                <p className="text-lg text-gray-300">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-lg mt-8">
                    I'm skilled in other tech related skills like :
                </p>
                <ul className="list-disc pl-6 text-lg mb-4">
                    <li>Graphic Design (Corel Draw)</li>
                </ul>

                <p className="text-lg">
                    When I'm not coding, you can find me exploring new
                    technologies, reading, football or working on personal projects.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
