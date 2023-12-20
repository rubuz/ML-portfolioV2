import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./Hero.css";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="mt-20 flex flex-row-reverse">
      <div className="mx-auto hero__img"></div>
      <div className="w-1/2 flex flex-col items-start justify-center gap-8">
        <button>theme</button>
        <div className="relative">
          <h2 className="text-3xl w-1/2">
            Self-taught web developer with a passion for front-end based in
            Brežice, Slovenia
          </h2>
          <BsArrowRight className="absolute text-6xl rotate-[135deg] left-[-5rem] bottom-0" />
        </div>
        <Button
          text={"Say Hello"}
          bgColor={"bg-pinky"}
          iconColor={"text-pinky"}
          circleColor={"bg-black"}
          textColor={"text-black"}
        />
      </div>
    </div>
  );
};

export default Hero;
