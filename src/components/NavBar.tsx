import React, { useState, useEffect, useRef } from 'react';
import Hamburger from 'react-hamburger-menu';
import {FaHome, FaInfoCircle, FaCode, FaProjectDiagram, FaPhone} from 'react-icons/fa';

interface NavBarProps {
    siteTitle?: string;
}

const NavBar: React.FC<NavBarProps> = ({ siteTitle = "Portfolio" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        const handleScroll = () => {
            setIsOpen(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className="flex flex-col md:flex-row md:justify-center items-center fixed top-0 left-0 right-0 w-full shadow-md z-50 py-6 bg-gray-800"
            ref={menuRef}
        >
            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden absolute left-4 top-4 z-50">
                <Hamburger
                    isOpen={isOpen}
                    menuClicked={toggleMenu}
                    width={30}
                    height={25}
                    strokeWidth={3}
                    color="aliceblue"
                    animationDuration={0.5}
                    aria-expanded={isOpen}
                    aria-label="Toggle Navigation"
                />
            </div>

            {/* Site Title */}
            <div className="text-white font-bold z-50 md:mr-8">
                {siteTitle}
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex space-x-6 z-50">
                <a href="#home" className="text-xl hover:text-blue-500 transition-all duration-300 flex items-center text-white">
                    <FaHome className="mr-2" />
                    <span>Home</span>
                </a>
                <a href="#about" className="text-xl hover:text-blue-500 transition-all duration-300 flex items-center text-white">
                    <FaInfoCircle className="mr-2" />
                    <span>About</span>
                </a>
                <a href="#stack" className="text-xl hover:text-blue-500 transition-all duration-300 flex items-center text-white">
                    <FaCode className="mr-2" />
                    <span>Stack</span>
                </a>
                <a href="#project" className="text-xl hover:text-blue-500 transition-all duration-300 flex items-center text-white">
                    <FaProjectDiagram className="mr-2" />
                    <span>Project</span>
                </a>
                <a href="#footer" className="text-xl hover:text-blue-500 transition-all duration-300 flex items-center text-white">
                    <FaPhone className="mr-2" />
                    <span>Connect</span>
                </a>
            </div>


            {/* Mobile Menu */}
            <div className={`transition-all duration-300 md:hidden ${isOpen ? 'block' : 'hidden'} w-full`}> {/* Only visible on mobile */}
                <div
                    className={`flex flex-col p-4 rounded-md w-64 bg-gray-800 fixed left-8 top-16 z-20 ${isOpen ? 'block' : 'hidden'}`}
                >
                    <a href="#home" className="text-xl hover:text-blue-500 transition-all duration-300 flex items-center text-white">
                        <FaHome className="mr-2" />
                        <span>Home</span>
                    </a>
                    <a href="#about" className="text-xl hover:text-blue-500 transition-all duration-300 flex items-center text-white">
                        <FaInfoCircle className="mr-2" />
                        <span>About</span>
                    </a>
                    <a href="#stack" className="text-xl hover:text-blue-500 transition-all duration-300 flex items-center text-white">
                        <FaCode className="mr-2" />
                        <span>Stack</span>
                    </a>
                    <a href="#project" className="text-xl hover:text-blue-500 transition-all duration-300 flex items-center text-white">
                        <FaProjectDiagram className="mr-2" />
                        <span>Project</span>
                    </a>
                    <a href="#footer" className="text-xl hover:text-blue-500 transition-all duration-300 flex items-center text-white">
                        <FaPhone className="mr-2" />
                        <span>Connect</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
