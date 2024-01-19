import { useEffect, useState } from "react";

import MobileNavMenuBtn from "./MobileNavMenuBtn";
import { BsArrowRight } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const MobileNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
    else setIsMenuOpen(true);
  };

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    document.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10">
      <div
        onClick={handleOpenMenu}
        className={`fixed left-0 top-0 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } flex h-screen w-full flex-col items-end bg-black px-3 pt-24 text-white transition duration-500 dark:bg-white dark:text-black`}
      >
        <ul className="flex flex-col gap-10">
          <Fade direction="down" delay="0" duration="700">
            <li>
              <a
                href="#"
                className="flex items-center justify-end gap-3 text-3xl"
              >
                home
                <BsArrowRight className="rotate-[-45deg]" />
              </a>
            </li>
          </Fade>
          <Fade direction="down" delay="20" duration="700">
            <li>
              <a
                href="#about"
                className="flex items-center justify-end gap-3 text-3xl"
              >
                about
                <BsArrowRight className="rotate-[-45deg]" />
              </a>
            </li>
          </Fade>
          <Fade direction="down" delay="40" duration="700">
            <li>
              <a
                href="#work"
                className="flex items-center justify-end gap-3 text-3xl"
              >
                work
                <BsArrowRight className="rotate-[-45deg]" />
              </a>
            </li>
          </Fade>
          <Fade direction="down" delay="60" duration="700">
            <li>
              <a
                href="#contact"
                className="flex items-center justify-end gap-3 text-3xl"
              >
                contact
                <BsArrowRight className="rotate-[-45deg]" />
              </a>
            </li>
          </Fade>
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
            } delay-50 transition-colors duration-500`}
            href="#"
          >
            <span className="text-pinky">M</span>L
          </a>
        </div>
        <div className="z-30">
          <MobileNavMenuBtn open={handleOpenMenu} openState={isMenuOpen} />
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
