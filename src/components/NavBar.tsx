const NavBar = () => {
    return (
        <div className="flex flex-row justify-center bg-[#0D1117] items-center sticky top-0 w-full shadow-md z-10  py-4">
            <a href="#head" className="mx-3 text-xl hover:text-blue-500 transition-all duration-300">Home</a>
            <a href="#about" className="mx-3 text-xl hover:text-blue-500 transition-all duration-300">About</a>
            <a href="#stack" className="mx-3 text-xl hover:text-blue-500 transition-all duration-300">Stack</a>
            <a href="#project" className="mx-3 text-xl hover:text-blue-500 transition-all duration-300">Project</a>
        </div>
    );
};

export default NavBar;
