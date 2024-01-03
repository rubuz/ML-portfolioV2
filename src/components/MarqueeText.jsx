import React from "react";
import { LiaAsteriskSolid } from "react-icons/lia";

const MarqueeText = () => {
  return (
    <div className="flex">
      <h1 className="my-8 xl:text-[10rem] md:text-9xl text-8xl flex items-center tracking-tighter ml-8">
        my projects
        <LiaAsteriskSolid className="ml-8 animate-spin-slow" />
      </h1>
    </div>
  );
};

export default MarqueeText;
