import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ text, textColor, bgColor, iconColor, circleColor }) => {
  return (
    <div
      className={`${bgColor} sm:pl-16 sm:pr-12 sm:py-5 pl-10 pr-8 py-2 rounded-full text-lg flex items-center justify-center group relative`}
    >
      <p className={`h-10 flex items-center ${textColor}`}>{text}</p>
      <div
        className={`w-0 h-0 ml-4 flex items-center justify-center ${circleColor} p-0 rounded-full rotate-[-180deg] sm:group-hover:w-10 sm:group-hover:h-10 group-hover:w-8 group-hover:h-8 group-hover:p-1 group-hover:rotate-[-45deg] transition-all duration-500`}
      >
        <BsArrowRight className={`text-2xl ${iconColor}`} />
      </div>
    </div>
  );
};

export default Button;
