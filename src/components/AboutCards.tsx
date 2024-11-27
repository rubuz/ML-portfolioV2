import {
  FaLaptop,
  FaRegEye,
  FaCode,
  FaCircleNodes,
  FaRegRectangleList,
} from "react-icons/fa6";
import CV from "../assets/CV.pdf";

const cardsInfo = [
  {
    title: "Frontend Developer",
    text: "Self-taught frontend web developer with expertise in HTML, CSS, JavaScript, TailwindCSS and ReactJS. Passionate about creating dynamic and user-friendly experiences.",
    color: "bg-pinky",
    id: 2,
    icon: (
      <FaCode className="mt-2 animate-bounce text-2xl text-pinky sm:text-4xl" />
    ),
  },
  {
    title: "Keen eye",
    text: "I have a sharp eye for visual perfection, quickly spotting imperfections. My intuitive sense for good UI and UX enables me to create polished and user-friendly designs.",
    color: "bg-greeny",
    id: 3,
    icon: (
      <FaRegEye className="mt-2 animate-bounce text-2xl text-greeny sm:text-4xl" />
    ),
  },
  {
    title: "IT Engineer",
    text: "An experienced IT system administrator with over 7 years in the IT field, successfully transitioned to a web developer role, now specializing in front-end development.",
    color: "bg-bluey",
    id: 1,
    icon: (
      <FaLaptop className="mt-2 animate-bounce text-2xl text-bluey sm:text-4xl" />
    ),
  },
];

const AboutCards = () => {
  return (
    <>
      {cardsInfo.map((card, index) => (
        <div
          className={`${card.color} cards group flex h-[320px] w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] px-6 py-8 transition-all duration-500 sm:h-[500px] sm:w-[500px] sm:px-12 sm:py-16 lg:hover:-mt-8 lg:hover:h-[532px]`}
          key={index}
        >
          <h2 className="text-3xl tracking-tight sm:text-6xl">{card.title}</h2>
          <div className="flex shrink-0 flex-row items-end justify-between transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:items-center lg:translate-y-28 lg:opacity-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black sm:h-24 sm:w-24">
              {card.icon}
            </div>
            <p className="w-[70%] text-base leading-5 sm:w-[60%] sm:text-lg">
              {card.text}
            </p>
          </div>
        </div>
      ))}

      <div className="group relative flex h-[320px] w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] bg-olivy px-6 py-8 transition-all duration-500 sm:h-[500px] sm:w-[500px] sm:px-12 sm:py-16 lg:hover:-mt-8 lg:hover:h-[532px]">
        <h2 className="text-3xl tracking-tight sm:text-6xl">More about me</h2>
        <div className="flex shrink-0 flex-row items-end justify-between transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:items-center lg:translate-y-28 lg:opacity-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black sm:h-24 sm:w-24">
            <FaRegRectangleList className="mt-2 animate-bounce text-2xl text-olivy sm:text-4xl" />
          </div>
          <div className="flex w-[70%] flex-col text-base leading-5 sm:w-[60%] sm:text-lg">
            Find out more about me in my CV.
            <a
              download=""
              href={CV}
              aria-label="Download my CV in pdf format"
              className="hover__link mt-2 w-max text-xl font-semibold sm:text-2xl"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="group relative flex h-[320px] w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] bg-yellowy px-6 py-8 transition-all duration-500 sm:h-[500px] sm:w-[500px] sm:px-12 sm:py-16 lg:hover:-mt-8 lg:hover:h-[532px]">
        <h2 className="text-3xl tracking-tight sm:text-6xl">Socials</h2>
        <div className="flex shrink-0 flex-row items-end justify-between transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:items-center lg:translate-y-28 lg:opacity-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black sm:h-24 sm:w-24">
            <FaCircleNodes className="mt-2 animate-bounce text-2xl text-yellowy sm:text-4xl" />
          </div>
          <div className="flex w-[70%] flex-col text-base leading-5 sm:w-[60%] sm:text-lg">
            <a
              href="https://www.linkedin.com/in/matjaz-lovenjak/"
              className="hover__link mt-2 w-max text-xl font-semibold sm:text-2xl"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my LinkedIn profile"
            >
              linkedin
            </a>
            <a
              href="https://github.com/rubuz"
              className="hover__link mt-2 w-max text-xl font-semibold sm:text-2xl"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my GitHub profile and repository"
            >
              github
            </a>
            <a
              href="https://www.instagram.com/rubuz88/"
              className="hover__link mt-2 w-max text-xl font-semibold sm:text-2xl"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my Instagram profile"
            >
              instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCards;
