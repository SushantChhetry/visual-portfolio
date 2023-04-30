import { useRef, useState, useEffect } from "react";
import "intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
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
      <p>Check out some of my stuff!</p>
      <Slider {...settings} className="slider">
        <div>
          <div className="slide">
            <Image src={"/rice.png"} width={300} height={200} />
            <div className="info">
              <h4>Alumni Weekened</h4>
              <p>Website for event</p>
              <ul>
                <li>Next</li>
                <li>React</li>
              </ul>
              <ul>
                <li>Github</li>
                <li>Site</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="slide">
            <Image src={"/rice.png"} width={300} height={200} />
            <div className="info">
              <h4>Alumni Weekened</h4>
              <p>Website for event</p>
              <ul>
                <li>Next</li>
                <li>React</li>
              </ul>
              <ul>
                <li>Github</li>
                <li>Site</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="slide">
            <Image src={"/rice.png"} width={300} height={200} />
            <div className="info">
              <h4>Alumni Weekened</h4>
              <p>Website for event</p>
              <ul>
                <li>Next</li>
                <li>React</li>
              </ul>
              <ul>
                <li>Github</li>
                <li>Site</li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default portfolio;
