import { FaArrowRight } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { navLinks } from "./navLinks";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-center py-10">
      <ul className="flex h-14 items-center justify-around gap-x-8 text-lg dark:text-white">
        {navLinks.map((link, index) => (
          <Slide
            key={link.label}
            direction="down"
            triggerOnce
            delay={130 + index * 15}
          >
            <li className="group nav-btn transition-all duration-500 ease-in-out hover:bg-pinky">
              <a href={link.href}>{link.label}</a>
              <FaArrowRight className="nav-icon" aria-hidden="true" />
            </li>
          </Slide>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
