import { ReactNode, useEffect, useRef } from "react";
import { useFrame, useMotion } from "./motionContext";

type VelocityMarqueeProps = {
  children: ReactNode;
  // Copies per half; two halves loop seamlessly
  copies?: number;
};

// Drifts left, speeds up with scroll speed and reverses while scrolling up
const VelocityMarquee = ({ children, copies = 6 }: VelocityMarqueeProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const direction = useRef(1);
  // Half the track's width (cached: reading scrollWidth every frame forces
  // layout) and whether it's on screen at all
  const halfWidth = useRef(0);
  const onScreen = useRef(false);
  const { reduced } = useMotion();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const resizeObserver = new ResizeObserver(() => {
      halfWidth.current = track.scrollWidth / 2;
    });
    resizeObserver.observe(track);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      onScreen.current = entry.isIntersecting;
    });
    intersectionObserver.observe(track);
    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  useFrame(({ vel, dt }) => {
    const track = trackRef.current;
    if (!track || reduced || !onScreen.current) return;
    if (vel > 0.4) direction.current = 1;
    else if (vel < -0.4) direction.current = -1;
    // Speeds are tuned in px per 60fps frame
    x.current -=
      (1.1 + Math.min(Math.abs(vel), 40) * 0.55) * direction.current * dt * 60;
    const half = halfWidth.current;
    if (half > 0) {
      while (x.current <= -half) x.current += half;
      while (x.current > 0) x.current -= half;
    }
    track.style.transform = `translate3d(${x.current.toFixed(2)}px, 0, 0)`;
  });

  const items = Array.from({ length: copies * 2 }, (_, i) => (
    <div key={i} className="shrink-0">
      {children}
    </div>
  ));

  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div ref={trackRef} className="flex w-max will-change-transform">
        {items}
      </div>
    </div>
  );
};

export default VelocityMarquee;
