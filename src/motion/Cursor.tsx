import { useEffect, useRef, useState } from "react";
import { useFrame, useMotion } from "./motionContext";

// Trailing dot that grows and shows a label over [data-cursor] elements.
// Shown only for a real mouse on desktop (see .cursor rules in motion.css).
const Cursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const position = useRef<{ x: number; y: number } | null>(null);
  const { pointer } = useMotion();
  // Only changes when the hovered label changes, never per mouse move
  const [label, setLabel] = useState("");
  // Last non-empty label, kept on screen while it fades out
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const target = (e.target as Element).closest?.("[data-cursor]");
      const next = target?.getAttribute("data-cursor") ?? "";
      setLabel(next);
      if (next) setText(next);
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

  // It replaces the system cursor, so it tracks the mouse exactly: any lag
  // makes aiming feel imprecise. Only the grow/label animate (motion.css).
  useFrame(() => {
    const el = ref.current;
    const { x, y, active } = pointer.current;
    if (!el || !active) return;
    const p = position.current;
    if (p && p.x === x && p.y === y) return;
    position.current = { x, y };
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`cursor ${visible ? "is-visible" : ""} ${label ? "is-big" : ""}`}
    >
      <div className="cursor-dot">
        <span className="cursor-label">{text}</span>
      </div>
    </div>
  );
};

export default Cursor;
