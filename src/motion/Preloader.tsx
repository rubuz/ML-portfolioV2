import { useEffect } from "react";
import { useMotion } from "./motionContext";

const WORD = [..."LOVENJAK"];

// Letters rise, then the black curtain lifts. Timing lives in MotionProvider
// (stage "letters" at 60ms, "loaded" at 1450ms); this only renders the stages.
const Preloader = () => {
  const { stage, reduced } = useMotion();

  // index.html shows a static black panel until React is ready; replace it
  useEffect(() => {
    document.getElementById("preloader")?.remove();
  }, []);

  if (reduced) return null;

  return (
    <div
      aria-hidden="true"
      className={`loader is-${stage}`}
      data-testid="preloader"
    >
      <div className="loader-word font-mono">
        {WORD.map((char, i) => (
          <span key={i} className="loader-letter">
            <span style={{ transitionDelay: `${(i * 0.045).toFixed(3)}s` }}>
              {char}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
