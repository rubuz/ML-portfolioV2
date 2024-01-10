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
    title: "IT Engineer",
    text: "An experienced IT system administrator working in the world of IT for more than 7 years. Started a transition into a web-developer.",
    color: "bg-bluey",
    id: 1,
    icon: (
      <FaLaptop className="mt-2 text-bluey sm:text-4xl text-2xl animate-bounce" />
    ),
  },
  {
    title: "Frontend Developer",
    text: "Self-taught frontend web developer with expertise in HTML, CSS, JavaScript, TailwindCSS and ReactJS. Passionate about creating dynamic and user-friendly experiences.",
    color: "bg-pinky",
    id: 2,
    icon: (
      <FaCode className="mt-2 text-pinky sm:text-4xl text-2xl animate-bounce" />
    ),
  },
  {
    title: "Keen eye",
    text: "I have a sharp eye for visual perfection, quickly spotting imperfections. My intuitive sense for good UI and UX enables me to create polished and user-friendly designs.",
    color: "bg-greeny",
    id: 2,
    icon: (
      <FaRegEye className="mt-2 text-greeny sm:text-4xl text-2xl animate-bounce" />
    ),
  },
];

const AboutCards = () => {
  return (
    <>
      {cardsInfo.map((card, index) => (
        <div
          className={`${card.color} sm:py-16 sm:px-12 sm:w-[500px] sm:h-[500px] py-8 px-6 w-[320px] h-[320px] shrink-0 flex flex-col rounded-[2rem] justify-between group overflow-hidden lg:hover:h-[532px] lg:hover:-mt-8 transition-all duration-500 cards`}
          key={index}
        >
          <h2 className="sm:text-6xl text-3xl tracking-tight">{card.title}</h2>
          <div className="flex flex-row justify-between sm:items-center items-end shrink-0 lg:translate-y-28 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="sm:w-24 sm:h-24 w-12 h-12 bg-black rounded-full flex justify-center items-center">
              {card.icon}
            </div>
            <p className="sm:w-[60%] w-[70%] sm:text-lg text-base leading-5">
              {card.text}
            </p>
          </div>
        </div>
      ))}

      <div className="bg-olivy sm:py-16 sm:px-12 sm:w-[500px] sm:h-[500px] py-8 px-6 w-[320px] h-[320px] shrink-0 flex flex-col rounded-[2rem] justify-between group overflow-hidden relative lg:hover:h-[532px] lg:hover:-mt-8 transition-all duration-500">
        <h2 className="sm:text-6xl text-3xl tracking-tight">More about me</h2>
        <div className="flex flex-row justify-between sm:items-center items-end shrink-0 lg:translate-y-28 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="sm:w-24 sm:h-24 w-12 h-12 bg-black rounded-full flex justify-center items-center">
            <FaRegRectangleList className="mt-2 text-olivy sm:text-4xl text-2xl animate-bounce" />
          </div>
          <div className="sm:w-[60%] w-[70%] sm:text-lg text-base leading-5 flex flex-col">
            Find out more about me in my CV.
            <a
              download=""
              href={CV}
              aria-label="Download my CV in pdf format"
              className="sm:text-2xl text-xl mt-2 hover__link w-max font-semibold"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="bg-yellowy sm:py-16 sm:px-12 sm:w-[500px] sm:h-[500px] py-8 px-6 w-[320px] h-[320px] shrink-0 flex flex-col rounded-[2rem] justify-between group overflow-hidden relative lg:hover:h-[532px] lg:hover:-mt-8 transition-all duration-500">
        <h2 className="sm:text-6xl text-3xl tracking-tight">Socials</h2>
        <div className="flex flex-row justify-between sm:items-center items-end shrink-0 lg:translate-y-28 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="sm:w-24 sm:h-24 w-12 h-12 bg-black rounded-full flex justify-center items-center">
            <FaCircleNodes className="mt-2 text-yellowy sm:text-4xl text-2xl animate-bounce" />
          </div>
          <div className="sm:w-[60%] w-[70%] sm:text-lg text-base leading-5 flex flex-col">
            <a
              href="https://www.linkedin.com/in/matjaz-lovenjak/"
              className="sm:text-2xl text-xl mt-2 hover__link w-max font-semibold"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my LinkedIn profile"
            >
              linkedin
            </a>
            <a
              href="https://github.com/rubuz"
              className="sm:text-2xl text-xl mt-2 hover__link w-max font-semibold"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my GitHub profile and repository"
            >
              github
            </a>
            <a
              href="https://www.instagram.com/rubuz88/"
              className="sm:text-2xl text-xl mt-2 hover__link w-max font-semibold"
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
