import React from "react";

const ProjectText = ({ title, group }) => {
  return (
    <div className="group flex flex-col gap-4 cursor-pointer">
      <p className="text-2xl">{group}</p>
      <h3 className="text-7xl font-medium tracking-tight">{title}</h3>
      <div className="w-full h-1 bg-black/30 relative">
        <div className="w-0 h-1 bg-black group-hover:w-full transition-all duration-500 "></div>
      </div>
    </div>
  );
};

export default ProjectText;
