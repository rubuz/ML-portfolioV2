import Magnetic from "../motion/Magnetic";
import RollText from "../motion/RollText";
import { SplitChars } from "../motion/Reveal";

const Footer = () => {
  return (
    <footer className="bg-white px-4 pt-20 pb-8 transition-colors duration-[600ms] sm:px-6 sm:pt-[120px] dark:bg-black dark:text-white">
      <a
        href="#"
        aria-label="Lovenjak, back to top"
        className="mb-16 block font-mono text-[clamp(56px,13vw,200px)] tracking-[-0.02em] sm:mb-24"
      >
        <SplitChars text="LOVENJAK" />
      </a>
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-4 text-sm sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Matjaž Lovenjak. All rights reserved
        </p>
        <Magnetic>
          <a
            href="#"
            className="roll-host inline-flex min-h-12 items-center rounded-full border-2 border-current px-6 text-[15px]"
          >
            <span data-magnet-inner>
              <RollText text="Back to top ↑" />
            </span>
          </a>
        </Magnetic>
        <p>Designed &amp; built by Lovenjak</p>
      </div>
    </footer>
  );
};

export default Footer;
