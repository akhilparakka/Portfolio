import "./App.css";

import Hero from "./components/Hero";
import Who from "./components/Who";
import Contact from "./components/Contact";
import Work from "./components/Work";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <Container>
      <Hero />
      <Who />
      <Work />
      <Contact />
    </Container>
  );
};
export default App;
