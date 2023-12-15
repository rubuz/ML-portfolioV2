import React from "react";
import Project1 from "../assets/project1.png";

const Projects = () => {
  return (
    <section className="w-full  bg-greeny rounded-t-[2rem]">
      <div>
        <h1>my projects * </h1>
      </div>
      <div className="w-[75%] mx-auto grid grid-cols-[60%_auto] mt-10 gap-10">
        <div className="w-full bg-transparent rounded-[2rem] border-[3px] p-9 border-black flex flex-col justify-between gap-12">
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full border-[3px] border-black bg-transparent project-dot"></div>
            <div className="w-6 h-6 rounded-full border-[3px] border-black bg-transparent"></div>
            <div className="w-6 h-6 rounded-full border-[3px] border-black bg-transparent"></div>
          </div>
          <div className="w-full project-img">
            <img
              src={Project1}
              alt=""
              className="object-contain rounded-2xl hover:scale-[104%] transition-all duration-1000"
            />
          </div>
        </div>
        <div>BOX2</div>
      </div>
    </section>
  );
};

export default Projects;
