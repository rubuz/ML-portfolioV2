type ProjectTextProps = {
  title: string;
  group: string;
  isActive: boolean;
  onSelect: () => void;
};

const ProjectText = ({
  title,
  group,
  isActive,
  onSelect,
}: ProjectTextProps) => {
  return (
    <button
      type="button"
      className="group flex select-none flex-col gap-2 text-left sm:gap-4"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      aria-pressed={isActive}
    >
      <p className="text-lg sm:text-2xl">{group}</p>
      <h3 className="text-3xl font-medium tracking-tight sm:text-6xl">
        {title}
      </h3>
      <div className="relative h-1 w-full bg-black/30">
        <div
          className={`h-1 bg-black transition-all duration-500 group-hover:w-full ${isActive ? "w-full" : "w-0"}`}
        ></div>
      </div>
    </button>
  );
};

export default ProjectText;
