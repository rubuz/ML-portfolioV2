import { useEffect, useState } from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useMediaQuery } from "./hooks/useMediaQuery";
import MobileNav from "./components/MobileNav";
import Cursor from "./motion/Cursor";
import Preloader from "./motion/Preloader";
import AmbientBackground from "./motion/AmbientBackground";
import { AMBIENT_BG } from "./motion/tokens";
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
        {AMBIENT_BG && <AmbientBackground />}
        {isDesktopOrLaptop ? <Navbar /> : <MobileNav />}
        <Hero isDark={isDark} onThemeChange={handleThemeChange} />
        <About />

        <Projects />
        <Contact />
        <Footer />
        <Cursor />
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
