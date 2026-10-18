import { useEffect, useState } from "react";

import MobileNavMenuBtn from "./MobileNavMenuBtn";
import { BsArrowRight } from "react-icons/bs";
import { navLinks } from "./navLinks";
import { useHideOnScroll } from "../motion/useHideOnScroll";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useHideOnScroll<HTMLDivElement>(isMenuOpen);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <div ref={headerRef} className="site-nav frosted sticky top-0 z-50">
      {/* .mobile-menu hides the closed menu (visibility), keeping its links out of the tab order */}
      <div
        id="mobile-menu"
        onClick={() => setIsMenuOpen(false)}
        className={`mobile-menu fixed top-0 left-0 ${
          isMenuOpen ? "is-open" : ""
        } flex h-screen w-full flex-col items-end bg-black px-3 pt-24 text-white dark:bg-white dark:text-black`}
      >
        <ul className="flex flex-col gap-10">
          {navLinks.map((link, index) => (
            <li
              key={link.label}
              className="menu-item"
              style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
            >
              <a
                href={link.href}
                className="flex items-center justify-end gap-3 text-3xl"
              >
                {link.label}
                <BsArrowRight className="-rotate-45" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <nav className="z-30 flex w-full items-center justify-between px-3 py-4">
        <div className="z-30 text-2xl font-bold tracking-tighter">
          <a
            className={`${
              isMenuOpen
                ? "text-white dark:text-black"
                : "text-black dark:text-white"
            } inline-flex min-h-11 min-w-11 items-center transition-colors delay-100 duration-200`}
            href="#top"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Back to top"
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
