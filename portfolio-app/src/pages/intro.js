import { useEffect, useRef, useState } from "react";
import MovableDiv from "./component/MovableDiv";

const intro = () => {
  const pRef = useRef(null);
  const posRef = useRef(null);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  useEffect(() => {
    const node = posRef.current;
    const winPos = node.getBoundingClientRect();
    setX(winPos.x);
    setY(winPos.y);
  }, [posRef]);

  return (
    <div className="intro-wrapper" ref={posRef}>
      <MovableDiv xPos={x} yPos={y} />
      <div class="bento-box">
        <h3>Who is Sushant?</h3>

        <div class="compartment big">
          <p>
            Hi, I'm Sushant, a frontend developer with a passion for creating
            beautiful and functional websites. With expertise in HTML, CSS, and
            JavaScript, I specialize in developing responsive websites that
            deliver a seamless user experience. Welcome to my portfolio!
          </p>
        </div>
        <div class="compartment">
          <ul>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
          </ul>
        </div>
        <div class="compartment">
          <ul>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default intro;
