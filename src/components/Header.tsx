const Header = () => {
    return (
        <div id="home" className="flex flex-col items-center justify-center py-10 min-h-1.5">
            <div className="flex items-center mb-4">
                <img
                    className="w-82 h-82 rounded-full"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQG-Qi5BedVLVA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726575108301?e=1744243200&v=beta&t=PIq17poNakKQ09bNtOomhimOzWxtOqNMm_BBE66mPWI"
                    alt="Profile" />
                <div className="profile-image"></div>
            </div>
            <h1 className="text-4xl font-bold font-italic text-center">
                <span>BELLO AFEEZ</span><br />
                <span className="text-2xl">TEMITOPE</span>
                <p className="text-xl mt-2">Software Engineer</p>
            </h1>
        </div>
    );
};

export default Header;
