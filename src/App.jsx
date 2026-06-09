import { useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GradientBackground from "./components/GradientBackground";
import ScrollButton from "./components/ScrollButton";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import "./App.css";

function App() {
    const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);
    const colorA = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  ["#00c6ff", "#7f5af0", "#00ff99"]
);

const colorB = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  ["#004e92", "#3f37c9", "#00b894"]
);
  
  useEffect(() => {
  const lenis = new Lenis();


  window.lenis = lenis;
 
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);
  return (
    <>
      <GradientBackground
        colorA={colorA}
        colorB={colorB}
      />

      <Navbar />
      <ScrollButton />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;