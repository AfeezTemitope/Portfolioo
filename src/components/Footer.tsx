
import {FaTiktok, FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        {
            icon: <FaEnvelope size={20} />,
            link: "mailto:belloafeez28@gmail.com",
        },
        {
            icon: <FaTiktok size={20} />,
            link: "https://www.tiktok.com/@tbelzbby?_t=ZM-8tseYs93X67&_r=1",
        },
        {
            icon: <FaInstagram size={20} />,
            link: "https://www.instagram.com/badafeez?igsh=MWgwNTZlODI1d3k5NQ%3D%3D&utm_source=qr",
        },
        {
            icon: <FaWhatsapp size={20} />,
            link: "wa.me/+2349014465194",
        },
        {
            icon: <FaLinkedin size={20} />,
            link: "kedin.com/in/afeez-bello-548749275/",
        },
        {
            icon: <FaGithub size={20} />,
            link: "https://github.com/AfeezTemitope",
        },
    ];

    return (
        <footer id="footer" className="bg-gray-800 text-white py-4 text-center mt-auto">
            <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
            <p className="mt-2 text-sm">
                &copy; {new Date().getFullYear()} Bello Afeez Temitope. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
