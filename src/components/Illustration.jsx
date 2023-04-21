import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";
import Drone from "./Drone";

const Illustration = () => {
  return (
    <Canvas camera={{ fov: 50 }}>
      <ambientLight />
      <OrbitControls enableZoom={false} autoRotate={true} />
      <Drone />
    </Canvas>
  );
};
export default Illustration;
