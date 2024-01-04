import { useState } from "react";
import "./MobileNavMenuBtn.css";

import PropTypes from "prop-types";

const MobileNavMenuBtn = ({ open }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    open();
  };

  return (
    <div onClick={handleClick}>
      <label htmlFor="check" className={isChecked ? "checked" : ""}>
        {/* <input type="checkbox" id="check" checked={isChecked} /> */}
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

MobileNavMenuBtn.propTypes = {
  open: PropTypes.func.isRequired,
};

export default MobileNavMenuBtn;
