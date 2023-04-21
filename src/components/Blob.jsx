import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Blob = () => {
  return (
    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
      <OrbitControls
        position0={[1, 2, 3]}
        autoRotate={true}
        autoRotateSpeed={10}
        enableZoom={false}
        rotation={([0, 6, 0], 0)}
      />
      <ambientLight intensity={1} />
      <directionalLight position={[1, 2, 3]} />
      <Sphere args={[1.4, 200, 300]} scale={1}>
        <MeshDistortMaterial attach="material" distort={0.5} speed={5} />
      </Sphere>
    </Canvas>
  );
};
export default Blob;
