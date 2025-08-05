import "./App.css"
import NavBar from "./components/NavBar"
import Header from "./components/Header.tsx";
import Stack from "./components/Stack.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Project from "./components/Project.tsx";
import ReviewForm from "./components/ReviewForm.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-950 text-white">
            <NavBar />
            <main className="flex-1">
                <Header />
                <div className="py-20 lg:py-32 container mx-auto px-4 lg:px-8">
                    <Stack />
                    <AboutMe />
                    <Project />
                </div>
                <ReviewForm />
            </main>
            <Footer />
        </div>
    )
}

export default App
