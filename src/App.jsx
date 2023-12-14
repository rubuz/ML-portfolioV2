import { useRef } from "react";
import "./App.css";
import AboutCards from "./components/AboutCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TitleChanger from "./components/TitleChanger";
import { useScroll, useTransform, motion } from "framer-motion";

function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <div className="font-work">
      <Navbar />
      {/* <TitleChanger /> */}{" "}
      <s ection ref={targetRef} className="relative h-[160vh] flex flex-col">
        <div className="sticky -top-32">
          <Hero />
        </div>
        <div className="sticky top-[55%]">
          <motion.div style={{ x }} className="flex gap-8 mb-10">
            <AboutCards />
          </motion.div>
        </div>{" "}
      </s>
      <div className="w-full h-[1900px] bg-purple-800">TEST</div>{" "}
    </div>
  );
}

export default App;
