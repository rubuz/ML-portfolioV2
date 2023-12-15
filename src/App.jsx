import { useRef } from "react";
import "./App.css";
import AboutCards from "./components/AboutCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TitleChanger from "./components/TitleChanger";
import { useScroll, useTransform, motion } from "framer-motion";
import Projects from "./components/Projects";

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
      <section
        ection
        ref={targetRef}
        className="relative h-[190vh] flex flex-col"
      >
        <motion.div
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          className=" sticky top-[-20%] h-[55vh]"
        >
          <Hero />
        </motion.div>
        <div className="sticky top-[30%]">
          <motion.div style={{ x }} className="flex gap-8 mb-10">
            <AboutCards />
          </motion.div>
        </div>
      </section>
      <Projects />
      <div className="w-full h-[1900px] bg-purple-800">TEST</div>{" "}
    </div>
  );
}

export default App;
