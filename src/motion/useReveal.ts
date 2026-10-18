import { useEffect, useRef, useState } from "react";
import { useMotion } from "./motionContext";

// True once the element's top has crossed 90% of the viewport, after the intro.
// Fires once.
export const useReveal = <T extends Element>() => {
  const ref = useRef<T>(null);
  const { loaded, reduced } = useMotion();
  const [revealed, setRevealed] = useState(false);
  const inView = reduced || revealed;

  useEffect(() => {
    const el = ref.current;
    if (!el || !loaded || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Also counts elements already scrolled past, not only intersecting ones
        if (entry.boundingClientRect.top < window.innerHeight * 0.9) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: [0, 1] },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loaded, inView]);

  return [ref, inView] as const;
};
