import React from "react";

import { Canvas } from "@react-three/fiber";
import LightBulb from "./component/LightBulb";
import Box from "./component/Box";
import Controls from "./component/OrbitControls";

const Sushi = () => {
  return (
    <div className="scene">
      <h3>AKA SUSHI</h3>
      <Canvas
        shadows
        className="canvas"
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.5} />
        <LightBulb position={[0, 4, 0]} />
        <Box rotateX={3} rotateY={0.2} scale={[3, 3, 3]} />
        <Controls />
      </Canvas>
    </div>
  );
};

export default Sushi;
