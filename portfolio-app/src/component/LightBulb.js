import React from "react";

const LightBulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <meshPhongMaterial emissive={"yellow"} />
    </mesh>
  );
};

export default LightBulb;
