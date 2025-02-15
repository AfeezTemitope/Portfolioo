import './App.css';
import Header from "./components/Header.tsx";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Stack from "./components/Stack.tsx";
import Project from "./components/Project.tsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-800 text-aliceblue">
            <NavBar />
            <div >
                {/*<div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-14 py-16 shadow-md items-center justify-center min-h-screen">*/}
                    <Header />
                    <AboutMe />
                {/*</div>*/}
                <Stack />
                <Project />
            </div>
            <Footer />
        </div>
    );
}

export default App;
