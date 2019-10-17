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

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Home />
      <About />
      <Skills></Skills>
      <Academic />
      <Work></Work>
      <Projects></Projects>
      <Divers />
      <Contact></Contact>

      <div className="bg-world">
        <Footer />
      </div>
    </div>
  );
}

export default App;
