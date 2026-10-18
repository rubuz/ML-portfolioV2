import { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LiaAsteriskSolid } from "react-icons/lia";
import ProjectText from "./ProjectText";
import Button from "./Button";
import VelocityMarquee from "../motion/VelocityMarquee";
import { RevealUp } from "../motion/Reveal";
import { useFrame, useMotion } from "../motion/motionContext";
import { colorClasses, colorHex, projectsInfo } from "./projectsInfo";

// After a hover/focus/tap, scroll doesn't change the active project for this
// long, and not until the page has actually scrolled a bit
const HOVER_PRIORITY_MS = 900;
const HOVER_RELEASE_PX = 20;

const Projects = () => {
  const { reduced } = useMotion();
  const [active, setActive] = useState(0);
  // Touch screens open the details with a button (no hover there)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const lastHover = useRef({ time: -Infinity, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const onScreen = useRef(false);
  // Scroll position of the last measurement; the active item can only
  // change when this does
  const checkedY = useRef(NaN);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      onScreen.current = entry.isIntersecting;
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const project = projectsInfo[active];
  const colors = colorClasses[project.color];
  const bg = colorHex[project.color];

  // `time` is the event's timeStamp (same clock as performance.now())
  const select = (index: number, time: number) => {
    lastHover.current = { time, y: window.scrollY };
    if (index === active) return;
    setActive(index);
    setIsDetailsOpen(false);
  };

  // The item whose center is closest to the middle of the screen (lower on
  // small screens, where the sticky frame covers the top) becomes active
  useFrame(({ y, vh, vw }) => {
    const hover = lastHover.current;
    if (
      !onScreen.current ||
      y === checkedY.current ||
      performance.now() - hover.time < HOVER_PRIORITY_MS ||
      Math.abs(y - hover.y) < HOVER_RELEASE_PX ||
      !listRef.current
    )
      return;
    checkedY.current = y;
    const target = vw < 1024 ? vh * 0.75 : vh * 0.5;
    let best = -1;
    let bestDistance = Infinity;
    listRef.current
      .querySelectorAll("[data-project-item]")
      .forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const distance = Math.abs((rect.top + rect.bottom) / 2 - target);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      });
    if (best >= 0 && best !== active) {
      setActive(best);
      setIsDetailsOpen(false);
    }
  });

  // Only the active project's video plays; none under reduced motion
  useEffect(() => {
    screenRef.current?.querySelectorAll("video").forEach((video) => {
      const isActive = Number(video.dataset.index) === active;
      if (isActive && !reduced) video.play().catch(() => {});
      else video.pause();
    });
  }, [active, reduced]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative z-1 overflow-x-clip rounded-4xl pb-[200px] text-black transition-colors duration-[400ms]"
      style={{ backgroundColor: bg }}
    >
      <div className="py-7">
        <VelocityMarquee>
          <div className="flex items-center gap-6 pr-6 text-[52px] tracking-[-0.02em] whitespace-nowrap lg:gap-10 lg:pr-10 lg:text-[96px]">
            <LiaAsteriskSolid className="animate-spin-slow" />
            <span>my projects</span>
          </div>
        </VelocityMarquee>
      </div>
      <h2 className="sr-only">My projects</h2>

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-10 px-4 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-[72px]">
        {/* Sticky frame; its background matches the section so the list scrolls under it on mobile */}
        <div
          className="sticky top-16 z-4 transition-colors duration-[400ms] lg:top-[120px]"
          style={{ backgroundColor: bg }}
        >
          <RevealUp>
            <div className="project-frame flex flex-col gap-4 rounded-4xl border-[3px] border-black p-4 sm:gap-6 sm:p-7">
              <div className="flex gap-2" aria-hidden="true">
                {[0, 1, 2].map((dot) => (
                  <span key={dot} className="project-dot" />
                ))}
              </div>
              <div
                ref={screenRef}
                tabIndex={0}
                data-cursor="view"
                aria-label="Project preview – hover or focus for details"
                className={`project-screen ${isDetailsOpen ? "details-open" : ""}`}
              >
                {projectsInfo.map((p, i) => (
                  <div
                    key={p.id}
                    className={`project-shot ${i === active ? "is-active" : ""}`}
                  >
                    {p.video ? (
                      <video
                        data-index={i}
                        loop
                        muted
                        playsInline
                        poster={p.poster}
                        preload={i === active ? "auto" : "none"}
                      >
                        <source src={p.video} type="video/mp4" />
                        {p.videoWebm && (
                          <source src={p.videoWebm} type="video/webm" />
                        )}
                      </video>
                    ) : (
                      <img
                        src={p.image}
                        alt={`Screenshot of ${p.title}`}
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
                <div className="project-detail">
                  <p className="text-2xl leading-none font-semibold sm:text-[44px]">
                    {project.title}
                  </p>
                  <p className="max-w-[440px] text-sm leading-[1.4] sm:text-base">
                    {project.description}
                  </p>
                  <p className="text-sm sm:text-[15px]">
                    <span className="font-semibold">Tech stack:</span>{" "}
                    {project.tech}
                  </p>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-4 text-xl font-semibold hover:underline sm:text-2xl ${colors.text}`}
                    >
                      LINK <FaArrowLeftLong className="animate-bounce-left" />
                    </a>
                  ) : (
                    project.internal && (
                      <p className={`text-[19px] font-bold ${colors.text}`}>
                        Internal project · Adria Mobil (Trigano Group)
                      </p>
                    )
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setIsDetailsOpen((open) => !open)}
                  aria-expanded={isDetailsOpen}
                  className="project-details-toggle"
                >
                  {isDetailsOpen ? "Close" : "Details"}
                </button>
              </div>
            </div>
          </RevealUp>
        </div>

        <div ref={listRef} className="flex flex-col">
          {projectsInfo.map((p, i) => (
            <ProjectText
              key={p.id}
              number={i + 1}
              group={p.group}
              title={p.title}
              isActive={i === active}
              onSelect={(time) => select(i, time)}
            />
          ))}
          <div className="pt-10">
            <Button
              href="https://github.com/rubuz"
              external
              text="View all"
              bgColor="bg-black"
              iconColor="text-black"
              circleColor={colors.bg}
              textColor={colors.text}
              cursorLabel="github"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
