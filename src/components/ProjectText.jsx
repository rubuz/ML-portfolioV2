import PropTypes from "prop-types";

const ProjectText = ({ title, group, onMouseEnter }) => {
  return (
    <div
      className="group flex flex-col gap-4 select-none"
      onMouseEnter={onMouseEnter}
    >
      <p className="text-2xl">{group}</p>
      <h3 className="sm:text-7xl text-4xl font-medium tracking-tight">
        {title}
      </h3>
      <div className="w-full h-1 bg-black/30 relative">
        <div className="w-0 h-1 bg-black group-hover:w-full transition-all duration-500 "></div>
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
