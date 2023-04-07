import { useRef, useState, useEffect } from "react";
import "intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const projs = [
    {
      title: "Event Page",
      gif: "",
      description: "short description about this project",
    },
    {
      title: "File Parser",
      gif: "",
      description: "short description about this project",
    },
    {
      title: "Coming soon",
      gif: "",
      description: "short description about this project",
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(null);

  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.indexOf(entry.target);
          setVisibleIndex(index);
        }
      });
    });

    itemRefs.current.forEach((itemRef) => {
      observer.observe(itemRef);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio-wrapper">
      <h1>PROJECTS</h1>
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
        <div>
          <h3>Slide 4</h3>
        </div>
        <div>
          <h3>Slide 5</h3>
        </div>
      </Slider>
    </div>
  );
};

export default portfolio;
