import React from "react";
import { LiaAsteriskSolid } from "react-icons/lia";

const MarqueeText = () => {
  return (
    <div className="flex">
      <h1 className="sm:my-8 my-2 xl:text-[10rem] md:text-9xl sm:text-8xl text-5xl flex items-center tracking-tighter ml-8">
        my projects
        <LiaAsteriskSolid className="ml-8 animate-spin-slow" />
      </h1>
    </div>
  );
};

export default MarqueeText;
