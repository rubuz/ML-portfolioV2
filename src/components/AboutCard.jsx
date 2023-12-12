import React from "react";
import { FaLaptop } from "react-icons/fa6";

const AboutCard = () => {
  return (
    <div className="w-[1000px] mx-auto mt-40">
      <div className="bg-bluey py-16 px-12 w-[500px] h-[500px] shrink-0 flex flex-col rounded-[2rem] justify-between group overflow-hidden relative hover:h-[532px] hover:-mt-8 transition-all duration-500">
        <h2 className="text-6xl">Website development</h2>
        <div className="flex flex-row justify-between items-center shrink-0 translate-y-28 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-24 h-24 bg-black rounded-full flex justify-center items-center">
            <FaLaptop className="mt-2 text-bluey text-4xl animate-bounce" />
          </div>
          <p className="w-[60%] text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            maxime officia porro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
