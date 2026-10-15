import { useRef } from "react";
import { useFrame, useMotion } from "./motionContext";

// Toggles `is-hidden` on the element: hidden while scrolling down past 220px,
// shown again on scrolling up or near the top. `keepVisible` pins it open.
// Also toggles `is-scrolled` once the page has left the very top.
export const useHideOnScroll = <T extends HTMLElement>(keepVisible = false) => {
  const ref = useRef<T>(null);
  const { reduced } = useMotion();

  useFrame(({ y, vel }) => {
    const el = ref.current;
    if (!el) return;
    el.classList.toggle("is-scrolled", y > 8);
    if (keepVisible || reduced || y < 220 || vel < -1.2) {
      el.classList.remove("is-hidden");
    } else if (vel > 1.2) {
      el.classList.add("is-hidden");
    }
  });

  return ref;
};
