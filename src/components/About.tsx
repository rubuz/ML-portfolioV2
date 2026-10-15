import { useEffect, useRef, useState } from "react";
import AboutCards from "./AboutCards";
import { RevealLines } from "../motion/Reveal";
import { useFrame, useMotion } from "../motion/motionContext";
import { useMediaQuery } from "../hooks/useMediaQuery";

const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

// Pause at the end of the sideways scroll before the section unpins
const END_PAUSE = 200;

const Label = () => (
  <RevealLines
    as="h2"
    lines={["( about me )"]}
    className="px-4 text-xl font-semibold tracking-[0.08em] uppercase sm:px-6 lg:px-16 dark:text-white"
  />
);

// Desktop: the section pins and the card track scrubs sideways with scroll,
// skewing slightly with scroll speed
const PinnedAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const overflow = useRef(0);
  const progress = useRef(0);
  const skew = useRef(0);
  const [height, setHeight] = useState<number | null>(null);

  // Section height = one screen + the track's overflow + a short pause, so
  // the cards move about 1px sideways per 1px scrolled
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      overflow.current = Math.max(0, track.scrollWidth - window.innerWidth);
      setHeight(window.innerHeight + overflow.current + END_PAUSE);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useFrame(({ vel, vh }) => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const rect = section.getBoundingClientRect();
    // Reaches 1 at END_PAUSE before unpinning, so the last card rests in view
    const scrubLength = Math.max(1, rect.height - vh - END_PAUSE);
    const target = clamp(-rect.top / scrubLength, 0, 1);
    const targetSkew = clamp(vel * -0.12, -3, 3);
    const p = progress.current;
    const s = skew.current;
    if (Math.abs(target - p) < 0.0002 && Math.abs(targetSkew - s) < 0.002)
      return;
    progress.current = p + (target - p) * 0.09;
    skew.current = s + (targetSkew - s) * 0.1;
    track.style.transform = `translate3d(${(-progress.current * overflow.current).toFixed(2)}px, 0, 0) skewX(${skew.current.toFixed(3)}deg)`;
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-1"
      style={{ height: height ?? "250vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-12 overflow-hidden">
        <Label />
        <div
          ref={trackRef}
          className="flex w-max gap-8 px-16 will-change-transform"
        >
          <AboutCards />
        </div>
      </div>
    </section>
  );
};

// Phones, tablets and reduced motion: native horizontal scroll strip
const StripAbout = () => (
  <section id="about" className="relative z-1 flex flex-col gap-8 py-10">
    <Label />
    <div className="flex snap-x scroll-px-4 gap-3 overflow-x-auto px-4 pt-5 pb-4 sm:scroll-px-6 sm:gap-6 sm:px-6 lg:scroll-px-16 lg:px-16">
      <AboutCards />
    </div>
  </section>
);

const About = () => {
  const { reduced } = useMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return isDesktop && !reduced ? <PinnedAbout /> : <StripAbout />;
};

export default About;
