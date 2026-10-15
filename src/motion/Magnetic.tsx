import { ReactNode, useRef } from "react";
import { useFrame, useMotion } from "./motionContext";
import { useMediaQuery } from "../hooks/useMediaQuery";

type MagneticProps = {
  children: ReactNode;
  className?: string;
};

const HIT_PADDING = 40;
const STRENGTH = 0.3;
const FOLLOW = 0.14;
// The element marked data-magnet-inner moves this much extra, for parallax
const INNER = 0.35;

// Pulls its child towards the mouse while the pointer is near
const Magnetic = ({ children, className = "" }: MagneticProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  const { reduced, pointer } = useMotion();
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const enabled = canHover && !reduced;

  useFrame(() => {
    const el = ref.current;
    if (!el) return;
    const inner = el.querySelector<HTMLElement>("[data-magnet-inner]");
    if (!enabled) {
      if (offset.current.x || offset.current.y) {
        offset.current = { x: 0, y: 0 };
        el.style.transform = "";
        if (inner) inner.style.transform = "";
      }
      return;
    }
    const rect = el.getBoundingClientRect();
    const { x: px, y: py, active } = pointer.current;
    let tx = 0;
    let ty = 0;
    if (
      active &&
      px > rect.left - HIT_PADDING &&
      px < rect.right + HIT_PADDING &&
      py > rect.top - HIT_PADDING &&
      py < rect.bottom + HIT_PADDING
    ) {
      tx = (px - (rect.left + rect.width / 2)) * STRENGTH;
      ty = (py - (rect.top + rect.height / 2)) * STRENGTH;
    }
    const o = offset.current;
    if (Math.abs(tx - o.x) < 0.01 && Math.abs(ty - o.y) < 0.01) return;
    o.x += (tx - o.x) * FOLLOW;
    o.y += (ty - o.y) * FOLLOW;
    el.style.transform = `translate3d(${o.x.toFixed(2)}px, ${o.y.toFixed(2)}px, 0)`;
    if (inner) {
      inner.style.transform = `translate3d(${(o.x * INNER).toFixed(2)}px, ${(o.y * INNER).toFixed(2)}px, 0)`;
    }
  });

  return (
    <span ref={ref} className={`magnetic inline-block ${className}`}>
      {children}
    </span>
  );
};

export default Magnetic;
