import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";
const slideImages = [
  "/img/slideshow1.jpg",
  "/img/slidshodow2.jpg",
  "/img/slideshow3.jpg",
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide className='fade-web'>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
