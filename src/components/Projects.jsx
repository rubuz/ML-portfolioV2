import React from "react";
import Project1 from "../assets/project1.png";
import Marquee from "react-fast-marquee";
import MarqueeText from "./MarqueeText";

const Projects = () => {
  const projectDot = document.querySelector(".dot-container");
  const handleHover = () => {
    if (projectDot) {
      projectDot.classList.add("hoverd");
    }
  };

  const handleMouseLeave = () => {
    if (projectDot) {
      projectDot.classList.remove("hoverd");
    }
  };

  return (
    <section className="w-full  bg-greeny rounded-t-[2rem]">
      <div>
        <Marquee autoFill speed={130}>
          <MarqueeText />
        </Marquee>
      </div>
      <div className="w-[75%] mx-auto grid grid-cols-[60%_auto] gap-10">
        <div className="w-full bg-transparent rounded-[2rem] border-[3px] p-9 border-black flex flex-col justify-between gap-12">
          <div className="flex gap-2 dot-container">
            <div className="w-6 h-6 rounded-full border-[3px] border-black transition-all duration-500 project-dot"></div>
            <div className="w-6 h-6 rounded-full border-[3px] border-black transition-all duration-500 project-dot"></div>
            <div className="w-6 h-6 rounded-full border-[3px] border-black transition-all duration-500 project-dot"></div>
          </div>
          <div
            className="w-full project-img cursor-pointer"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={Project1}
              alt=""
              className="object-contain rounded-2xl hover:scale-[104%] transition-all duration-1000"
            />
          </div>
        </div>
        <div>BOX2</div>
      </div>
    </section>
  );
};

export default Projects;
