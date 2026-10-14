import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

// Same query as the `.custom-cursor` rules in index.css
const finePointerQuery =
  "(hover: hover) and (pointer: fine) and (min-width: 1024px)";

const CustomCursor = () => {
  // Motion values update the dot without re-rendering React on every mouse move
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    if (!window.matchMedia(finePointerQuery).matches) return;

    const onMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - 8);
      y.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [x, y]);

  return (
    <motion.div
      style={{ x, y }}
      aria-hidden="true"
      className="custom-cursor-dot pointer-events-none fixed left-0 top-0 z-[60] h-4 w-4 rounded-full border-[1px] border-white bg-black opacity-70 dark:border-black dark:bg-white dark:opacity-80"
    />
  );
};

export default CustomCursor;
