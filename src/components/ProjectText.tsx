type ProjectTextProps = {
  number: number;
  title: string;
  group: string;
  isActive: boolean;
  onSelect: (time: number) => void;
};

const ProjectText = ({
  number,
  title,
  group,
  isActive,
  onSelect,
}: ProjectTextProps) => {
  return (
    <button
      type="button"
      data-project-item
      className={`project-item ${isActive ? "is-active" : ""}`}
      onMouseEnter={(e) => onSelect(e.timeStamp)}
      onFocus={(e) => onSelect(e.timeStamp)}
      onClick={(e) => onSelect(e.timeStamp)}
      aria-pressed={isActive}
    >
      <span className="text-base font-semibold opacity-75">
        {String(number).padStart(2, "0")} — {group}
      </span>
      <span className="project-title">{title}</span>
      <span className="project-bar" aria-hidden="true" />
    </button>
  );
};

export default ProjectText;
