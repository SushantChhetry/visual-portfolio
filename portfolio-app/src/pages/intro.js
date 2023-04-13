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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            finibus hendrerit diam, id pellentesque lacus placerat et. Aliquam
            ut ultrices arcu. Vestibulum bibendum sed ligula non tristique. Nam
            aliquam pellentesque arcu et vestibulum. Donec quam libero, eleifend
            sed vehicula sed, rutrum vel massa. In vestibulum est vitae arcu
            convallis, non varius nunc posuere.
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
