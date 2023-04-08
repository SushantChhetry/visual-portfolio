import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props) => {
  const myMesh = useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime() / 2.5;
  });

  return (
    <mesh {...props} recieveShadow={true} castShadow ref={myMesh}>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
};

export default Box;
