const NavBar = () => {
    return (
        <div className="flex flex-row justify-center bg-black items-center sticky top-0 w-full shadow-md z-10  py-2">
            <a href="#head" className="mx-4 text-xl hover:text-blue-500 transition-all duration-300">Home</a>
            <a href="#about" className="mx-4 text-xl hover:text-blue-500 transition-all duration-300">AboutMe</a>
            <a href="#stack" className="mx-4 text-xl hover:text-blue-500 transition-all duration-300">Stack</a>
            <a href="#project" className="mx-4 text-xl hover:text-blue-500 transition-all duration-300">Project</a>
        </div>
    );
};

export default NavBar;
