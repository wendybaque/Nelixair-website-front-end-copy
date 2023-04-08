import React from "react";
import "./carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {

  const datas = [
    {
      id: 1,
      image: "https://www.hebergeur-image.com/upload/88.174.47.6-63e6579c17715.png",
      title: "Title slider 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      id: 2,
      image: "https://www.hebergeur-image.com/upload/88.174.47.6-63e657c94211a.png",
      title: "Title slider 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      id: 3,
      image: "https://www.hebergeur-image.com/upload/88.174.47.6-63e657ea88827.png",
      title: "Title slider 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];
  return (
    <Carousel
    autoPlay
    interval={3000}
    infiniteLoop
    thumbWidth={120}
    showIndicators={true}
    showStatus={false}
    autoFocus={false}
    dynamicHeight={true}
    >
      {datas.map((slide) => (
        <div key={slide.id} aria-label="string" className="bg-light">
          <img src={slide.image} alt=""/>
          <div className="overlay">
            <h2 className="overlay-title">{slide.title}</h2>
            <p className="overlay-text">{slide.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
