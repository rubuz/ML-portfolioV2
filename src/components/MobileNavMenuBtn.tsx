import "./mobileNavMenuBtn.css";

type MobileNavMenuBtnProps = {
  onToggle: () => void;
  isOpen: boolean;
};

const MobileNavMenuBtn = ({ onToggle, isOpen }: MobileNavMenuBtnProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className={`menu-btn ${isOpen ? "checked" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MobileNavMenuBtn;
