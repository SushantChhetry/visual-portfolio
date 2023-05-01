import { useState } from "react";
import "intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/alumni-weekend.jpg",
    title: "Alumni Weekened",
    description: "Engaging website for an Alumni Weekend event using Next.js",
    technologies: ["Next", "React"],
    githubLink: "https://github.com/example",
    siteLink: "https://example.com",
  },
  {
    id: 2,
    image: "/rice.png",
    title: "Another Project",
    description: "Website for event",
    technologies: ["Next", "React"],
    githubLink: "https://github.com/example",
    siteLink: "https://example.com",
  },
  {
    id: 3,
    image: "/rice.png",
    title: "One More Project",
    description: "Website for event",
    technologies: ["Next", "React"],
    githubLink: "https://github.com/example",
    siteLink: "https://example.com",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "green" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "green" }}
      onClick={onClick}
    />
  );
}

const Portfolio = () => {
  const [projectsData, setProjectsData] = useState(projects);

  const settings = {
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
        {projectsData.map((project) => (
          <div key={project.id}>
            <div className="slide">
              <Image src={project.image} width={300} height={200} />
              <div className="info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="icons-wrapper">
                  <div className="technology-icons">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <div className="links-icons">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <a href={project.siteLink} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
