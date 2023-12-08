import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-screen flex justify-center py-3">
      <div className="max-w-[1400px] w-1/4 ">
        <ul className="flex justify-around items-center h-14 gap-x-8">
          <li className="group nav-btn hover:bg-pinky transition-all duration-500 ease-in-out">
            <a href="">home</a>
            <FaArrowRight className="nav-icon" />
          </li>
          <li className="group nav-btn hover:bg-pinky transition-all duration-500 ease-in-out">
            <a href="">about</a>
            <FaArrowRight className="nav-icon" />
          </li>
          <li className="group nav-btn hover:bg-pinky transition-all duration-500 ease-in-out">
            <a href="">work</a>
            <FaArrowRight className="nav-icon" />
          </li>
          <li className="group nav-btn hover:bg-pinky transition-all duration-500 ease-in-out">
            <a href="">contact</a>
            <FaArrowRight className="nav-icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
