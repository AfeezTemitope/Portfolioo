import './App.css';
import Header from "./components/Header.tsx";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Stack from "./components/Stack.tsx";
import Project from "./components/Project.tsx";

function App() {
    return (
        <div className="flex flex-col bg-gradient-to-r from-[#1a202c] to-[#0D1117] text-aliceblue min-h-screen">
            <NavBar />
            <Header />
            <AboutMe/>
            <Stack/>
            <Project/>
            <Footer/>
        </div>
    );
}

export default App;
