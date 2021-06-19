import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container-carousel">
      <div className="carousel">
        <Slider {...settings}>
          <div className="carousel-item">
            <img src='/img/slideshow1.jpg' className="img-carousel"/>
          </div>
          <div className="carousel-item">
          <img src='/img/slideshow1.jpg' className="img-carousel"/>
          </div>
          <div className="carousel-item">
          <img src='/img/slideshow1.jpg' className="img-carousel"/>
          </div>
          <div className="carousel-item">
          <img src='/img/slideshow1.jpg' className="img-carousel"/>
          </div>
          <div className="carousel-item">
          <img src='/img/slideshow1.jpg' className="img-carousel"/>
          </div>
          <div className="carousel-item">
          <img src='/img/slideshow1.jpg' className="img-carousel"/>
          </div>
          <div className="carousel-item">
          <img src='/img/slideshow1.jpg' className="img-carousel"/>
          </div>
          <div className="carousel-item">
          <img src='/img/slideshow1.jpg' className="img-carousel"/>
          </div>
          <div className="carousel-item">
          <img src='/img/slideshow1.jpg' className="img-carousel"/>
          </div>
          <div className="carousel-item">
          <img src='/img/slideshow1.jpg' className="img-carousel"/>
          </div>
        </Slider>
      </div>
    </div>
  );
}
