import "./mobileNavMenuBtn.css";

import PropTypes from "prop-types";

const MobileNavMenuBtn = ({ open, openState }) => {
  const handleClick = () => {
    open();
  };

  return (
    <div onClick={handleClick}>
      <label htmlFor="check" className={openState ? "checked" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

MobileNavMenuBtn.propTypes = {
  open: PropTypes.func.isRequired,
  openState: PropTypes.bool.isRequired,
};

export default MobileNavMenuBtn;
