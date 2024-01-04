import React, { useRef } from "react";
import {
  FaLaptop,
  FaRegEye,
  FaCode,
  FaCircleNodes,
  FaRegRectangleList,
} from "react-icons/fa6";
import CV from "../assets/CV.pdf";
import { motion, useScroll, useTransform } from "framer-motion";

const cardsInfo = [
  {
    title: "IT Engineer",
    text: "An experienced IT system administrator working in the world of IT for more than 7 years. Started a transition into a web-developer.",
    color: "bg-bluey",
    id: 1,
    icon: <FaLaptop className="mt-2 text-bluey text-4xl animate-bounce" />,
  },
  {
    title: "Frontend Developer",
    text: "Self-taught frontend web developer with expertise in HTML, CSS, JavaScript, TailwindCSS and ReactJS. Passionate about creating dynamic and user-friendly experiences.",
    color: "bg-pinky",
    id: 2,
    icon: <FaCode className="mt-2 text-pinky text-4xl animate-bounce" />,
  },
  {
    title: "Keen eye",
    text: "I have a sharp eye for visual perfection, quickly spotting imperfections. My intuitive sense for good UI and UX enables me to create polished and user-friendly designs.",
    color: "bg-greeny",
    id: 2,
    icon: <FaRegEye className="mt-2 text-greeny text-4xl animate-bounce" />,
  },
  // {
  //   title: "Keen eye",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqu maxime officia porro.",
  //   color: "bg-pinky",
  //   id: 2,
  //   icon: <FaRegEye className="mt-2 text-pinky text-4xl animate-bounce" />,
  // },
  // {
  //   title: "Keen eye",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqu maxime officia porro.",
  //   color: "bg-pinky",
  //   id: 2,
  //   icon: <FaRegEye className="mt-2 text-pinky text-4xl animate-bounce" />,
  // },
];

const AboutCards = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    // <section ref={targetRef} className="relative h-[200vh]">
    //   <div className="sticky top-0 h-[700px] items-center overflow-hidden flex">
    //     <motion.div style={{ x }} className="flex gap-6">
    <>
      {cardsInfo.map((card, index) => (
        <div
          className={`${card.color} py-16 px-12 w-[500px] h-[500px] shrink-0 flex flex-col rounded-[2rem] justify-between group overflow-hidden lg:hover:h-[532px] lg:hover:-mt-8 transition-all duration-500 cards`}
          key={index}
        >
          <h2 className="text-6xl tracking-tight">{card.title}</h2>
          <div className="flex flex-row justify-between items-center shrink-0 lg:translate-y-28 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-24 h-24 bg-black rounded-full flex justify-center items-center">
              {card.icon}
            </div>
            <p className="w-[60%] text-lg leading-5">{card.text}</p>
          </div>
        </div>
      ))}

      <div className="bg-olivy py-16 px-12 w-[500px] h-[500px] shrink-0 flex flex-col rounded-[2rem] justify-between group overflow-hidden relative lg:hover:h-[532px] lg:hover:-mt-8 transition-all duration-500">
        <h2 className="text-6xl tracking-tight">More about me</h2>
        <div className="flex flex-row justify-between items-center shrink-0 lg:translate-y-28 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-24 h-24 bg-black rounded-full flex justify-center items-center">
            <FaRegRectangleList className="mt-2 text-olivy text-4xl animate-bounce" />
          </div>
          <div className="w-[60%] text-lg leading-5 flex flex-col">
            Find out more about me in my CV.
            <a
              download=""
              href={CV}
              aria-label="Download my CV in pdf format"
              className="text-2xl mt-2 hover__link w-max font-semibold"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="bg-yellowy py-16 px-12 w-[500px] h-[500px] shrink-0 flex flex-col rounded-[2rem] justify-between group overflow-hidden relative lg:hover:h-[532px] lg:hover:-mt-8 transition-all duration-500">
        <h2 className="text-6xl tracking-tight">Socials</h2>
        <div className="flex flex-row justify-between items-center shrink-0 lg:translate-y-28 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-24 h-24 bg-black rounded-full flex justify-center items-center">
            <FaCircleNodes className="mt-2 text-yellowy text-4xl animate-bounce" />
          </div>
          <div className="w-[60%] text-lg leading-5 flex flex-col">
            <a
              href="https://www.linkedin.com/in/matjaz-lovenjak/"
              className="text-2xl mt-2 hover__link w-max font-semibold"
              target="_blank"
              aria-label="Link to my LinkedIn profile"
            >
              linkedin
            </a>
            <a
              href="https://github.com/rubuz"
              className="text-2xl mt-2 hover__link w-max font-semibold"
              target="_blank"
              aria-label="Link to my GitHub profile and repository"
            >
              github
            </a>
            <a
              href="https://www.instagram.com/rubuz88/"
              className="text-2xl mt-2 hover__link w-max font-semibold"
              target="_blank"
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
