import { useEffect, useRef, useState } from "react";

import "./App.css";
import TextImg from "./assets/text1.webp";

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
import ReactGA from "react-ga4";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Without the ID (e.g. local dev without .env) initialize() throws and the app never mounts
const gaId = import.meta.env.VITE_GA_ID;
if (gaId) {
  ReactGA.initialize(gaId);
}

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
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });

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

  // Cursor effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
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

  // Scroll animations (desktop). All values are measured against the section's
  // top, so they keep working no matter how many cards there are.
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cardsLayout, setCardsLayout] = useState({ overflow: 0, height: 0 });
  const cardsOverflow = useRef(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!isDesktopOrLaptop) return;
    const measure = () => {
      if (!cardsRef.current) return;
      const overflow = Math.max(
        0,
        cardsRef.current.scrollWidth - window.innerWidth + 80,
      );
      cardsOverflow.current = overflow;
      // + 40px for the row's mb-10
      setCardsLayout({ overflow, height: cardsRef.current.offsetHeight + 40 });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isDesktopOrLaptop]);

  // Scroll distance (in viewport heights) since the section reached the top
  const scrolledIntoSection = (y: number) => {
    if (!sectionRef.current) return 0;
    const sectionTop = sectionRef.current.getBoundingClientRect().top + y;
    return (y - sectionTop) / window.innerHeight;
  };

  // The cards row sticks at top 30% once the 55vh hero is 25vh past the top,
  // then moves sideways 1px per 1px scrolled until the last card is in view
  const x = useTransform(scrollY, (y) => {
    const scrolled = (scrolledIntoSection(y) - 0.25) * window.innerHeight;
    return -Math.min(Math.max(scrolled, 0), cardsOverflow.current);
  });
  const scaleProgress = useTransform(scrollY, (y) => {
    const v = scrolledIntoSection(y);
    return Math.min(Math.max((1.85 - v) / (1.85 - 0.88), 0), 1);
  });
  const opacityProgress = useTransform(scrollY, (y) => {
    const v = scrolledIntoSection(y);
    return Math.min(Math.max((1.37 - v) / (1.37 - 0.24), 0), 1);
  });

  // Hero (55vh) + the sticky cards row + the sideways distance + a short pause at the end
  const sectionHeight = cardsLayout.height
    ? `calc(55vh + ${cardsLayout.height + cardsLayout.overflow + 200}px)`
    : "190vh";

  //load screen
  useEffect(() => {
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.classList.add("slide-up");
      }
    }, 1300);
  }, []);

  return (
    <>
      <div className="font-work lg:cursor-none">
        {isTabletOrMobile ? <MobileNav /> : <Navbar />}
        <TitleChanger />
        {isDesktopOrLaptop && (
          <section
            ref={sectionRef}
            style={{ height: sectionHeight }}
            className="relative flex flex-col"
          >
            <motion.div
              style={{
                scale: scaleProgress,
                opacity: opacityProgress,
              }}
              className=" sticky top-[-20%] h-[55vh]"
            >
              <Hero isDark={isDark} onThemeChange={handleThemeChange} />
            </motion.div>
            <div className="sticky top-[30%]">
              <Slide direction="up" triggerOnce>
                <motion.div style={{ x }} className="mb-10" id="about">
                  {/* Slide overrides its child's ref, so measure this inner row */}
                  <div ref={cardsRef} className="flex gap-8">
                    <AboutCards />
                  </div>
                </motion.div>
              </Slide>
            </div>
          </section>
        )}

        {!isDesktopOrLaptop && (
          <section className="flex flex-col gap-4 sm:gap-10">
            <Hero isDark={isDark} onThemeChange={handleThemeChange} />

            <div className="my-10 flex gap-3 overflow-x-scroll" id="about">
              <AboutCards />
            </div>
          </section>
        )}

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
        <motion.div
          variants={variants}
          animate="default"
          transition={{ duration: 0.01 }}
          className="pointer-events-none fixed left-0 top-0 z-[60] h-4 w-4 rounded-full border-[1px] border-white bg-black opacity-70 dark:border-black dark:bg-white dark:opacity-80 max-lg:hidden"
        />
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
