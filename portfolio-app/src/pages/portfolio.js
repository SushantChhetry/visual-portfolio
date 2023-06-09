import { useState } from "react";
import "intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { DiReact, DiSass, DiNodejsSmall } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

// parallax
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/alumni-weekend.jpg",
    title: "Alumni Weekend",
    description: "Engaging website for an Alumni Weekend event using Next.js",
    technologies: [
      <TbBrandNextjs size={26} />,
      <DiReact size={26} />,
      <DiNodejsSmall size={26} />,
    ],
    githubLink: "https://github.com/SushantChhetry/alumni-weekend-react-app",
    siteLink: "https://example.com",
  },
  {
    id: 2,
    image: "/art.png",
    title: "Art.",
    description:
      "Built with Next.js, fetches and displays art from an API in a visually stunning gallery format.",
    technologies: [
      <TbBrandNextjs size={26} />,
      <DiReact size={26} />,
      <DiNodejsSmall size={26} />,
    ],
    githubLink: "https://github.com/SushantChhetry/art",
    siteLink: "",
  },
  {
    id: 3,
    image: "/form.jpg",
    title: "Form Generator",
    description:
      "The Next.js Text Form Generator is a powerful tool that dynamically creates text files with customizable fields and space utilization.",
    technologies: [
      <TbBrandNextjs size={26} />,
      <DiReact size={26} />,
      <DiNodejsSmall size={26} />,
    ],
    githubLink: "https://github.com/SushantChhetry/form-generator",
    siteLink: "",
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
      <ParallaxProvider>
        <Parallax speed={8}>
          <div className="project-title">
            <h1>PROJECTS</h1>
            <p>Check out some of my stuff!</p>
          </div>
        </Parallax>
      </ParallaxProvider>
      <Slider {...settings} className="slider">
        {projectsData.map((project) => (
          <div key={project.id} style={{ display: "flex" }}>
            <div className="slide" key={`slide-${project.id}`}>
              <Image
                src={project.image}
                width={300}
                height={200}
                style={{ margin: "3%" }}
                alt={`project`}
              />

              <div className="info" key={`info-${project.id}`}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="icons-wrapper" key={`icon-${project.id}`}>
                  <div className="technology-icons" key={`tech-${project.id}`}>
                    {project.technologies.map((technology, index) => (
                      <span key={`tech-${project.id}-${index}`}>
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="links-icons" key={`link-${project.id}`}>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={22} className="link-icon" />
                    </a>
                    {project.siteLink ? (
                      <a
                        href={project.siteLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaExternalLinkAlt size={22} className="link-icon" />
                      </a>
                    ) : (
                      ""
                    )}
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
