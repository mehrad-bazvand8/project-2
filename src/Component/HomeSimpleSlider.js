import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSimpleSlider.css";
import { Route, NavLink, HashRouter, Link, Form } from "react-router-dom";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container-HomeSimpleSlider">
      <div className="HomeSimpleSlider1">
        <Slider {...settings}>
          <div className="HomeSimpleSlider1-item">
            <Link to="/">
              <div class="HomeSimpleSlider1-card">
                <img
                  className="HomeSimpleSlider1-img"
                  src="/img/carousel1.jpg"
                  alt="Denim Jeans"
                />
                <span className="SimpleSlider1-Discount">20%</span>
                <h1>پیراهن مردانه </h1>
                <p className="price">$19.99</p>
                <p className="price-through">$19.99</p>
              </div>
            </Link>
          </div>
          <div className="HomeSimpleSlider1-item">
            <Link to="/">
              <div class="HomeSimpleSlider1-card">
                <img
                  className="HomeSimpleSlider1-img"
                  src="/img/carousel2.jpg"
                  alt="Denim Jeans"
                />
                <span className="SimpleSlider1-Discount">20%</span>
                <h1>عینک زنانه مدل ریبون</h1>
                <p className="price">600،000 تومان</p>
                <p className="price-through">600،000 تومان</p>
              </div>
            </Link>
          </div>
          <div className="HomeSimpleSlider1-item">
          <Link to="/">
            <div className="HomeSimpleSlider1-card">
              <img
                className="HomeSimpleSlider1-img"
                src="/img/carousel3.jpg"
                alt="Denim Jeans"
              />
              
              <span className="SimpleSlider1-Discount">20%</span>
              <h1>تیشرت مردانه با متن خارجی</h1>
              <p className="price">150،000 تومان</p>
              <p className="price-through">150،000 تومان</p>
            </div>
            </Link>
          </div>
          <div className="HomeSimpleSlider1-item">
          <Link to="/">
            <div className="HomeSimpleSlider1-card">
              <img
                className="HomeSimpleSlider1-img"
                src="/img/carousel4.jpg"
                alt="Denim Jeans"
              />
              <span className="SimpleSlider1-Discount">20%</span>
              <h1>شلوار زنانه مشکی</h1>
              <p className="price">300،000 تومان</p>
              <p className="price-through">300،000 تومان</p>
            </div>{" "}
            </Link>
          </div>
          <div className="HomeSimpleSlider1-item">
          <Link to="/">
            <div class="HomeSimpleSlider1-card">
              <img
                className="HomeSimpleSlider1-img"
                src="/img/carousel5.jpg"
                alt="Denim Jeans"
              />
              <span className="SimpleSlider1-Discount">20%</span>
              <h1>پماد زد افتاب زنانه</h1>
              <p className="price">900،000 تومان</p>
              <p className="price-through">900،000 تومان</p>
            </div>{" "}
            </Link>
          </div>
          <div className="HomeSimpleSlider1-item">
          <Link to="/">
            <div className="HomeSimpleSlider1-card">
              <img
                className="HomeSimpleSlider1-img"
                src="/img/carousel6.jpg"
                alt="Denim Jeans"
              />
              <span className="SimpleSlider1-Discount">20%</span>
              <h1>لاک اکلیلی قهوه ای</h1>
              <p className="price">50،000 تومان</p>
              <p className="price-through">120،000 تومان</p>
            </div>{" "}
            |</Link>
          </div>
          <div className="HomeSimpleSlider1-item">
          <Link to="/">
            <div className="HomeSimpleSlider1-card">
              <img
                className="HomeSimpleSlider1-img"
                src="/img/carousel8.jpg"
                alt="Denim Jeans"
              />
              <span className="SimpleSlider1-Discount">20%</span>
              <h1>تیشرت بچگانه سه رنگ </h1>
              <p className="price">70،000 تومان</p>
              <p className="price-through">120،000 تومان</p>
            </div>{" "}
            </Link>
          </div>
          <div className="HomeSimpleSlider1-item">
          <Link to="/">
            <div className="HomeSimpleSlider1-card">
              <img
                className="HomeSimpleSlider1-img"
                src="/img/carousel9.jpg"
                alt="Denim Jeans"
              />
              <span className="SimpleSlider1-Discount">20%</span>
              <h1>بولیز زنانه سفید</h1>
              <p className="price">120،000 تومان</p>
              <p className="price-through">150،000 تومان</p>
            </div>
            </Link>
          </div>
          <div className="HomeSimpleSlider1-item">
          <Link to="/">
            <div class="HomeSimpleSlider1-card">
              <img
                className="HomeSimpleSlider1-img"
                src="/img/carousel4.jpg"
                alt="Denim Jeans"
              />
              <span className="SimpleSlider1-Discount">20%</span>
              <h1>شلوار زنانه</h1>
              <p className="price"> تومان 200،0000</p>
              <p className="price-through">300،000 تومان</p>
            </div>
            </Link>
          </div>
          <div className="HomeSimpleSlider1-item">
          <Link to="/www.google.com">
            <div class="HomeSimpleSlider1-card">
              <img
                className="HomeSimpleSlider1-img"
                src="img/carousel9.jpg"
                alt="Denim Jeans"
              />
              <span className="SimpleSlider1-Discount">20%</span>

              <h1>بولیز زنانه سفید</h1>
              <p className="price">120،000 تومان</p>
              <p className="price-through">140،000 تومان</p>
            </div>
            </Link>
          </div>
        </Slider>
        <Link to="/"><button className="btn-carousel">مشاهده همه</button></Link>
      </div>
    </div>
  );
}
