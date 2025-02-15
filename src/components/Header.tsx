import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MyImage from '../assets/TBELZ.png';

const Header = () => {
    const { ref, inView } = useInView({ threshold: 0.5 });

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };


    return (
        <div>

            <motion.div
                id="home"
                className="flex items-center justify-center min-h-screen py-10"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                    <motion.div variants={imageVariants} className="mb-4 md:mb-0 md:mr-8">
                        <img
                            className="w-98 md:w-120 lg:w-100 xl:w-116 rounded-lg"
                            src={MyImage}
                            alt="Profile"
                        />
                    </motion.div>
                    <motion.div variants={textVariants} className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold font-italic">
                            BELLO AFEEZ<br />
                            <span className="text-2xl md:text-3xl">
                                TEMITOPE
                            </span>
                        </h1>
                        <a href="#about" className="text-md md:text-lg mt-1 text-gray-500 block md:inline">
                            I`m not passionate about tech i came to make money, and to do that i had to be the best
                        </a>
                        <div className="flex space-x-4 mt-6 justify-center md:justify-start">
                            <a href="mailto:belloafeez28@gmail.com" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                Hire Me!
                            </a>
                            <a href="#footer" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                                Contact
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Header;
