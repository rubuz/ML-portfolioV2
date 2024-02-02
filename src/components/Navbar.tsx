import { FaArrowRight } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const Navbar = () => {
  return (
    <nav className="flex w-screen justify-center py-10">
      <div className="w-1/4 max-w-[1400px] ">
        <ul className="flex h-14 items-center justify-around gap-x-8 text-lg dark:text-white">
          <Slide direction="down" triggerOnce delay={130}>
            <li className="nav-btn group transition-all duration-500 ease-in-out hover:bg-pinky">
              <a href="#">home</a>
              <FaArrowRight className="nav-icon" />
            </li>
          </Slide>
          <Slide direction="down" triggerOnce delay={145}>
            <li className="nav-btn group transition-all duration-500 ease-in-out hover:bg-pinky">
              <a href="#about">about</a>
              <FaArrowRight className="nav-icon" />
            </li>
          </Slide>
          <Slide direction="down" triggerOnce delay={160}>
            <li className="nav-btn group transition-all duration-500 ease-in-out hover:bg-pinky">
              <a href="#work">work</a>
              <FaArrowRight className="nav-icon" />
            </li>
          </Slide>
          <Slide direction="down" triggerOnce delay={175}>
            <li className="nav-btn group transition-all duration-500 ease-in-out hover:bg-pinky">
              <a href="#contact">contact</a>
              <FaArrowRight className="nav-icon" />
            </li>
          </Slide>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
