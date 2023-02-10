import React, { useState } from "react";
import Mail from "./Mail";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  const [focus, setFocus] = useState(false);
  const [mail, setMail] = useState(false);

  return (
    <div className="contact" id="contact">
      <div className="head-contact">
        <div className="contact-header fs-1 fw-bold">Contact</div>
        <div className="line border border-danger"></div>
        <div className="subtitle text-secondary fs-4">Get in Touch</div>
      </div>
      <div
        className="mail-area"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <div className="contact-symbol">
          <div className="contact-logo">
            <a
              href="https://github.com/KemalDurukanMERT"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="contact-logo">
            <a
              href="https://www.linkedin.com/in/kemal-durukan-mert1/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="contact-logo" onMouseOver={()=>setMail(true)} onMouseLeave={()=> setMail(false)} >
            <a href="#mailForm">
              <AiOutlineMail />
            </a>
          </div>
        </div>
        <div className="mail-form" id="mailForm" style={mail ? {border: "5px solid #235867"} : {}}>
          <Mail></Mail>
        </div>

        <div
          className="phone-side"
          style={focus ? { display: "block" } : { display: "none" }}
        >
          <div className="phone">
            <div className="phone-out">
              <div className="phone-mic"></div>
              <div className="phone-screen"></div>
              <div className="phone-touch"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
