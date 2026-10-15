import { CSSProperties, useEffect, useRef } from "react";
import { useFrame, useMotion } from "./motionContext";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { createSpring, stepSpring } from "./spring";

type Blob = {
  color: string;
  size: number;
  left: string;
  top: string;
  morph: number;
  delay: number;
  // Scroll motion: vertical travel, horizontal sway, rotation, pointer depth
  ty: number;
  sx: number;
  rot: number;
  depth: number;
  opacity: (p: number) => number;
};

const BLOBS: Blob[] = [
  {
    color: "#ff5c8f",
    size: 640,
    left: "-8%",
    top: "-6%",
    morph: 18,
    delay: 0,
    ty: -700,
    sx: 140,
    rot: 50,
    depth: 40,
    opacity: (p) => 1 - 0.6 * p,
  },
  {
    color: "#70c1b3",
    size: 560,
    left: "58%",
    top: "18%",
    morph: 22,
    delay: -6,
    ty: -1000,
    sx: -180,
    rot: -40,
    depth: -60,
    opacity: (p) => 0.55 + 0.45 * Math.sin(p * Math.PI),
  },
  {
    color: "#f3ffbd",
    size: 600,
    left: "12%",
    top: "72%",
    morph: 20,
    delay: -11,
    ty: -1300,
    sx: 160,
    rot: 35,
    depth: 50,
    opacity: (p) => 0.35 + 0.65 * p,
  },
  {
    color: "#b2dbbf",
    size: 520,
    left: "66%",
    top: "88%",
    morph: 24,
    delay: -3,
    ty: -1500,
    sx: -120,
    rot: -60,
    depth: -35,
    opacity: (p) => 0.45 + 0.55 * p,
  },
];

// The layer is fixed, so start positions are relative to the viewport. At the
// brief's full travel, every blob has left the top of the screen by the time
// you reach contact; scaled down (and to the viewport height, tuned at 900px),
// yellow/olive actually sit mid-screen near the end as intended.
const TRAVEL_SCALE = 0.45;
const REFERENCE_VH = 900;

// Fixed layer of soft blobs: they morph (CSS), drift with page scroll and
// lean slightly towards the mouse. Transforms are written straight to the
// wrappers each frame; the blurred inner divs are never touched by JS.
const AmbientBackground = () => {
  const { reduced, pointer } = useMotion();
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const wrappers = useRef<(HTMLDivElement | null)[]>([]);
  const scrollable = useRef(1);
  const progress = useRef(createSpring());
  const pointerX = useRef(createSpring());
  const pointerY = useRef(createSpring());
  const lastTime = useRef<number | null>(null);

  // Page scroll range, cached (reading scrollHeight every frame forces layout)
  useEffect(() => {
    const measure = () => {
      scrollable.current = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useFrame(({ y, vw, vh }) => {
    if (reduced) {
      wrappers.current.forEach((el) => {
        if (el && el.style.transform) {
          el.style.transform = el.style.opacity = "";
        }
      });
      lastTime.current = null;
      return;
    }
    const now = performance.now();
    const dt = Math.min(
      (now - (lastTime.current ?? now - 16.7)) / 1000,
      1 / 30,
    );
    lastTime.current = now;

    const p = stepSpring(
      progress.current,
      Math.min(Math.max(y / scrollable.current, 0), 1),
      60,
      25,
      dt,
    );
    const ptr = pointer.current;
    const targetX = canHover && ptr.active ? ptr.x / vw - 0.5 : 0;
    const targetY = canHover && ptr.active ? ptr.y / vh - 0.5 : 0;
    const px = stepSpring(pointerX.current, targetX, 30, 20, dt);
    const py = stepSpring(pointerY.current, targetY, 30, 20, dt);

    BLOBS.forEach((blob, i) => {
      const el = wrappers.current[i];
      if (!el) return;
      const x = Math.sin(p * 2 * Math.PI + i * 1.7) * blob.sx + px * blob.depth;
      const travel = blob.ty * TRAVEL_SCALE * (vh / REFERENCE_VH);
      const yy = p * travel + py * blob.depth;
      const scale = 1 + 0.18 * Math.sin(p * Math.PI + i);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${yy.toFixed(1)}px, 0) rotate(${(p * blob.rot).toFixed(2)}deg) scale(${scale.toFixed(4)})`;
      el.style.opacity = blob.opacity(p).toFixed(3);
    });
  });

  return (
    <div className="ambient" aria-hidden="true">
      {BLOBS.map((blob, i) => (
        <div
          key={blob.color}
          ref={(el) => {
            wrappers.current[i] = el;
          }}
          className="ambient-blob"
          style={
            {
              left: blob.left,
              top: blob.top,
              "--blob-size": `${blob.size}px`,
            } as CSSProperties
          }
        >
          <div
            className="ambient-blob-inner"
            style={{
              backgroundColor: blob.color,
              animationDuration: `${blob.morph}s`,
              animationDelay: `${blob.delay}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AmbientBackground;
