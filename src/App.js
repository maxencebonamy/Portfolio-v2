import "./app.css"
import "./_utils/text.css"

import Home from "./home/home";
import NavBar from "./navbar/navbar";
import About from "./about/about";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
import Contact from "./contact/contact";
import Footer from "./footer/footer";


function App() {

    return (
        <div className="App">
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );

}


export default App;