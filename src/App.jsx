import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home.jsx";
import AboutMe from "./components/Aboutme";
import Skills from "./components/Skills.jsx"; 
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="scroll-mt-20">
        <Home />
      </section>

      <section id="about" className="scroll-mt-20">
        <AboutMe />
      </section>

      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
