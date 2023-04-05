import { useRef, useState, useEffect } from "react";
import "intersection-observer";

const portfolio = () => {
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
      <div ref={containerRef}>
        {projs.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`item ${visibleIndex >= index ? "visible" : ""}`}
          >
            {item["title"]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default portfolio;
