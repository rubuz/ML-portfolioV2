import { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import "./Hero.css";
import Portrait from "../assets/portrait.webp";
import Button from "./Button";
import {
  ImageReveal,
  RevealLines,
  RevealUp,
  SplitChars,
} from "../motion/Reveal";
import { useFrame, useMotion } from "../motion/motionContext";
import { damp } from "../motion/spring";

type HeroProps = {
  isDark: boolean;
  onThemeChange: (isDark: boolean) => void;
};

const clamp01 = (n: number) => Math.min(Math.max(n, 0), 1);

const Hero = ({ isDark, onThemeChange }: HeroProps) => {
  const { reduced } = useMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const letters = useRef<(HTMLSpanElement | null)[]>([]);
  const progress = useRef(0);
  // Section top (page coordinates) and height, cached so the frame loop
  // never reads layout
  const bounds = useRef({ top: 0, height: 1 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const measure = () => {
      const rect = section.getBoundingClientRect();
      bounds.current = {
        top: rect.top + window.scrollY,
        height: Math.max(1, rect.height),
      };
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  // As the hero scrolls out, letters drift up at different speeds and the
  // body sinks, shrinks and fades. Written to the DOM, never to React state.
  useFrame(({ y, dt }) => {
    const section = sectionRef.current;
    const body = bodyRef.current;
    if (!section || !body) return;
    if (reduced) {
      if (progress.current !== 0) {
        progress.current = 0;
        body.style.transform = body.style.opacity = "";
        if (portraitRef.current) portraitRef.current.style.transform = "";
        letters.current.forEach((el) => el && (el.style.transform = ""));
      }
      return;
    }
    const { top, height } = bounds.current;
    const target = clamp01((y - top) / height);
    const p = progress.current;
    if (Math.abs(target - p) < 0.0005) return;
    const next = p + (target - p) * damp(0.1, dt);
    progress.current = next;
    body.style.transform = `translate3d(0, ${(next * 160).toFixed(2)}px, 0) scale(${(1 - next * 0.12).toFixed(4)})`;
    body.style.opacity = String(clamp01(1 - next * 1.3));
    if (portraitRef.current) {
      portraitRef.current.style.transform = `translate3d(0, ${(next * -90).toFixed(2)}px, 0)`;
    }
    letters.current.forEach((el, i) => {
      if (el) {
        el.style.transform = `translate3d(0, ${(-next * (40 + (i % 3) * 45)).toFixed(2)}px, 0)`;
      }
    });
  });

  return (
    <section
      ref={sectionRef}
      className="relative z-1 px-4 pt-6 pb-24 sm:px-6 lg:pb-36"
    >
      <h1 className="mb-10 text-center font-mono text-[clamp(64px,15vw,230px)] tracking-[-0.02em] dark:text-white">
        <span className="sr-only">Matjaž Lovenjak</span>
        <SplitChars
          text="LOVENJAK"
          delay={0.15}
          letterRef={(i, el) => {
            letters.current[i] = el;
          }}
        />
      </h1>
      <div ref={bodyRef} className="mx-auto max-w-[1100px] origin-top">
        <div className="flex flex-col items-start justify-center gap-10 sm:items-center lg:flex-row-reverse lg:gap-[72px]">
          <div className="w-[min(320px,80vw)] shrink-0 self-center lg:w-[400px]">
            <div ref={portraitRef}>
              <ImageReveal delay={0.35}>
                <div className="hero">
                  <img
                    src={Portrait}
                    alt="Portrait of Matjaž Lovenjak"
                    className="hero__img rv-zoom"
                  />
                </div>
              </ImageReveal>
            </div>
          </div>
          <div className="flex max-w-[560px] flex-col items-start gap-8 lg:flex-[1_1_420px]">
            <button
              type="button"
              role="switch"
              aria-checked={isDark}
              onClick={() => onThemeChange(!isDark)}
              className={`${isDark ? "bg-white" : "bg-black"} relative inline-flex h-[26px] w-[53px] shrink-0 items-center rounded-full border-2 border-transparent transition-colors duration-[600ms] before:absolute before:-inset-x-1 before:-inset-y-[11px] before:content-[""]`}
            >
              <span className="sr-only">Dark mode</span>
              <IoMdMoon
                aria-hidden="true"
                className="absolute left-0.5 h-[20px] w-[20px] text-black"
              />
              <span
                aria-hidden="true"
                className={`${isDark ? "translate-x-7" : "translate-x-0"} pointer-events-none z-5 inline-block h-[22px] max-w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-[600ms] ease-expo-out dark:bg-black`}
              />
              <IoMdSunny
                aria-hidden="true"
                className="absolute right-0.5 h-[20px] w-[20px] text-white"
              />
            </button>
            <div className="relative dark:text-white">
              <RevealLines
                className="text-2xl leading-[1.2] sm:text-[34px]"
                delay={0.5}
                lines={[
                  "Senior Software Developer",
                  "building enterprise web",
                  "and mobile apps, based in",
                  "Brežice, Slovenia",
                ]}
              />
              <BsArrowRight
                aria-hidden="true"
                className="absolute bottom-0 -left-20 rotate-135 text-6xl max-lg:hidden"
              />
            </div>
            <RevealUp delay={0.8}>
              <Button
                href="#contact"
                text="Say Hello"
                bgColor="bg-pinky"
                iconColor="text-pinky"
                circleColor="bg-black"
                textColor="text-black"
                cursorLabel="hi"
              />
            </RevealUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
