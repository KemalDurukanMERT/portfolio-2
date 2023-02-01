import React from "react";
import logo from "../Assets/logo.png";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { TfiLinkedin } from "react-icons/tfi";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";

const Intro = () => {
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <div className="intro d-flex justify-content-between align-items-center p-4">
        <img src={logo} alt="" />
        <div className="menu">
          <div className="menu-icon">
            <AiOutlineMenu />
          </div>
          
          <div className="link-area">
            <a href="#sayhi" >Home</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="contact-boxs">
          <div className="contact-box">
            <FaGithubSquare />
          </div>
          <div className="contact-box">
            <ImMail />
          </div>
          <div className="contact-box">
            <TfiLinkedin />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Intro;
