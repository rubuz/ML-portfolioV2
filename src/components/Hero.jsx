import { BsArrowRight } from "react-icons/bs";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import "./Hero.css";
import Button from "./Button";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const Hero = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="mt-20 sm:max-w-[70%] max-w-[95%] mx-auto flex lg:flex-row-reverse flex-col-reverse justify-center items-center sm:gap-20 gap-10 lg:gap-10">
      <div className="mx-auto max-w-[90%] hero__img"></div>
      <div className="lg:w-1/2 w-4/5 flex flex-col items-start gap-8 mx-auto">
        <div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-bluey" : "bg-greeny"}
          relative inline-flex items-center h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-black transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
          >
            <span className="sr-only">Dark mode</span>
            <IoMdMoon className="absolute h-[30px] w-[30px] left-0.5 text-white" />
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] max-w-[34px] z-10 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
            <IoMdSunny className="absolute h-[30px] w-[30px] right-0.5 text-white" />
          </Switch>
        </div>
        <div className="relative">
          <h2 className="lg:text-3xl sm:text-4xl text-xl">
            Self-taught web developer with a passion for front-end based in
            Brežice, Slovenia
          </h2>
          <BsArrowRight className="absolute sm:text-6xl text-4xl rotate-[135deg] sm:left-[-5rem] -left-10 bottom-0" />
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
