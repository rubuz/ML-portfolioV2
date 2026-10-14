import { useState } from "react";
import Marquee from "react-fast-marquee";
import MarqueeText from "./MarqueeText";
import ProjectText from "./ProjectText";
import Button from "./Button";

import { FaArrowLeftLong, FaLock } from "react-icons/fa6";
import { useReducedMotion } from "../hooks/useReducedMotion";

import { colorClasses, projectsInfo, ProjectInfo } from "./projectsInfo";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<ProjectInfo>(
    projectsInfo[0],
  );
  const [isMediaHovered, setIsMediaHovered] = useState(false);
  // Hover opens the details on desktop; on touch screens and keyboard they open with this toggle
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const reduceMotion = useReducedMotion();

  const colors = colorClasses[activeProject.color];

  const selectProject = (project: ProjectInfo) => {
    if (project.id === activeProject.id) return;
    setActiveProject(project);
    setIsDetailsOpen(false);
  };

  return (
    <section
      id="work"
      className={`w-full ${colors.bg} rounded-t-[2rem] pb-[10.5rem] transition-all duration-300`}
    >
      <h2 className="sr-only">My projects</h2>
      <div className="py-4" aria-hidden="true">
        <Marquee autoFill speed={130} play={!reduceMotion}>
          <MarqueeText />
        </Marquee>
      </div>
      <div className="mx-auto grid w-[95%] items-center gap-0 sm:mb-0 sm:w-[85%] sm:gap-10 md:grid-cols-1 xl:w-[75%] xl:grid-cols-[55%_auto]">
        <div className="flex w-full flex-col justify-between gap-4 rounded-[2rem] border-[3px] border-black bg-transparent p-4 sm:gap-12 sm:p-9">
          <div className="flex gap-2" aria-hidden="true">
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                className={`h-5 w-5 rounded-full border-[3px] border-black transition-all duration-500 sm:h-6 sm:w-6 ${isMediaHovered ? "bg-black" : ""}`}
              ></div>
            ))}
          </div>
          <div
            className="group relative aspect-square max-h-[70vh] w-full overflow-hidden rounded-2xl transition-all duration-1000 lg:hover:scale-[105%]"
            onMouseEnter={() => setIsMediaHovered(true)}
            onMouseLeave={() => setIsMediaHovered(false)}
          >
            {/* Fixed square frame: media of any shape keeps the same height, so the list doesn't jump */}
            {activeProject.video ? (
              <video
                key={activeProject.video}
                autoPlay
                loop
                muted
                playsInline
                poster={activeProject.poster}
                className="h-full w-full rounded-2xl object-contain"
              >
                <source src={activeProject.video} type="video/mp4" />
                {activeProject.videoWebm && (
                  <source src={activeProject.videoWebm} type="video/webm" />
                )}
              </video>
            ) : activeProject.image ? (
              <img
                src={activeProject.image}
                alt={`Screenshot of ${activeProject.title}`}
                className="h-full w-full rounded-2xl object-contain"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl bg-black/10 p-6 text-center">
                <FaLock className="text-3xl sm:text-5xl" />
                <p className="text-3xl font-semibold tracking-tight sm:text-5xl">
                  {activeProject.title}
                </p>
              </div>
            )}
            <div
              className={`absolute right-0 top-0 z-10 flex h-full w-full flex-col overflow-y-auto rounded-2xl bg-black/90 p-4 pb-16 transition-all duration-300 sm:p-9 sm:pb-20 lg:pb-9 lg:group-focus-within:translate-y-0 lg:group-hover:translate-y-0 ${isDetailsOpen ? "translate-y-0" : "translate-y-full"}`}
            >
              <div className="mt-auto flex flex-col gap-2 text-white sm:gap-4">
                <p className="text-2xl font-semibold sm:text-6xl">
                  {activeProject.title}
                </p>
                <p className="text-sm sm:max-w-[65%] sm:text-lg">
                  {activeProject.description}
                </p>
                <div className="text-sm sm:text-lg">
                  <p className="font-medium">Tech stack:</p>
                  <p>{activeProject.tech}</p>
                </div>
                {activeProject.url ? (
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-4 text-xl font-semibold transition-all duration-500 hover:underline sm:text-2xl ${colors.text}`}
                  >
                    LINK <FaArrowLeftLong className="animate-bounce-left" />
                  </a>
                ) : (
                  activeProject.internal && (
                    <p
                      className={`text-sm font-medium sm:text-lg ${colors.text}`}
                    >
                      Internal project · Adria Mobil (Trigano Group)
                    </p>
                  )
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsDetailsOpen((open) => !open)}
              aria-expanded={isDetailsOpen}
              className="absolute bottom-3 right-3 z-20 rounded-full bg-black px-4 py-2 text-sm font-medium text-white lg:opacity-0 lg:focus-visible:opacity-100"
            >
              {isDetailsOpen ? "Close" : "Details"}
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 max-sm:mt-6">
          {projectsInfo.map((project) => (
            <ProjectText
              group={project.group}
              title={project.title}
              key={project.id}
              isActive={project.id === activeProject.id}
              onSelect={() => selectProject(project)}
            />
          ))}
          <div className="w-fit">
            <a href="https://github.com/rubuz" target="_blank" rel="noreferrer">
              <Button
                text={"View all"}
                bgColor={"bg-black"}
                iconColor={"text-black"}
                circleColor={colors.bg}
                textColor={colors.text}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
