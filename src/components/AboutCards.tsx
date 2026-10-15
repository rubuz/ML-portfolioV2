import { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  FaLaptop,
  FaRegEye,
  FaCode,
  FaCircleNodes,
  FaRegRectangleList,
  FaMugHot,
  FaMotorcycle,
  FaGamepad,
  FaDumbbell,
  FaDice,
} from "react-icons/fa6";
import { socials } from "./socials";
import { RevealUp } from "../motion/Reveal";

type CardProps = {
  title: string;
  bgColor: string;
  iconColor: string;
  Icon: IconType;
  index: number;
  // Cards without links need a tab stop of their own, or keyboard users
  // could never open the details (they show on hover/focus-within)
  focusable?: boolean;
  children: ReactNode;
};

// Hover lifts the card and brings in the bottom row (always shown below lg)
const Card = ({
  title,
  bgColor,
  iconColor,
  Icon,
  index,
  focusable = true,
  children,
}: CardProps) => {
  return (
    <RevealUp delay={index * 0.08} className="shrink-0 snap-start">
      <article
        className={`about-card ${bgColor}`}
        tabIndex={focusable ? 0 : undefined}
        aria-label={focusable ? title : undefined}
      >
        <h3 className="text-[34px] leading-none tracking-[-0.02em] lg:text-[56px]">
          {title}
        </h3>
        <div className="about-more flex items-end justify-between gap-5">
          <div className="about-icon flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-black lg:h-[84px] lg:w-[84px]">
            <Icon
              aria-hidden="true"
              className={`text-2xl lg:text-4xl ${iconColor}`}
            />
          </div>
          <div className="flex max-w-[250px] flex-col gap-2 text-sm leading-[1.35] lg:text-[17px]">
            {children}
          </div>
        </div>
      </article>
    </RevealUp>
  );
};

const linkClass =
  "hover__link inline-flex min-h-11 w-max items-center text-xl font-semibold lg:text-2xl";

const hobbies = [
  { label: "Motorcycles", Icon: FaMotorcycle },
  { label: "Coffee brewing", Icon: FaMugHot },
  { label: "Video games", Icon: FaGamepad },
  { label: "Fitness", Icon: FaDumbbell },
  { label: "Board games", Icon: FaDice },
];

const AboutCards = () => {
  return (
    <>
      <Card
        title="Senior Software Developer"
        index={0}
        bgColor="bg-pinky"
        iconColor="text-pinky"
        Icon={FaCode}
      >
        <p>
          Building enterprise web and mobile apps with Angular, React, React
          Native and TypeScript. Frontend-focused, from first concept to
          deployment.
        </p>
      </Card>

      <Card
        title="UI/UX Design"
        index={1}
        bgColor="bg-greeny"
        iconColor="text-greeny"
        Icon={FaRegEye}
      >
        <p>
          I own the UI/UX of our company portals and set the look and feel of
          the team&apos;s frontends, with a sharp eye for detail.
        </p>
      </Card>

      <Card
        title="End-to-end view"
        index={2}
        bgColor="bg-bluey"
        iconColor="text-bluey"
        Icon={FaLaptop}
      >
        <p>
          9 years at Adria Mobil (Trigano Group), from IT support and Microsoft
          365 to development. I know how apps are built, delivered and run.
        </p>
      </Card>

      <Card
        title="More about me"
        focusable={false}
        index={3}
        bgColor="bg-olivy"
        iconColor="text-olivy"
        Icon={FaRegRectangleList}
      >
        Find out more about me in my CV.
        <a
          download=""
          href="/CV_Lovenjak.pdf"
          aria-label="Download my CV in pdf format"
          className={linkClass}
        >
          Download CV
        </a>
      </Card>

      <Card
        title="Socials"
        focusable={false}
        index={4}
        bgColor="bg-yellowy"
        iconColor="text-yellowy"
        Icon={FaCircleNodes}
      >
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className={linkClass}
            target="_blank"
            rel="noreferrer"
            aria-label={`Link to my ${social.label} profile`}
          >
            {social.name}
          </a>
        ))}
      </Card>

      <Card
        title="Off the clock"
        index={5}
        bgColor="bg-pinky"
        iconColor="text-pinky"
        Icon={FaMugHot}
      >
        <ul className="flex flex-col gap-1 sm:gap-2">
          {hobbies.map(({ label, Icon }) => (
            <li key={label} className="flex items-center gap-2 sm:gap-3">
              <Icon className="shrink-0" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default AboutCards;
