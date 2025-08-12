import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import AboutMe from "./components/Aboutme";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import Footer from "./components/Footer";

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

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
