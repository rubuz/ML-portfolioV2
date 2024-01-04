import { BsArrowRight } from "react-icons/bs";
import "./Hero.css";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="mt-20 sm:max-w-[70%] max-w-[95%] mx-auto flex lg:flex-row-reverse flex-col-reverse justify-center items-center sm:gap-20 gap-10 lg:gap-10">
      <div className="mx-auto max-w-[90%] hero__img"></div>
      <div className="lg:w-1/2 w-4/5 flex flex-col items-start gap-8 mx-auto">
        <button>theme</button>
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
