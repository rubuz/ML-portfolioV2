import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import MarqueeText from "./MarqueeText";
import ProjectText from "./ProjectText";
import Button from "./Button";

import { FaArrowLeftLong } from "react-icons/fa6";

import { projectsInfo } from "./projectsInfo";

const Projects = () => {
  const projectDot = document.querySelector(".dot-container");
  const dots = document.querySelectorAll(".project-dot");
  const [hoveredProject, setHoveredProject] = useState(projectsInfo[0]);

  const handleHoverProject = (project) => {
    setHoveredProject(project);
  };

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

  const handleBGChange = () => {
    switch (hoveredProject.id) {
      case 1:
        return "greeny";
      case 2:
        return "yellowy";
      case 3:
        return "bluey";
      case 4:
        return "olivy";
    }
  };

  return (
    <section
      id="work"
      className={`w-full bg-${handleBGChange()} rounded-t-[2rem] pb-[10.5rem] transition-all duration-300`}
    >
      <div>
        <Marquee autoFill speed={130}>
          <MarqueeText />
        </Marquee>
      </div>
      <div className="xl:w-[75%] mx-auto grid xl:grid-cols-[55%_auto] gap-10 items-center md:grid-cols-1 w-[85%]">
        <div className="w-full bg-transparent rounded-[2rem] border-[3px] p-9 border-black flex flex-col justify-between gap-12">
          <div className="flex gap-2 dot-container">
            <div className="w-6 h-6 rounded-full border-[3px] border-black transition-all duration-500 project-dot"></div>
            <div className="w-6 h-6 rounded-full border-[3px] border-black transition-all duration-500 project-dot"></div>
            <div className="w-6 h-6 rounded-full border-[3px] border-black transition-all duration-500 project-dot"></div>
          </div>
          <div
            className="w-full project-img rounded-2xl hover:scale-[105%] transition-all duration-1000 relative overflow-hidden group"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <img
                src={hoveredProject ? hoveredProject.image : ""}
                alt=""
                className="object-contain rounded-2xl  "
              />
            </div>
            <div className="absolute top-0 right-0 z-10 w-full h-full bg-black/90 rounded-2xl p-9 flex items-end translate-y-full group-hover:translate-y-0 transition-all duration-500">
              <div className="flex flex-col gap-4 text-white">
                <p className="text-6xl font-semibold">{hoveredProject.title}</p>
                <p className="max-w-[65%] text-lg">
                  {hoveredProject.description}
                </p>
                <div className="text-lg">
                  <p className="font-medium">Tech stack:</p>
                  <p>{hoveredProject.tech}</p>
                </div>
                <a
                  href={hoveredProject.url}
                  target="_blank"
                  className={`text-2xl font-semibold hover:underline text-${handleBGChange()} transition-all duration-500 flex items-center gap-4`}
                >
                  DEMO <FaArrowLeftLong className="animate-bounce-left" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80%] flex flex-col justify-between xl:gap-5 gap-10">
          {projectsInfo.map((project) => (
            <ProjectText
              group={project.group}
              title={project.title}
              key={project.id}
              onMouseEnter={() => {
                handleHoverProject(project);
              }}
            />
          ))}
          {/* <ProjectText group={"Web page"} title={"L&T Moto"} />
          <ProjectText group={"Web page"} title={"ntRoot"} />
          <ProjectText group={"Utility web app"} title={"Test drive survey"} />
          <ProjectText group={"Utility web app"} title={"Travel report"} /> */}
          <div className="w-60">
            <a
              href="https://github.com/rubuz"
              target="_blank"
              alt="Link to github repository"
            >
              <Button
                text={"View all"}
                bgColor={"bg-black"}
                iconColor={"text-black"}
                circleColor={`bg-${handleBGChange()}`}
                textColor={`text-${handleBGChange()}`}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
