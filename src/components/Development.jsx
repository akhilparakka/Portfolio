import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SpaceBike from "./SpaceBike";

const Development = () => {
  return (
    <Canvas camera={{ fov: 50 }}>
      <ambientLight />
      <OrbitControls enableZoom={false} autoRotate={true} />
      <SpaceBike />
    </Canvas>
  );
};
export default Development;
