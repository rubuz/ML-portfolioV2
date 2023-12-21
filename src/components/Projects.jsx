import React, { useState } from "react";
import Project1 from "../assets/project1.png";
import Marquee from "react-fast-marquee";
import MarqueeText from "./MarqueeText";
import ProjectText from "./ProjectText";
import Button from "./Button";

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

  return (
    <section
      id="work"
      className="w-full bg-greeny rounded-t-[2rem] pb-[10.5rem]"
    >
      <div>
        <Marquee autoFill speed={130}>
          <MarqueeText />
        </Marquee>
      </div>
      <div className="w-[75%] mx-auto grid grid-cols-[55%_auto] gap-10 items-center">
        <div className="w-full bg-transparent rounded-[2rem] border-[3px] p-9 border-black flex flex-col justify-between gap-12">
          <div className="flex gap-2 dot-container">
            <div className="w-6 h-6 rounded-full border-[3px] border-black transition-all duration-500 project-dot"></div>
            <div className="w-6 h-6 rounded-full border-[3px] border-black transition-all duration-500 project-dot"></div>
            <div className="w-6 h-6 rounded-full border-[3px] border-black transition-all duration-500 project-dot"></div>
          </div>
          <div
            className="w-full project-img rounded-2xl hover:scale-[104%] transition-all duration-1000 relative overflow-hidden group"
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
            <div className="absolute top-0 right-0 z-10 w-full h-full bg-black/80 rounded-2xl translate-y-0 group-hover:translate-y-0 transition-all duration-500">
              <div>
                <p className="text-white">{hoveredProject.title}</p>
                <p>{}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[85%] flex flex-col justify-between">
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
                circleColor={"bg-greeny"}
                textColor={"text-greeny"}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
