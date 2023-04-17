import React from "react";
import Cat from "./Cat";

const NewIntro = () => {
  return (
    <div className="intro-container">
      <h1 className="intro-title">Who is Sushant?</h1>
      <p className="intro-description">
        s I am a sushi-loving web developer who creates beautiful and functional
        websites. Friends also call me sushi!
      </p>
      <Cat />
    </div>
  );
};

export default NewIntro;
