import "./mobileNavMenuBtn.css";

type MobileNavMenuBtnProps = {
  open: () => void;
  openState: boolean;
};

const MobileNavMenuBtn = ({ open, openState }: MobileNavMenuBtnProps) => {
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

export default MobileNavMenuBtn;
