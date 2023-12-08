import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen p-8">
      <div className="max-w-[1400px] w-1/4 mx-auto">
        <ul className="flex justify-between items-center">
          <li className="bg-pinky rounded-full px-6 py-2">
            <a href="">home</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">work</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
