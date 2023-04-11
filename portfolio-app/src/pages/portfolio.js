import { useRef, useState, useEffect } from "react";
import "intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <h1>PROJECTS</h1>
      <div className="proj-wrapper">
        <div className="proj-card"></div>
        <div className="proj-control"></div>
      </div>
    </div>
  );
};

export default portfolio;
