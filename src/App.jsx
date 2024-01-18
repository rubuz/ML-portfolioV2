import { useEffect, useRef, useState } from "react";

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
import { useMediaQuery } from "react-responsive";
import MobileNav from "./components/MobileNav";

function App() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // Cursor effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
  };

  // Scroll animations
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0.6 0.9", "1.5 1"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0, 0]);

  //load screen
  useEffect(() => {
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      preloader.classList.add("slide-up");
    }, 1300);
  }, []);

  return (
    <div className="font-work lg:cursor-none">
      {isTabletOrMobile ? <MobileNav /> : <Navbar />}
      <TitleChanger />
      {isDesktopOrLaptop && (
        <section ref={targetRef} className="relative flex h-[190vh] flex-col">
          <motion.div
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
            className=" sticky top-[-20%] h-[55vh]"
          >
            <Hero />
          </motion.div>
          <Slide direction="up" triggerOnce="true" className="sticky top-[30%]">
            <motion.div style={{ x }} className="mb-10 flex gap-8" id="about">
              <AboutCards />
            </motion.div>
          </Slide>
        </section>
      )}

      {!isDesktopOrLaptop && (
        <section className="flex flex-col gap-4 sm:gap-10">
          <Hero />

          <div className="my-10 flex gap-3 overflow-x-scroll" id="about">
            <AboutCards />
          </div>
        </section>
      )}

      <Projects />
      <Contact />
      <Slide
        direction="up"
        triggerOnce="true"
        className="mx-auto w-2/3 py-14 sm:py-32 lg:w-1/2"
      >
        <a href="#">
          <img
            src={TextImg}
            className="white-pic"
            alt="Img with text LOVENJAK"
          />
        </a>
      </Slide>
      <Footer />
      <motion.div
        variants={variants}
        animate="default"
        transition={{ duration: 0.01 }}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-4 w-4 rounded-full border-[1px] border-white bg-black opacity-70 dark:border-black dark:bg-white dark:opacity-80 max-lg:hidden"
      />
    </div>
  );
}

export default App;
