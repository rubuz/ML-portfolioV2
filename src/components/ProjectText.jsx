import PropTypes from "prop-types";

const ProjectText = ({ title, group, onMouseEnter }) => {
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

ProjectText.propTypes = {
  title: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default ProjectText;
