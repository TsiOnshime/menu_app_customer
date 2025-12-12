import React from "react";
import Hero from "./components/Hero";
import About from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="min-h-screen text-gray-800 font-sans">


      <main className="">
        <Navbar />
        <Hero />
        <div className="">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Testimonials />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
