import { useState } from "react";

const MovableDiv = ({ xPos, yPos }) => {
  const [textDiv, setTextDiv] = useState("Movable Div");
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffSet, setDragOffSet] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: xPos, y: yPos });
  const [divStyle, setDivStyle] = useState({
    position: "absolute",
    top: position.y,
    left: position.x,
    width: "100%",
    height: "100%",
    backgroundColor: "blue",
    color: "white",
    cursor: "move",
  });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragOffSet({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setPosition({
        x: event.clientX - dragOffSet.x,
        y: event.clientY - dragOffSet.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    setDivStyle({
      width: "0%",
      height: "0%",
    });
    setTextDiv("");
  };

  return (
    <div
      className="drag-div"
      style={divStyle}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {textDiv}
    </div>
  );
};

export default MovableDiv;
