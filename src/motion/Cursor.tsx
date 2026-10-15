import { useEffect, useRef, useState } from "react";
import { useFrame, useMotion } from "./motionContext";

// Trailing dot that grows and shows a label over [data-cursor] elements.
// Shown only for a real mouse on desktop (see .cursor rules in motion.css).
const Cursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const position = useRef<{ x: number; y: number } | null>(null);
  const { reduced, pointer } = useMotion();
  // Only changes when the hovered label changes, never per mouse move
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const target = (e.target as Element).closest?.("[data-cursor]");
      setLabel(target?.getAttribute("data-cursor") ?? "");
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useFrame(() => {
    const el = ref.current;
    const { x, y, active } = pointer.current;
    if (!el || !active) return;
    if (!position.current) position.current = { x, y };
    const p = position.current;
    const follow = reduced ? 1 : 0.2;
    if (Math.abs(x - p.x) < 0.05 && Math.abs(y - p.y) < 0.05) return;
    p.x += (x - p.x) * follow;
    p.y += (y - p.y) * follow;
    el.style.transform = `translate3d(${p.x.toFixed(2)}px, ${p.y.toFixed(2)}px, 0)`;
  });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`cursor ${visible ? "is-visible" : ""} ${label ? "is-big" : ""}`}
    >
      <div className="cursor-dot">{label}</div>
    </div>
  );
};

export default Cursor;
