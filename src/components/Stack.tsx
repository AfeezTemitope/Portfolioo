const Stack = () => {
    return (
        <div id="stack" className="min-h-screen py-10">
            <h2 className="text-4xl font-bold text-center mb-8">My Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {/* Frontend Section */}
                <div className="text-center w-full mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
                    <div className="flex gap-4 justify-center">
                        <div className="w-20 h-20 shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-16 h-16" />
                        </div>
                        <div className="w-20 h-20 shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://iconape.com/wp-content/png_logo_vector/html-5.png" alt="HTML5" className="w-16 h-16" />
                        </div>
                        <div className="w-20 h-20 shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" alt="CSS3" className="w-16 h-16" />
                        </div>
                        <div className=" w-20 h-20  shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://en.vetores.org/wp-content/uploads/typescript.png" alt="TypeScript" className="w-16 h-16" />
                        </div>
                    </div>
                </div>

                {/* Mobile Section (React Native) */}
                <div className="text-center w-full mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Mobile</h3>
                    <div className="flex justify-center">
                        <div className="w-36 h-16 shadow-xl flex items-center justify-center bg-white">
                            <img src="https://luminfire.com/wp-content/uploads/2017/12/React_Native_Logo-1024x194.png" alt="React Native" className="w-32 h-14" />
                        </div>
                    </div>
                </div>

                {/* Backend Section */}
                <div className="text-center w-full">
                    <h3 className="text-2xl font-semibold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {/* Node, MongoDB, MySQL, PostgreSQL */}
                        <div className="w-20 h-20  shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png" alt="Node.js" className="w-16 h-16" />
                        </div>
                        <div className="w-20 h-20  shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://th.bing.com/th/id/R.38c33d786ceac6cc2924933d9a96e527?rik=B9xaHe%2f6Y%2b9Gtg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-mongodb-png-mongo-db-badge-sticker-600.png&ehk=X9stlMWh9xvW73Zg5X%2bBOdxq3nTS%2bsLzhXrcjULCEeI%3d&risl=&pid=ImgRaw&r=0" alt="MongoDB" className="w-16 h-16" />
                        </div>
                        <div className="w-20 h-20  shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://pngimg.com/uploads/mysql/mysql_PNG23.png" alt="MySQL" className="w-16 h-16" />
                        </div>
                        <div className="w-20 h-20  shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png" alt="PostgreSQL" className="w-16 h-16" />
                        </div>

                        {/* Flask, Spring Boot, Go, Java */}
                        <div className="w-20 h-20  shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://th.bing.com/th/id/R.b592b1154d25c072c104d331939dd67c?rik=dAxlNXf0CNaeTA&pid=ImgRaw&r=0" alt="Flask" className="w-16 h-16" />
                        </div>
                        <div className="w-20 h-20  shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://th.bing.com/th/id/R.8b781905dae7fe99383e2c8d6a1b66e5?rik=O9XCpUoBa7KUkw&pid=ImgRaw&r=0" alt="Spring Boot" className="w-16 h-16" />
                        </div>
                        <div className="w-20 h-20 shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://th.bing.com/th/id/R.bde2069143dd5c9da9632d2d32f65fbd?rik=HyJf1kgAzFk8dA&pid=ImgRaw&r=0" alt="Go" className="w-16 h-16" />
                        </div>
                        <div className="w-20 h-20 shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://th.bing.com/th/id/R.711f654d966e29da576399cc8d873a9e?rik=Pr7JzWIodBWV2Q&pid=ImgRaw&r=0" alt="Java" className="w-16 h-16" />
                        </div>

                        {/* Python */}
                        <div className="w-20 h-20 shadow-xl rounded-full flex items-center justify-center bg-white">
                            <img src="https://th.bing.com/th/id/R.8c1719d731849436c9b734d7d65e9558?rik=bSbWm6hjVbDSPg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpython-logo-png-big-image-png-2400.png&ehk=QVy%2f7oOiTJ16YDb0ys7dyNAHnvvwPX1WAaD7AvoVnTU%3d&risl=&pid=ImgRaw&r=0" alt="Python" className="w-16 h-16" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stack;
