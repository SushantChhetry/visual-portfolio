import React from "react";

import { Canvas } from "@react-three/fiber";
import LightBulb from "./component/LightBulb";

const Cat = () => {
  return (
    <div className="scene">
      <Canvas
        shadows
        className="canvas"
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.5} />
        <LightBulb position={[0, 4, 0]} />
        <Cat rotateX={3} rotateY={0.2} scale={[3, 3, 3]} />
      </Canvas>
    </div>
  );
};

export default Cat;
