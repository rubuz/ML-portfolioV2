import { navLinks } from "./navLinks";
import { useMotion } from "../motion/motionContext";
import { useHideOnScroll } from "../motion/useHideOnScroll";
import RollText from "../motion/RollText";

const Navbar = () => {
  const { loaded } = useMotion();
  const headerRef = useHideOnScroll<HTMLElement>();

  return (
    <header ref={headerRef} className="site-nav frosted sticky top-0 z-50">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-[18px]"
      >
        <a
          href="#top"
          aria-label="Back to top"
          className={`nav-item ${loaded ? "in" : ""} inline-flex min-h-11 min-w-11 items-center font-mono text-[22px] dark:text-white`}
        >
          <span className="text-pinky">M</span>L
        </a>
        <ul className="flex items-center gap-3 text-lg dark:text-white">
          {navLinks.map((link, index) => (
            <li
              key={link.label}
              className={`nav-item ${loaded ? "in" : ""}`}
              style={{ transitionDelay: `${0.13 + index * 0.04}s` }}
            >
              <a href={link.href} className="pill roll-host">
                <RollText text={link.label} />
              </a>
            </li>
          ))}
        </ul>
        <div className="w-11" aria-hidden="true" />
      </nav>
    </header>
  );
};

export default Navbar;
