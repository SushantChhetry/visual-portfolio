import { useRef, useState, useEffect } from "react";
import "intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import MovableDiv from "./component/MovableDiv";

import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue", top: "50vh" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", top: "50vh" }}
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

  const posRef = useRef(null);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  useEffect(() => {
    const node = posRef.current;
    const winPos = node.getBoundingClientRect();
    setX(winPos.x);
    setY(winPos.y);
  }, [posRef]);

  return (
    <div className="portfolio-wrapper" ref={posRef}>
      <MovableDiv xPos={x} yPos={y} />
      <h1>PROJECTS</h1>
      <Slider {...settings} className="slider">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default portfolio;
