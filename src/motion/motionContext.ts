import { createContext, useContext, useEffect, useRef } from "react";

export type Frame = {
  y: number;
  // Smoothed scroll delta in px per frame (positive = scrolling down)
  vel: number;
  vw: number;
  vh: number;
};
export type FrameCallback = (frame: Frame) => void;

// Pointer position, kept in a ref so moving the mouse never re-renders React
export type Pointer = { x: number; y: number; active: boolean };

// Intro timeline: "idle" before the letters rise, "letters" while they are up,
// "loaded" once the curtain lifts and reveals are allowed to play
export type IntroStage = "idle" | "letters" | "loaded";

export type MotionContextValue = {
  reduced: boolean;
  stage: IntroStage;
  loaded: boolean;
  // Bumps on every intro replay, so reveals know to reset
  replayKey: number;
  replay: () => void;
  scrollTo: (target: number | HTMLElement) => void;
  subscribe: (callback: FrameCallback) => () => void;
  pointer: React.RefObject<Pointer>;
};

export const MotionContext = createContext<MotionContextValue | null>(null);

export const useMotion = () => {
  const context = useContext(MotionContext);
  if (!context) throw new Error("useMotion must be used inside MotionProvider");
  return context;
};

// Runs `callback` on every animation frame, with scroll position and velocity
export const useFrame = (callback: FrameCallback) => {
  const { subscribe } = useMotion();
  const latest = useRef(callback);
  useEffect(() => {
    latest.current = callback;
  });
  useEffect(() => subscribe((frame) => latest.current(frame)), [subscribe]);
};
