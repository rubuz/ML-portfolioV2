import { useRef } from "react";

import "./App.css";
import TextImg from "../src/assets/text1.webp";

import AboutCards from "./components/AboutCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TitleChanger from "./components/TitleChanger";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useScroll, useTransform, motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";

function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0.5 0.9", "1.5 1"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0, 0]);

  return (
    <div className="font-work">
      <Navbar />
      <TitleChanger />
      <section ref={targetRef} className="relative h-[190vh] flex flex-col">
        <motion.div
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          className=" sticky top-[-20%] h-[55vh]"
        >
          <Slide direction="left" triggerOnce="true">
            <Hero />
          </Slide>
        </motion.div>
        <Slide direction="up" triggerOnce="true" className="sticky top-[30%]">
          <motion.div style={{ x }} className="flex gap-8 mb-10" id="about">
            <AboutCards />
          </motion.div>
        </Slide>
      </section>
      <Projects />
      <Contact />
      <Slide
        direction="up"
        triggerOnce="true"
        className="lg:w-1/2 w-2/3 mx-auto py-32"
      >
        <a href="#">
          <img src={TextImg} alt="Img with text LOVENJAK" />
        </a>
      </Slide>
      <Footer />
    </div>
  );
}

export default App;
