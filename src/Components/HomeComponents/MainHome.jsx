import React from "react";
import { Container } from "react-bootstrap";
import About from "./About";
import "./HomeComponents.css";
import SayHi from "./SayHi";

const MainHome = () => {
  return (
    <div className="MainHome">
      <Container className="MainHome-container p-0">
        <SayHi/>
        <About/>
      </Container>
    </div>
  );
};

export default MainHome;
