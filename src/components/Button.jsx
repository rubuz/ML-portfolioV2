import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ text, textColor, bgColor, iconColor, circleColor }) => {
  return (
    <div
      className={`${bgColor} pl-16 pr-12 py-5 rounded-full text-lg flex items-center justify-center group relative`}
    >
      <a href="" className={`h-10 flex items-center ${textColor}`}>
        {text}
      </a>
      <div
        className={`w-0 h-0 ml-4 flex items-center justify-center ${circleColor} p-0 rounded-full rotate-[-180deg] group-hover:w-10 group-hover:h-10 group-hover:p-1 group-hover:rotate-[-45deg] transition-all duration-500`}
      >
        <BsArrowRight className={`text-2xl ${iconColor}`} />
      </div>
    </div>
  );
};

export default Button;
