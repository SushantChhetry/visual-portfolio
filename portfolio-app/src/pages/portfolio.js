import { useRef, useState, useEffect } from "react";
import "intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import MovableDiv from "./component/MovableDiv";

import "slick-carousel/slick/slick-theme.css";

const portfolio = () => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          <h3>this is a text1</h3>
        </div>
        <div>
          <h3>this is a text2</h3>
        </div>
        <div>
          <h3>this is a text3</h3>
        </div>
        <div>
          <h3>this is a text4</h3>
        </div>
        <div>
          <h3>this is a text5</h3>
        </div>
        <div>
          <h3>this is a text6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default portfolio;
