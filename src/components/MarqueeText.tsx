import { LiaAsteriskSolid } from "react-icons/lia";

const MarqueeText = () => {
  return (
    <div className="flex">
      <h1 className="my-2 ml-8 flex items-center text-5xl tracking-tighter sm:my-8 sm:text-8xl md:text-9xl xl:text-[10rem]">
        my projects
        <LiaAsteriskSolid className="ml-8 animate-spin-slow" />
      </h1>
    </div>
  );
};

export default MarqueeText;
