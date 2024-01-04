import { useEffect, useState } from "react";
import MobileNavMenuBtn from "./MobileNavMenuBtn";

const MobileNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);

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
    <div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/40 flex flex-col items-center justify-center text-white z-10">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      )}
      <nav
        className={`w-full flex justify-between px-3 items-center sticky top-0 bg-white z-10 transition-all duration-300 ${
          isScrolled ? "border-b-2 border-black py-2" : "py-6"
        }`}
      >
        <div className="text-2xl tracking-tighter font-bold">
          <a className="text-black" href="#">
            <span className="text-pinky">M</span>L
          </a>
        </div>
        <div>
          <MobileNavMenuBtn open={handleOpenMenu} />
        </div>{" "}
      </nav>
    </div>
  );
};

export default MobileNav;
