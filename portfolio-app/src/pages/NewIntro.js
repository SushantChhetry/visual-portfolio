import React from "react";

import { Canvas } from "@react-three/fiber";
import LightBulb from "./component/LightBulb";
import Box from "./component/Box";
import Controls from "./component/OrbitControls";
import Cat from "./component/Cat";

import {
  DiReact,
  DiJavascript1,
  DiJava,
  DiMysql,
  DiSass,
} from "react-icons/di";

const NewIntro = () => {
  return (
    <div className="intro-container">
      <div
        className="intro"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10% 0 0",
        }}
      >
        <h1 className="intro-title">Who is Sushant?</h1>

        <p className="intro-description">
          I am a sushi-loving web developer who creates beautiful and functional
          websites. Friends also call me sushi!
        </p>
        <ul
          style={{
            listStyle: "none",
            margin: "10%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <li className="logos">
            <DiJava size={50} />
          </li>
          <li className="logos">
            <DiJavascript1 size={50} />
          </li>
          <li className="logos">
            <DiReact size={50} />
          </li>
          <li className="logos">
            <DiMysql size={50} />
          </li>
          <li className="logos">
            <DiSass size={50} />
          </li>
        </ul>
      </div>

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
          <Cat rotateX={3} rotateY={0.2} scale={[2, 2, 2]} />
        </Canvas>
      </div>
    </div>
  );
};

export default NewIntro;
