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
        className={`fixed top-0 left-0 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition duration-500 w-full h-screen bg-black dark:bg-white flex flex-col items-end px-3 pt-24 text-white dark:text-black`}
      >
        <ul className="flex flex-col gap-10">
          <Fade direction="down" delay="0" duration="700">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 text-3xl justify-end"
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
                className="flex items-center gap-3 text-3xl justify-end"
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
                className="flex items-center gap-3 text-3xl justify-end"
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
                className="flex items-center gap-3 text-3xl justify-end"
              >
                contact
                <BsArrowRight className="rotate-[-45deg]" />
              </a>
            </li>
          </Fade>
        </ul>
      </div>
      <nav
        className={`w-full flex justify-between px-3 items-center bg-white dark:bg-black z-30 transition-all duration-300 ${
          isScrolled ? "border-b-2 border-black dark:border-white py-2" : "py-6"
        }`}
      >
        <div className="text-2xl tracking-tighter font-bold z-30">
          <a
            className={`${
              isMenuOpen
                ? "text-white dark:text-black"
                : "text-black dark:text-white"
            } transition-colors duration-500 delay-50`}
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
