import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const Navbar = () => {
  return (
    <nav className="w-screen flex justify-center py-8">
      <div className="max-w-[1400px] w-1/4 ">
        <ul className="flex justify-around items-center h-14 gap-x-8">
          <Slide direction="down" triggerOnce="true">
            <li className="group nav-btn hover:bg-pinky transition-all duration-500 ease-in-out">
              <a href="#">home</a>
              <FaArrowRight className="nav-icon" />
            </li>
          </Slide>
          <Slide direction="down" triggerOnce="true" delay="15">
            <li className="group nav-btn hover:bg-pinky transition-all duration-500 ease-in-out">
              <a href="#about">about</a>
              <FaArrowRight className="nav-icon" />
            </li>
          </Slide>
          <Slide direction="down" triggerOnce="true" delay="30">
            <li className="group nav-btn hover:bg-pinky transition-all duration-500 ease-in-out">
              <a href="#work">work</a>
              <FaArrowRight className="nav-icon" />
            </li>
          </Slide>
          <Slide direction="down" triggerOnce="true" delay="45">
            <li className="group nav-btn hover:bg-pinky transition-all duration-500 ease-in-out">
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
