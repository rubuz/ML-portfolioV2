import { BsArrowRight } from "react-icons/bs";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import "./Hero.css";
import Portrait from "../assets/portrait1.webp";
import Button from "./Button";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="mx-auto mt-20 flex max-w-[95%] flex-col-reverse items-center justify-center gap-10 sm:max-w-[70%] sm:gap-20 lg:flex-row-reverse lg:gap-10">
      <div className="hero mx-auto max-w-[90%]">
        <img src={Portrait} alt="My portrait picture" className="hero__img" />
      </div>
      <div className="flex flex-col items-start gap-8 max-sm:min-w-[95%] lg:w-1/2">
        <div>
          <Switch
            checked={theme}
            onChange={setTheme}
            className={`${theme ? "bg-white" : "bg-black"}
          relative inline-flex h-[26px] w-[53px] shrink-0 cursor-none items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
          >
            <span className="sr-only">Dark mode</span>
            <IoMdMoon className="absolute left-0.5 h-[20px] w-[20px] text-black" />
            <span
              aria-hidden="true"
              className={`${theme ? "translate-x-7" : "translate-x-0"}
            pointer-events-none z-[5] inline-block h-[22px] max-w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-500 ease-in-out dark:bg-black`}
            />
            <IoMdSunny className="absolute right-0.5 h-[20px] w-[20px] text-white" />
          </Switch>
        </div>
        <div className="relative dark:text-white">
          <h2 className="text-xl sm:text-4xl lg:text-3xl ">
            Self-taught web developer with a passion for front-end based in
            Brežice, Slovenia
          </h2>
          <BsArrowRight className="absolute -left-10 bottom-0 rotate-[135deg] text-4xl max-sm:hidden sm:left-[-5rem] sm:text-6xl" />
        </div>
        <a href="#contact">
          <Button
            text={"Say Hello"}
            bgColor={"bg-pinky"}
            iconColor={"text-pinky"}
            circleColor={"bg-black"}
            textColor={"text-black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
