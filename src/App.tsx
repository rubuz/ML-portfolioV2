import { useEffect, useRef, useState } from "react";

import TextImg from "./assets/text1.webp";

import AboutCards from "./components/AboutCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TitleChanger from "./components/TitleChanger";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Slide } from "react-awesome-reveal";
import { useMediaQuery } from "./hooks/useMediaQuery";
import MobileNav from "./components/MobileNav";
import Cursor from "./motion/Cursor";
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

  // Scroll animations (desktop). All values are measured against the section's
  // top, so they keep working no matter how many cards there are.
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cardsLayout, setCardsLayout] = useState({ overflow: 0, height: 0 });
  const cardsOverflow = useRef(0);

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

  // Scroll-linked styles are written straight to the DOM once per frame,
  // so scrolling never re-renders React
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDesktopOrLaptop) return;
    let frame = 0;
    const clamp01 = (n: number) => Math.min(Math.max(n, 0), 1);

    const update = () => {
      frame = 0;
      if (!sectionRef.current) return;
      const vh = window.innerHeight;
      // Viewport heights scrolled since the section's top reached the top of the screen
      const scrolled = -sectionRef.current.getBoundingClientRect().top / vh;

      if (heroRef.current) {
        heroRef.current.style.transform = `scale(${clamp01((1.85 - scrolled) / (1.85 - 0.88))})`;
        heroRef.current.style.opacity = String(
          clamp01((1.37 - scrolled) / (1.37 - 0.24)),
        );
      }
      // The cards row sticks at top 30% once the 55vh hero is 25vh past the top,
      // then moves sideways 1px per 1px scrolled until the last card is in view
      if (cardsRef.current) {
        const shift = Math.min(
          Math.max((scrolled - 0.25) * vh, 0),
          cardsOverflow.current,
        );
        cardsRef.current.style.transform = `translateX(${-shift}px)`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isDesktopOrLaptop, cardsLayout]);

  // Hero (55vh) + the sticky cards row + the sideways distance + a short pause at the end
  const sectionHeight = cardsLayout.height
    ? `calc(55vh + ${cardsLayout.height + cardsLayout.overflow + 200}px)`
    : "190vh";

  // Load screen: slide it away shortly after mount, then remove it from the DOM
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      preloader.remove();
      return;
    }

    const onAnimationEnd = (e: AnimationEvent) => {
      // Ignore the text's own animation bubbling up
      if (e.target === preloader) preloader.remove();
    };
    preloader.addEventListener("animationend", onAnimationEnd);
    const timeout = setTimeout(() => preloader.classList.add("slide-up"), 500);

    return () => {
      clearTimeout(timeout);
      preloader.removeEventListener("animationend", onAnimationEnd);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor font-work">
        {isDesktopOrLaptop ? <Navbar /> : <MobileNav />}
        <TitleChanger />
        {isDesktopOrLaptop && (
          <section
            ref={sectionRef}
            style={{ height: sectionHeight }}
            className="relative flex flex-col"
          >
            <div ref={heroRef} className="sticky top-[-20%] h-[55vh]">
              <Hero isDark={isDark} onThemeChange={handleThemeChange} />
            </div>
            <div className="sticky top-[30%]">
              <Slide direction="up" triggerOnce>
                <div className="mb-10" id="about">
                  {/* Slide overrides its child's ref, so measure and move this inner row */}
                  <div ref={cardsRef} className="flex gap-8">
                    <AboutCards />
                  </div>
                </div>
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
        <Cursor />
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
