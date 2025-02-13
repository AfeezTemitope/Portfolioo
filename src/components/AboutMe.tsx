
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
    const { ref, inView } = useInView({ threshold: 0.5 });

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } },
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    return (
        <motion.div
            id="about"
            className="flex flex-col justify-center items-center relative py-4 min-h-screen"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.h2
                className="text-4xl font-bold text-center mb-6"
                variants={headingVariants}
            >
                About Me
            </motion.h2>
            <motion.p
                className="text-lg max-w-2xl text-center px-4"
                variants={paragraphVariants}
            >
                Hello! I'm Bello Afeez Temitope, a passionate software engineer with a
                deep interest in web development and technology. I specialize in
                creating seamless and efficient user experiences, and I am always
                eager to learn new skills and technologies. I enjoy building
                impactful projects and solving real-world problems through coding.
                <br />
                <br />
                I'm skilled in various programming languages and frameworks, and I'm
                continuously improving my skills to keep up with the latest trends in
                the tech world. When I'm not coding, you can find me exploring new
                technologies, reading, or working on personal projects.
            </motion.p>
        </motion.div>
    );
};

export default AboutMe;
