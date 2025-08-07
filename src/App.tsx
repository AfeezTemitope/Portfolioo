import "./App.css"
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Stack from "./components/Stack"
import AboutMe from "./components/AboutMe"
import {Project} from "./components/Project"
import ReviewForm from "./components/ReviewForm"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-950 text-white">
            <NavBar />
            <main className="bg-gray-950 flex-1">
                <Header />
                <div className="py-20 lg:py-32">
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
