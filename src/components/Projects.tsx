import { useState } from "react";
import Marquee from "react-fast-marquee";
import MarqueeText from "./MarqueeText";
import ProjectText from "./ProjectText";
import Button from "./Button";

import { FaArrowLeftLong } from "react-icons/fa6";

import { projectsInfo } from "./projectsInfo";

type ProjectsInfo = {
  id: number;
  image?: string;
  group: string;
  title: string;
  url: string;
  description: string;
  tech: string;
  video?: string;
};

const Projects = () => {
  const projectDot = document.querySelector(".dot-container");
  const [hoveredProject, setHoveredProject] = useState<ProjectsInfo>(
    projectsInfo[0],
  );

  const handleHoverProject = (project: ProjectsInfo) => {
    setHoveredProject(project as ProjectsInfo);
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
      <div className="py-4">
        <Marquee autoFill speed={130}>
          <MarqueeText />
        </Marquee>
      </div>
      <div className="mx-auto grid w-[95%] items-center gap-0 sm:mb-0 sm:w-[85%] sm:gap-10 md:grid-cols-1 xl:w-[75%] xl:grid-cols-[55%_auto]">
        <div className="flex w-full flex-col justify-between gap-4 rounded-[2rem] border-[3px] border-black bg-transparent p-4 sm:gap-12 sm:p-9">
          <div className="dot-container flex gap-2">
            <div className="project-dot h-5 w-5 rounded-full border-[3px] border-black transition-all duration-500 sm:h-6 sm:w-6"></div>
            <div className="project-dot h-5 w-5 rounded-full border-[3px] border-black transition-all duration-500 sm:h-6 sm:w-6"></div>
            <div className="project-dot h-5 w-5 rounded-full border-[3px] border-black transition-all duration-500 sm:h-6 sm:w-6"></div>
          </div>
          <div
            className="project-img group relative w-full overflow-hidden rounded-2xl transition-all duration-1000 hover:scale-[105%]"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              {hoveredProject.video ? (
                <div>
                  <video
                    autoPlay
                    loop
                    muted
                    className="rounded-2xl object-contain"
                  >
                    <source src={hoveredProject.video} type="video/webm" />
                  </video>
                </div>
              ) : (
                <img
                  src={hoveredProject ? hoveredProject.image : ""}
                  alt="screenshot of project"
                  className="rounded-2xl object-contain"
                />
              )}
            </div>
            <div className="absolute right-0 top-0 z-10 flex h-full w-full translate-y-full items-end rounded-2xl bg-black/90 p-4 transition-all duration-300 group-hover:translate-y-0 sm:p-9">
              <div className="flex flex-col gap-4 text-white">
                <p className="text-3xl font-semibold sm:text-6xl">
                  {hoveredProject.title}
                </p>
                <p className="text-sm sm:max-w-[65%] sm:text-lg">
                  {hoveredProject.description}
                </p>
                <div className="text-sm sm:text-lg">
                  <p className="font-medium">Tech stack:</p>
                  <p>{hoveredProject.tech}</p>
                </div>
                <a
                  href={hoveredProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-xl font-semibold hover:underline sm:text-2xl text-${handleBGChange()} flex items-center gap-4 transition-all duration-500 ${hoveredProject.url === "/" ? "hidden" : "visible"}`}
                >
                  DEMO <FaArrowLeftLong className="animate-bounce-left" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[80%] flex-col justify-between gap-5">
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
          <div className="w-fit">
            <a href="https://github.com/rubuz" target="_blank" rel="noreferrer">
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
