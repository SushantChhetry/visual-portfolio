import React from "react";

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
  return (
    <div className="portfolio-wrapper">
      <h1>PROJECTS</h1>
      {projs.map((proj, key) => {})}
      <div className="proj">
        <h3>title</h3>
        <p>this is a description of the project</p>
      </div>
      <div className="proj">
        <h3>title</h3>
        <p>this is a description of the project</p>
      </div>
      <div className="proj">
        <h3>title</h3>
        <p>this is a description of the project</p>
      </div>
    </div>
  );
};

export default portfolio;
