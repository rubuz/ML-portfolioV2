import { useEffect, useRef, useState } from "react";
import { useMotion } from "./motionContext";

// True once the element's top has crossed 90% of the viewport, after the intro.
// Fires once per intro: replaying the intro resets it.
export const useReveal = <T extends Element>() => {
  const ref = useRef<T>(null);
  const { loaded, reduced, replayKey } = useMotion();
  // Which intro run this element was revealed in
  const [revealedIn, setRevealedIn] = useState<number | null>(null);
  const inView = reduced || revealedIn === replayKey;

  useEffect(() => {
    const el = ref.current;
    if (!el || !loaded || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Also counts elements already scrolled past, not only intersecting ones
        if (entry.boundingClientRect.top < window.innerHeight * 0.9) {
          setRevealedIn(replayKey);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: [0, 1] },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loaded, inView, replayKey]);

  return [ref, inView] as const;
};
