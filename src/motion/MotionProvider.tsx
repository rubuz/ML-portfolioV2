import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useReducedMotion } from "../hooks/useReducedMotion";
import {
  FrameCallback,
  IntroStage,
  MotionContext,
  Pointer,
} from "./motionContext";

const LETTERS_AT = 60;
const LOADED_AT = 1450;
const NAV_OFFSET = -64;
// Set once the intro has played; the intro then skips for the rest of the
// visit (index.html reads the same key to skip its black panel)
const INTRO_SEEN_KEY = "intro-seen";

const hasSeenIntro = () => {
  try {
    return sessionStorage.getItem(INTRO_SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

export const MotionProvider = ({ children }: { children: ReactNode }) => {
  const reduced = useReducedMotion();
  const [skipIntro] = useState(hasSeenIntro);
  const [stage, setStage] = useState<IntroStage>(
    reduced || skipIntro ? "loaded" : "idle",
  );
  const lenisRef = useRef<Lenis | null>(null);
  const callbacks = useRef(new Set<FrameCallback>());
  const pointer = useRef<Pointer>({ x: 0, y: 0, active: false });

  const subscribe = useCallback((callback: FrameCallback) => {
    callbacks.current.add(callback);
    return () => {
      callbacks.current.delete(callback);
    };
  }, []);

  // Smooth wheel scrolling. Touch keeps native scrolling (syncTouch off), and
  // reduced motion gets no Lenis at all.
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  // The one animation loop for the whole site
  useEffect(() => {
    let frameId = 0;
    let lastY = window.scrollY;
    let vel = 0;
    let lastTime: number | null = null;
    const tick = (time: number) => {
      lenisRef.current?.raf(time);
      const dt = Math.min((time - (lastTime ?? time - 1000 / 60)) / 1000, 1 / 30);
      lastTime = time;
      const y = window.scrollY;
      vel += (y - lastY - vel) * 0.15;
      lastY = y;
      const frame = {
        y,
        vel,
        vw: window.innerWidth,
        vh: window.innerHeight,
        dt,
      };
      callbacks.current.forEach((callback) => callback(frame));
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointer.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const onLeave = () => {
      pointer.current = { ...pointer.current, active: false };
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  // Intro timeline, once per visit
  useEffect(() => {
    if (reduced || skipIntro) return;
    const lenis = lenisRef.current;
    lenis?.stop();
    const toLetters = setTimeout(() => setStage("letters"), LETTERS_AT);
    const toLoaded = setTimeout(() => {
      setStage("loaded");
      lenis?.start();
      try {
        sessionStorage.setItem(INTRO_SEEN_KEY, "1");
      } catch {
        // Storage blocked: the intro just plays again next load
      }
    }, LOADED_AT);
    return () => {
      clearTimeout(toLetters);
      clearTimeout(toLoaded);
      lenis?.start();
    };
  }, [reduced, skipIntro]);

  const scrollTo = useCallback((target: number | HTMLElement) => {
    // Resolve elements against the real scroll position, so a stale Lenis
    // value (e.g. right after a native jump) can't skew the target
    const top =
      typeof target === "number"
        ? target
        : target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(top, { duration: 0.8, force: true });
    } else {
      window.scrollTo({ top });
    }
  }, []);

  // In-page anchor links glide through Lenis instead of jumping
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey)
        return;
      const link = (e.target as Element).closest?.("a[href^='#']");
      if (!link) return;
      const hash = link.getAttribute("href") ?? "#";
      const target =
        hash === "#" || hash === "#top"
          ? 0
          : document.getElementById(hash.slice(1));
      if (target === null) return;
      e.preventDefault();
      scrollTo(target);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [scrollTo]);

  const effectiveStage = reduced ? "loaded" : stage;

  const value = useMemo(
    () => ({
      reduced,
      stage: effectiveStage,
      loaded: effectiveStage === "loaded",
      scrollTo,
      subscribe,
      pointer,
    }),
    [reduced, effectiveStage, scrollTo, subscribe],
  );

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
};
