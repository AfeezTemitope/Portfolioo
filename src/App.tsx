import './App.css';
import Header from "./components/Header.tsx";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Stack from "./components/Stack.tsx";

function App() {
    return (
        <div className="flex flex-col">
            <NavBar />
            <Header />
            <AboutMe/>
            <Stack/>
            <Footer/>
        </div>
    );
}

export default App;
