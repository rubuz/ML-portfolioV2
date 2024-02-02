type ProjectTextProps = {
  title: string;
  group: string;
  onMouseEnter: () => void;
};

const ProjectText = ({ title, group, onMouseEnter }: ProjectTextProps) => {
  return (
    <div
      className="group flex select-none flex-col gap-4"
      onMouseEnter={onMouseEnter}
    >
      <p className="text-2xl">{group}</p>
      <h3 className="text-4xl font-medium tracking-tight sm:text-7xl">
        {title}
      </h3>
      <div className="relative h-1 w-full bg-black/30">
        <div className="h-1 w-0 bg-black transition-all duration-500 group-hover:w-full "></div>
      </div>
    </div>
  );
};

export default ProjectText;
