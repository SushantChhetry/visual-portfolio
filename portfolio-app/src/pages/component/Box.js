import { useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Box = (props) => {
  const myMesh = useRef();
  const gltf = useLoader(GLTFLoader, "/sushi/scene.gltf");
  const ref = useRef();

  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime() / 2.5;
  });

  return (
    <mesh {...props} recieveShadow={true} castShadow ref={myMesh}>
      <primitive ref={ref} object={gltf.scene} />
    </mesh>
  );
};

export default Box;
