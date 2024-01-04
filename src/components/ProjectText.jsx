const ProjectText = ({ title, group, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="group flex flex-col gap-4"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className="text-2xl">{group}</p>
      <h3 className="sm:text-7xl text-5xl font-medium tracking-tight">
        {title}
      </h3>
      <div className="w-full h-1 bg-black/30 relative">
        <div className="w-0 h-1 bg-black group-hover:w-full transition-all duration-500 "></div>
      </div>
    </div>
  );
};

export default ProjectText;
