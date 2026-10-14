import { ReactNode, Ref, useEffect, useRef } from "react";

type MarqueeProps = {
  children: ReactNode;
  // Pixels per second
  speed?: number;
};

// Two identical groups slide left by one group's width, then loop seamlessly.
// Each group repeats the content enough times to cover wide screens.
const Marquee = ({ children, speed = 130 }: MarqueeProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group || !trackRef.current) return;
    const setDuration = () => {
      if (trackRef.current) {
        trackRef.current.style.animationDuration = `${group.offsetWidth / speed}s`;
      }
    };
    setDuration();
    const observer = new ResizeObserver(setDuration);
    observer.observe(group);
    return () => observer.disconnect();
  }, [speed]);

  const group = (ref?: Ref<HTMLDivElement>) => (
    <div ref={ref} className="flex shrink-0">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="shrink-0">
          {children}
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex w-max animate-marquee">
        {group(groupRef)}
        {group()}
      </div>
    </div>
  );
};

export default Marquee;
