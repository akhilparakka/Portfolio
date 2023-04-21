import styled from "styled-components";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  margin: 0;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
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
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Thinking outside 2D</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>The future is 3D</Subtitle>
          </WhatWeDo>
          <Desc>Experimenting with threeJS</Desc>
          <Button>See My works</Button>
        </Right>
      </Container>
    </Section>
  );
};
export default Who;
