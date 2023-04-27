import { useRef, useState, useEffect } from "react";
import "intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "next/image";

import MovableDiv from "./component/MovableDiv";

import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: "70vh" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", top: "70vh" }}
      onClick={onClick}
    />
  );
}

const portfolio = () => {
  var settings = {
    dots: true,
    fade: true,
    speed: 700,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="portfolio-wrapper">
      <h1>PROJECTS</h1>
      <Slider {...settings} className="slider">
        <div
          style={{
            display: "block",
            background: "green",
          }}
        >
          <div className="slide"></div>
        </div>
        <div>
          <div className="slide"></div>
        </div>
        <div>
          <div className="slide"></div>
        </div>
        <div>
          <div className="slide"></div>
        </div>
        <div>
          <div className="slide"></div>
        </div>
      </Slider>
    </div>
  );
};

export default portfolio;
