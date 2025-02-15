import { FaCss3Alt, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { SiFlask, SiSpring, SiTypescript, SiDjango } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { DiMongodb, DiMysql, DiPostgresql, DiPython } from "react-icons/di";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Stack = () => {
    const { ref, inView } = useInView({ threshold: 0.2 });

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    };

    const techData = {
        frontend: [
            { icon: <FaReact className="text-blue-500 text-6xl drop-shadow-md" />, name: "React" },
            { icon: <FaHtml5 className="text-orange-500 text-6xl drop-shadow-md" />, name: "HTML" },
            { icon: <FaCss3Alt className="text-blue-400 text-6xl drop-shadow-md" />, name: "CSS" },
            { icon: <SiTypescript className="text-blue-600 text-6xl drop-shadow-md" />, name: "TypeScript" },
        ],
        backend: [
            { icon: <IoLogoNodejs className="text-green-500 text-6xl drop-shadow-md" />, name: "Node.js" },
            { icon: <SiDjango className="text-green-700 text-6xl drop-shadow-md" />, name: "Django" },
            { icon: <SiFlask className="text-red-600 text-6xl drop-shadow-md" />, name: "Flask" },
            { icon: <SiSpring className="text-green-500 text-6xl drop-shadow-md" />, name: "Spring" },
            { icon: <FaJava className="text-red-700 text-6xl drop-shadow-md" />, name: "Java" },
            { icon: <DiPython className="text-blue-500 text-6xl drop-shadow-md" />, name: "Python" },
        ],
        mobile: [{ icon: <FaReact className="text-blue-500 text-6xl drop-shadow-md" />, name: "React Native" }],
        database: [
            { icon: <DiMongodb className="text-green-600 text-6xl drop-shadow-md" />, name: "MongoDB" },
            { icon: <DiMysql className="text-blue-600 text-6xl drop-shadow-md" />, name: "MySQL" },
            { icon: <DiPostgresql className="text-blue-700 text-6xl drop-shadow-md" />, name: "PostgreSQL" },
        ],
    };

    return (
        <motion.div
            id="stack"
            className="py-10 min-h-screen"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <h2 className="text-4xl font-bold text-center mb-8 text-white">My Tech Stack</h2>
            <div className="flex flex-col md:flex-row flex-wrap gap-20 items-center justify-center">
                <div className="md:w-1/2">
                    <motion.div className="text-center" variants={itemVariants}>
                        <h3 className="text-2xl font-semibold mb-4 text-white">Frontend</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
                            {techData.frontend.map(({ icon, name }) => (
                                <motion.div key={name} className="flex flex-col items-center text-white" variants={itemVariants}>
                                    {icon}
                                    <span className="mt-2 text-lg">{name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div className="text-center mt-20 md:mt-0" variants={itemVariants}>
                        <h3 className="text-2xl font-semibold mb-4 text-white">Backend</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
                            {techData.backend.map(({ icon, name }) => (
                                <motion.div key={name} className="flex flex-col items-center text-white" variants={itemVariants}>
                                    {icon}
                                    <span className="mt-2 text-lg">{name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="md:w-1/2">
                    <motion.div className="text-center" variants={itemVariants}>
                        <h3 className="text-2xl font-semibold mb-4 text-white">Mobile</h3>
                        <div className="flex justify-center">
                            {techData.mobile.map(({ icon, name }) => (
                                <motion.div key={name} className="flex flex-col items-center text-white" variants={itemVariants}>
                                    {icon}
                                    <span className="mt-2 text-lg">{name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div className="text-center mt-20 md:mt-0" variants={itemVariants}>
                        <h3 className="text-2xl font-semibold mb-4 text-white">Database</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
                            {techData.database.map(({ icon, name }) => (
                                <motion.div key={name} className="flex flex-col items-center text-white" variants={itemVariants}>
                                    {icon}
                                    <span className="mt-2 text-lg">{name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Stack;
