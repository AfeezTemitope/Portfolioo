import React, { useState, useEffect, useRef } from 'react';
import Hamburger from 'react-hamburger-menu';
import { FaHome, FaInfoCircle, FaCode, FaProjectDiagram } from 'react-icons/fa';

interface NavBarProps {
    siteTitle?: string;
}

const NavBar: React.FC<NavBarProps> = ({ siteTitle = "my portfolio" }) => {
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
            className="flex flex-col md:flex-row md:justify-center items-center fixed top-0 left-0 right-0 w-full shadow-md z-50 py-4 bg-[#0D1117]"
            ref={menuRef}
        >

            <div className="md:hidden absolute left-4 top-4">
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
                    role="button"
                    tabIndex={0}
                />
            </div>

            <div className="md:hidden absolute right-16 top-4 text-white font-bold">
                {siteTitle}
            </div>

            <div className="md:flex transition-all duration-300 justify-center items-center w-full md:w-auto">
                <div
                    className={`flex flex-col md:flex-row md:space-x-2 p-4 md:p-0 rounded-md w-full md:w-auto ${
                        isOpen
                            ? 'absolute left-4 top-16 z-20 rounded-md'
                            : 'hidden md:flex md:static md:w-auto'
                    }`}
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
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
