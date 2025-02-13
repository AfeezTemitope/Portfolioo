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
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center">

                {/* Frontend Section */}
                <motion.div className="text-center" variants={itemVariants}>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Frontend</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                        {[
                            { icon: <FaReact className="text-blue-500 text-6xl drop-shadow-md" />, key: "react" },
                            { icon: <FaHtml5 className="text-orange-500 text-6xl drop-shadow-md" />, key: "html" },
                            { icon: <FaCss3Alt className="text-blue-400 text-6xl drop-shadow-md" />, key: "css" },
                            { icon: <SiTypescript className="text-blue-600 text-6xl drop-shadow-md" />, key: "typescript" }
                        ].map(({ icon, key }) => (
                            <motion.div
                                key={key}
                                className="flex items-center justify-center text-white"
                                variants={itemVariants}
                            >
                                {icon}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Backend Section */}
                <motion.div className="text-center" variants={itemVariants}>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Backend</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                        {[
                            { icon: <IoLogoNodejs className="text-green-500 text-6xl drop-shadow-md" />, key: "node" },
                            { icon: <SiDjango className="text-green-700 text-6xl drop-shadow-md" />, key: "django" },
                            { icon: <SiFlask className="text-red-600 text-6xl drop-shadow-md" />, key: "flask" },
                            { icon: <SiSpring className="text-green-500 text-6xl drop-shadow-md" />, key: "spring" },
                            { icon: <FaJava className="text-red-700 text-6xl drop-shadow-md" />, key: "java" },
                            { icon: <DiPython className="text-blue-500 text-6xl drop-shadow-md" />, key: "python" }
                        ].map(({ icon, key }) => (
                            <motion.div
                                key={key}
                                className="flex items-center justify-center text-white"
                                variants={itemVariants}
                            >
                                {icon}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile Section */}
                <motion.div className="text-center" variants={itemVariants}>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Mobile</h3>
                    <div className="flex justify-center">
                        <motion.div
                            className="flex items-center justify-center text-white"
                            variants={itemVariants}
                        >
                            <FaReact className="text-blue-500 text-6xl drop-shadow-md" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Database Section */}
                <motion.div className="text-center" variants={itemVariants}>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Database</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                        {[
                            { icon: <DiMongodb className="text-green-600 text-6xl drop-shadow-md" />, key: "mongodb" },
                            { icon: <DiMysql className="text-blue-600 text-6xl drop-shadow-md" />, key: "mysql" },
                            { icon: <DiPostgresql className="text-blue-700 text-6xl drop-shadow-md" />, key: "postgresql" }
                        ].map(({ icon, key }) => (
                            <motion.div
                                key={key}
                                className="flex items-center justify-center text-white"
                                variants={itemVariants}
                            >
                                {icon}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Stack;
