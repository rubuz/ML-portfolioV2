import { useEffect, useState } from "react";

import MobileNavMenuBtn from "./MobileNavMenuBtn";
import { BsArrowRight } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import { navLinks } from "./navLinks";
import { useMotion } from "../motion/motionContext";
import { useHideOnScroll } from "../motion/useHideOnScroll";

const MobileNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { replay } = useMotion();
  const headerRef = useHideOnScroll<HTMLDivElement>(isMenuOpen);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <div
      ref={headerRef}
      className="site-nav sticky top-0 z-50 transition-colors duration-[600ms]"
    >
      {/* `invisible` keeps the closed menu's links out of the tab order */}
      <div
        id="mobile-menu"
        onClick={() => setIsMenuOpen(false)}
        className={`fixed top-0 left-0 ${
          isMenuOpen ? "visible translate-y-0" : "invisible -translate-y-full"
        } flex h-screen w-full flex-col items-end bg-black px-3 pt-24 text-white transition-all duration-500 dark:bg-white dark:text-black`}
      >
        <ul className="flex flex-col gap-10">
          {navLinks.map((link, index) => (
            <Fade
              key={link.label}
              direction="down"
              delay={index * 20}
              duration={700}
            >
              <li>
                <a
                  href={link.href}
                  className="flex items-center justify-end gap-3 text-3xl"
                >
                  {link.label}
                  <BsArrowRight className="-rotate-45" aria-hidden="true" />
                </a>
              </li>
            </Fade>
          ))}
        </ul>
      </div>
      <nav
        className={`z-30 flex w-full items-center justify-between bg-white px-3 transition-all duration-300 dark:bg-black ${
          isScrolled
            ? "border-b-2 border-black py-2 dark:border-transparent"
            : "py-6"
        }`}
      >
        <div className="z-30 text-2xl font-bold tracking-tighter">
          <a
            className={`${
              isMenuOpen
                ? "text-white dark:text-black"
                : "text-black dark:text-white"
            } transition-colors delay-50 duration-500`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              replay();
            }}
            aria-label="Replay intro"
          >
            <span className="text-pinky">M</span>L
          </a>
        </div>
        <div className="z-30">
          <MobileNavMenuBtn onToggle={toggleMenu} isOpen={isMenuOpen} />
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
