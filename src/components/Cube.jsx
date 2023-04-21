import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
  const textRef = useRef();
  const meshRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    meshRef.current.rotation.set(0, 0, time);
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach="background" args={["white"]} />
          <Text ref={textRef} fontSize={0.5} color="#000">
            Move Me
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};
export default Cube;
