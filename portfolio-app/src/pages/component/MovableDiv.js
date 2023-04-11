import { useState } from "react";

const MovableDiv = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffSet, setDragOffSet] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 50, y: 50 });

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
  };

  return (
    <div
      className="drag-div"
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: 100,
        height: 100,
        backgroundColor: "blue",
        color: "white",
        cursor: "move",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      MovableDiv
    </div>
  );
};

export default MovableDiv;
