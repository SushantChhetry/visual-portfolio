import React from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Controls = () => {
  const { camera, gl } = useThree();
  const controlsRef = React.useRef();

  useFrame(() => {
    controlsRef.current.update();
  });

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

export default Controls;
