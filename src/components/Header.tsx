import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header = () => {
    const { ref, inView } = useInView({ threshold: 0.5 });

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const subheadingVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } },
    };

    return (
        <motion.div
            id="home"
            className="flex flex-col items-center justify-center min-h-screen py-10"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.div className="flex items-center mb-4" variants={imageVariants}>
                <img
                    className="w-82 h-82 rounded-full"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQG-Qi5BedVLVA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726575108301?e=1744243200&v=beta&t=PIq17poNakKQ09bNtOomhimOzWxtOqNMm_BBE66mPWI"
                    alt="Profile"
                />
            </motion.div>
            <motion.h1
                className="text-4xl font-bold font-italic text-center"
                variants={headingVariants}
            >
                <span>BELLO AFEEZ</span><br />
                <motion.span className="text-2xl" variants={subheadingVariants}>
                    TEMITOPE
                    <p className="text-xl mt-2">Software Engineer</p>
                </motion.span>
            </motion.h1>
        </motion.div>
    );
};

export default Header;
