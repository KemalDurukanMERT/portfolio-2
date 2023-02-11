import React from "react";
import { Container } from "react-bootstrap";
import About from "./About";
import "./HomeComponents.css";
import "./HomeComponent.scss";
import Resume from "./Resume";
import SayHi from "./SayHi";
import Contact from "./Contact";
import Projects from "./Projects";

const MainHome = () => {
  return (
    <div className="MainHome">
      <Container className="MainHome-container p-0">
        <SayHi />
        <About />
        <Resume/>
        <Projects/>
        <Contact/>
      </Container>
    </div>
  );
};

export default MainHome;
