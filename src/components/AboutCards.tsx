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

type CardProps = {
  title: string;
  bgColor: string;
  iconColor: string;
  Icon: IconType;
  children: ReactNode;
};

const Card = ({ title, bgColor, iconColor, Icon, children }: CardProps) => {
  return (
    <div
      className={`${bgColor} cards group flex h-[320px] w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] px-6 py-8 transition-all duration-500 sm:h-[500px] sm:w-[500px] sm:px-12 sm:py-16 lg:hover:-mt-8 lg:hover:h-[532px]`}
    >
      <h2 className="text-3xl tracking-tight sm:text-6xl">{title}</h2>
      <div className="flex shrink-0 flex-row items-end justify-between transition-all duration-500 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 sm:items-center lg:translate-y-28 lg:opacity-0">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black sm:h-24 sm:w-24">
          <Icon
            className={`mt-2 animate-bounce text-2xl sm:text-4xl ${iconColor}`}
          />
        </div>
        <div className="flex w-[70%] flex-col text-base leading-5 sm:w-[60%] sm:text-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

const linkClass = "hover__link mt-2 w-max text-xl font-semibold sm:text-2xl";

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
