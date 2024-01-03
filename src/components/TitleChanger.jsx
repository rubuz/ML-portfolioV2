import React, { useEffect, useState } from "react";

import { Slide } from "react-awesome-reveal";

import Title1 from "../assets/text1.webp";
import Title2 from "../assets/text2.webp";
import Title3 from "../assets/text3.webp";
import Title4 from "../assets/text4.webp";
import Title5 from "../assets/text5.webp";
import Title6 from "../assets/text6.webp";
import Title7 from "../assets/text7.webp";
import Title8 from "../assets/text8.webp";
import Title9 from "../assets/text9.webp";
import Title10 from "../assets/text10.webp";
import Title11 from "../assets/text11.webp";
import Title12 from "../assets/text12.webp";

const TitleChanger = () => {
  const images = [
    Title1,
    Title2,
    Title3,
    Title4,
    Title5,
    Title6,
    Title7,
    Title8,
    Title9,
    Title10,
    Title11,
    Title12,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    let timeout;

    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    timeout = setTimeout(
      () => {
        changeImage();
      },
      currentImageIndex === 0 ? 1500 : 120
    );

    // Clear timeout when component unmounts
    return () => clearTimeout(timeout);
  }, [currentImageIndex, images]);

  return (
    <section className="max-w-[1400px] h-[230px] mx-auto flex justify-center items-center">
      <Slide
        direction="down"
        triggerOnce="true"
        className="h-max-[200px] w-2/3 flex justify-center items-center"
      >
        <img
          src={images[currentImageIndex]}
          alt="title-lovenjak"
          className="object-contain"
        />
      </Slide>
    </section>
  );
};

export default TitleChanger;
