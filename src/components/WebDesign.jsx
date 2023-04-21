import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";
import styled from "styled-components";

const Description = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  color: black;
  font-size: 14px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    top: 50%;
    right: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => (
  <>
    <Canvas camera={{ fov: 50 }}>
      <ambientLight />
      <OrbitControls enableZoom={false} autoRotate={true} />
      <Computer />
    </Canvas>
    {/* <Description>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eligendi
      fugiat accusamus ad, rerum recusandae quis deserunt consequatur
      consectetur
    </Description> */}
  </>
);
export default WebDesign;
