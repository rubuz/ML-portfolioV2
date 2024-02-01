import { BsArrowRight } from "react-icons/bs";

type ButtonProps = {
  text: string;
  textColor: string;
  bgColor: string;
  iconColor: string;
  circleColor: string;
};

const Button = ({
  text,
  textColor,
  bgColor,
  iconColor,
  circleColor,
}: ButtonProps) => {
  return (
    <div
      className={`${bgColor} group relative flex items-center justify-center rounded-full py-2 pl-10 pr-8 text-lg sm:py-5 sm:pl-16 sm:pr-12`}
    >
      <p className={`flex h-10 items-center ${textColor}`}>{text}</p>
      <div
        className={`ml-4 flex h-0 w-0 items-center justify-center ${circleColor} rotate-[-180deg] rounded-full p-0 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:rotate-[-45deg] group-hover:p-1 sm:group-hover:h-10 sm:group-hover:w-10`}
      >
        <BsArrowRight className={`text-2xl ${iconColor}`} />
      </div>
    </div>
  );
};

export default Button;
