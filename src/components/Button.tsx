import { BsArrowRight } from "react-icons/bs";
import Magnetic from "../motion/Magnetic";
import RollText from "../motion/RollText";

type ButtonProps = {
  href: string;
  text: string;
  textColor: string;
  bgColor: string;
  iconColor: string;
  circleColor: string;
  // Shown in the custom cursor while hovering
  cursorLabel?: string;
  external?: boolean;
};

// Pill link with rolling label, growing arrow circle and magnetic pull
const Button = ({
  href,
  text,
  textColor,
  bgColor,
  iconColor,
  circleColor,
  cursorLabel,
  external,
}: ButtonProps) => {
  return (
    <Magnetic>
      <a
        href={href}
        data-cursor={cursorLabel}
        {...(external && { target: "_blank", rel: "noreferrer" })}
        className={`btn roll-host ${bgColor} ${textColor}`}
      >
        <span data-magnet-inner className="inline-flex items-center">
          <RollText text={text} />
          <span className={`btn-circle ${circleColor}`}>
            <BsArrowRight className={`text-xl ${iconColor}`} />
          </span>
        </span>
      </a>
    </Magnetic>
  );
};

export default Button;
