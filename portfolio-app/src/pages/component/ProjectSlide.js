import React from "react";
import Slider from "react-slick";

const ProjectSlide = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ProjectSlide;
