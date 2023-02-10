import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";

const Intro = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <div className="intro d-flex justify-content-between align-items-center p-4">
        <img src={logo} alt="" />
        <div className={`menu-${menuIcon}`}>
          <div className={`menu-icon`} onClick={() => setMenuIcon(!menuIcon)}>
            {/* {console.log(`menu-icon-${menuIcon}`)} */}
            <AiOutlineMenu />
          </div>

          <div className="link-area">
            <a href="#sayhi">Home</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="contact-boxs">
          <div className="contact-box">
            <a
              href="https://github.com/KemalDurukanMERT"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="contact-box">
            <a
              href="https://www.linkedin.com/in/kemal-durukan-mert1/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="contact-box">
            <a href="#mailForm">
              <AiOutlineMail />
            </a>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Intro;
