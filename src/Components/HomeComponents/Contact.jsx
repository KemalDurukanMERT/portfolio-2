import React, { useState } from "react";
import MailForm from "./MaılForm";

function Contact() {
  const [focus, setFocus] = useState(false);
  return (
    <div className="contact" id="contact">
      <div className="contact-header fs-1 fw-bold">Contact</div>
      <div className="line border border-danger"></div>
      <div className="subtitle text-secondary fs-4">Get in Touch</div>
      <div className="mail-area" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
        <div className="mail-form mt-3 w-75" >
          <MailForm setFocus={setFocus}></MailForm>
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
