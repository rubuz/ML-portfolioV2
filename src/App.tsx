import { useEffect, useState } from "react";

import TextImg from "./assets/text1.webp";

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Slide } from "react-awesome-reveal";
import { useMediaQuery } from "./hooks/useMediaQuery";
import MobileNav from "./components/MobileNav";
import Cursor from "./motion/Cursor";
import Preloader from "./motion/Preloader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
  } catch {
    // Storage blocked, fall back to the system preference
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

function App() {
  // One breakpoint for both nav and layout (Tailwind's lg)
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1024px)");

  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleThemeChange = (dark: boolean) => {
    setIsDark(dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // Storage blocked, the theme just won't be remembered
    }
  };

  return (
    <>
      <div className="custom-cursor font-work">
        <Preloader />
        {isDesktopOrLaptop ? <Navbar /> : <MobileNav />}
        <Hero isDark={isDark} onThemeChange={handleThemeChange} />
        <About />

        <Projects />
        <Contact />
        <Slide
          direction="up"
          triggerOnce
          className="mx-auto w-2/3 py-14 sm:py-32 lg:w-1/2"
        >
          <a href="#">
            <img
              src={TextImg}
              className="white-pic"
              alt="LOVENJAK, back to top"
            />
          </a>
        </Slide>
        <Footer />
        <Cursor />
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
