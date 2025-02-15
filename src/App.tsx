import './App.css';
import Header from "./components/Header.tsx";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Stack from "./components/Stack.tsx";
import Project from "./components/Project.tsx";
import ReviewFormWithStyles from "./components/ReviewForm.tsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-800 text-aliceblue">
            <NavBar />
            <div className="container mx-auto px-4 md:px-0"> {/* Added responsive container */}
                <Header />
                <AboutMe />
                <Stack />
                <Project />
            </div>
            <ReviewFormWithStyles/>
            <Footer />
        </div>
    );
}

export default App;
