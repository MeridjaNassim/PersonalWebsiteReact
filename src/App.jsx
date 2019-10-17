import React from "react";
import NavigationBar from "./components/NavigationBar.jsx";
import About from "./components/about/About.jsx";
import "./App.css";
import Home from "./components/home/Home.jsx";
import Skills from "./components/skills/Skills.jsx";
import Academic from "./components/Academic/Academic";
import Projects from "./components/portfolio/Projects";
import Work from "./components/Academic/Work";
import Divers from "./components/divers/Divers";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/Footer";
import { Fade } from "react-reveal";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Fade>
        <Home id="/" />
      </Fade>
      <Fade>
        <About id="About" />
      </Fade>
      <Fade>
        <Skills id="Skills"></Skills>
      </Fade>

      <Fade>
        <Academic id="Academic" />
      </Fade>

      <Fade>
        <Work id="Work" />
      </Fade>

      <Fade>
        <Projects id="projects" />
      </Fade>

      <Fade>
        <Divers id="Interests" />
      </Fade>

      <Fade>
        <Contact id="Contact" />
      </Fade>

      <div className="bg-world">
        <Footer />
      </div>
    </div>
  );
}

export default App;
