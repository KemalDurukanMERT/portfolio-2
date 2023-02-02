import React from "react";
import { Button } from "react-bootstrap";
import profil from "../../Assets/IMG_3462.jpg";
import resume from "../../Data/Kemal Durukan MERT Resume.docx";

const SayHi = () => {
  return (
    <div className="sayhi" id="sayhi">
      <div className="left">
        <div className="hello text-danger fs-5">Hi, I'm</div>
        <div className="name fs-1 fw-bold">
          Kemal Durukan <span className="d-block">MERT</span>
        </div>
        <div className="line border border-danger"></div>
        <div className="title text-dark mb-3">Full Stack Developer</div>
        <div className="buttons d-flex flex-wrap gap-1">
          <Button variant="danger" className="button">
            <a href={resume} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </Button>
          <Button variant="dark" className="button">
            <a href="#portfolio">View Portfolio</a>
          </Button>
        </div>
      </div>
      <div className="right">
        <img src={profil} alt="" />
      </div>
    </div>
  );
};

export default SayHi;
