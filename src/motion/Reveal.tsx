import { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "./useReveal";

const delayStyle = (delay: number, style?: CSSProperties) =>
  ({ ...style, "--rv-delay": `${delay}s` }) as CSSProperties;

type RevealLinesProps = {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  delay?: number;
  id?: string;
};

// Masked line-by-line reveal. Lines are given explicitly, not measured.
export const RevealLines = ({
  lines,
  as: Tag = "p",
  className = "",
  delay = 0,
  id,
}: RevealLinesProps) => {
  const [ref, inView] = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} id={id} className={`rv ${inView ? "in" : ""} ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="rv-line">
          <span style={delayStyle(delay + i * 0.08)}>{line}</span>
        </span>
      ))}
    </Tag>
  );
};

type RevealUpProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  style?: CSSProperties;
};

// Fade + rise block reveal
export const RevealUp = ({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  style,
}: RevealUpProps) => {
  const [ref, inView] = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`rv-up ${inView ? "in" : ""} ${className}`}
      style={delayStyle(delay, style)}
    >
      {children}
    </Tag>
  );
};

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

// Clip-path wipe from the bottom. Give the inner image the `rv-zoom` class
// for the matching zoom-out.
export const ImageReveal = ({
  children,
  className = "",
  delay = 0,
}: ImageRevealProps) => {
  const [ref, inView] = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`rv-img ${inView ? "in" : ""} ${className}`}
      style={delayStyle(delay)}
    >
      {children}
    </div>
  );
};

type SplitCharsProps = {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
  // Receives each letter's outer wrapper, e.g. for scroll parallax
  letterRef?: (index: number, el: HTMLSpanElement | null) => void;
  // Reveal on this flag instead of on scroll (used by the preloader)
  show?: boolean;
};

// Per-letter rise. Letters are aria-hidden; label the container yourself.
export const SplitChars = ({
  text,
  className = "",
  delay = 0,
  step = 0.05,
  letterRef,
  show,
}: SplitCharsProps) => {
  const [ref, inView] = useReveal<HTMLSpanElement>();
  const visible = show ?? inView;
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`chars rv ${visible ? "in" : ""} ${className}`}
    >
      {[...text].map((char, i) => (
        <span
          key={i}
          ref={letterRef ? (el) => letterRef(i, el) : undefined}
          className="ch-outer"
        >
          <span className="ch">
            <span style={delayStyle(delay + i * step)}>{char}</span>
          </span>
        </span>
      ))}
    </span>
  );
};
