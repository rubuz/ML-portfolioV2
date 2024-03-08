import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
} from "framer-motion";

const navItemData = [
  { path: "#", name: "home" },
  { path: "#about", name: "about" },
  { path: "#work", name: "work" },
  { path: "#contact", name: "contact" },
];

const mapRange = (
  inputLower: number,
  inputUpper: number,
  outputLower: number,
  outputUpper: number,
) => {
  const INPUT_RANGE = inputUpper - inputLower;
  const OUTPUT_RANGE = outputUpper - outputLower;

  return (value: number) =>
    outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
};

const setTransform = (
  item: HTMLElement & EventTarget,
  event: React.PointerEvent,
  x: MotionValue,
  y: MotionValue,
) => {
  const bounds = item.getBoundingClientRect();
  const relativeX = event.clientX - bounds.left;
  const relativeY = event.clientY - bounds.top;
  const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
  const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
  x.set(xRange * 10);
  y.set(yRange * 10);
};

const Navbar = () => {
  return (
    <nav className="flex w-screen justify-center py-10">
      <div className="w-1/4 max-w-[1400px] ">
        <ul className="flex h-14 items-center justify-around gap-x-8 text-lg dark:text-white">
          <AnimatePresence>
            {navItemData.map((link) => {
              const x = useMotionValue(0);
              const y = useMotionValue(0);
              return (
                <motion.li
                  key={link.path}
                  onPointerMove={(event) => {
                    const item = event.currentTarget;
                    setTransform(item, event, x, y);
                  }}
                  onPointerLeave={(event) => {
                    x.set(0);
                    y.set(0);
                  }}
                  style={{ x, y }}
                  className="nav-btn group relative text-center transition-all duration-500 ease-in-out hover:bg-pinky"
                >
                  <motion.a href={link.path}>
                    <motion.span style={{ x, y }}>{link.name}</motion.span>
                  </motion.a>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
