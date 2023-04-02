import { useState, useEffect } from "react";

const Start = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    setShowName(true);
  }, []);

  return (
    <div className="start-wrapper">
      <div className="start">
        <h1 className={`name ${showName ? "show" : ""}`}>Sushant</h1>
        <p>front end developer</p>
        <h1 className={`name ${showName ? "show" : ""}`}>Chhetry</h1>
        <button>Resume</button>
        <button>Gallery</button>
      </div>
    </div>
  );
};

export default Start;
