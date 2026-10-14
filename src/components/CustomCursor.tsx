import { useEffect, useRef } from "react";

// Same query as the `.custom-cursor` rules in index.css
const finePointerQuery =
  "(hover: hover) and (pointer: fine) and (min-width: 1024px)";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia(finePointerQuery).matches) return;

    // Move the dot directly, without re-rendering React on every mouse move
    const onMouseMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 8}px, ${e.clientY - 8}px, 0)`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{ transform: "translate3d(-100px, -100px, 0)" }}
      className="custom-cursor-dot pointer-events-none fixed top-0 left-0 z-60 h-4 w-4 rounded-full border border-white bg-black opacity-70 dark:border-black dark:bg-white dark:opacity-80"
    />
  );
};

export default CustomCursor;
