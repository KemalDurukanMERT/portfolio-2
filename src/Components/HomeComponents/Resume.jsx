import React from "react";
import logo from "../../Assets/ibm-logo-white.png";
import { data } from "../../helpers/data";
import { skills } from "../../helpers/data";
import { education } from "../../helpers/data";
import { experiences } from "../../helpers/data";
import { TiArrowUnsorted } from "react-icons/ti";
import { Accordion } from "react-bootstrap";

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div className="resume-header fs-1 fw-bold">Resume</div>
      <div className="line border border-danger"></div>
      <div className="subtitle text-secondary fs-4">Education & Experience</div>
      <div className="experience-area">
        <Accordion flush className="education" bsPrefix="education">
          {education.map((sector, index) => {
            return (
              <Accordion.Item
                eventKey={index}
                className="experience-cart"
                key={index}
                bsPrefix="experience-cart"
              >
                <Accordion.Header
                  className="cart-header1 d-flex justify-content-between"
                  bsPrefix="cart-header1"
                >
                  <div>
                    <div className="experience-cart-date-area">
                      <div className="date1">{sector.year}</div>
                      <div className="area1">{sector.area}</div>
                    </div>
                    <div className="definition1-title mt-3">{sector.title}</div>
                  </div>
                  <div className={`cart-button`}>
                    <TiArrowUnsorted />
                  </div>
                </Accordion.Header>
                <Accordion.Body className="definition1">
                  <div className="definition-content">
                    <div className={`definition1-main text-light mt-2`}>
                      {sector.definition}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
        <Accordion flush className="education" bsPrefix="education">
          {experiences.map((sector, index) => {
            return (
              <Accordion.Item
                flush
                eventKey={index}
                className="experience-cart"
                key={index}
                bsPrefix="experience-cart"
              >
                <Accordion.Header
                  flush
                  className="cart-header1 d-flex justify-content-between"
                  bsPrefix="cart-header1"
                >
                  <div>
                    <div className="experience-cart-date-area">
                      <div className="date1">{sector.year}</div>
                      <div className="area1">{sector.area}</div>
                    </div>
                    <div className="definition1-title mt-3">{sector.title}</div>
                  </div>
                  <div className={`cart-button`}>
                    <TiArrowUnsorted />
                  </div>
                </Accordion.Header>
                <Accordion.Body className="definition1">
                  <div className="definition-content">
                    <div className={`definition1-main text-light`}>
                      {sector.definition}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
      <div className="certificates mt-5">
        <div className="line border border-danger"></div>
        <div className="certificates-header fs-4 text-secondary">
          Certificates
        </div>
        <div className="certificate-area">
          <div className="certificate-cart bg-secondary">
            <div className="certificate-logo bg-dark">
              <img src={logo} alt="" />
            </div>
            <div className="certificate-title">
              <a href="https://courses.edx.org/certificates/151a403b8db94597b8689ca0130c0e12">
                Cloud Development with HTML, CSS and JavaScript
              </a>
            </div>
          </div>
          <div className="certificate-cart bg-secondary">
            <div className="certificate-logo bg-dark">
              <img src={logo} alt="" />
            </div>
            <div className="certificate-title">
              <a href="https://courses.edx.org/certificates/14e2c4970b644c7394e4714c84429244">
                Python for Data Science
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="languages mt-5">
        <div className="line border border-danger"></div>
        <div className="languages-header fs-4 text-secondary mb-2">
          Languages
        </div>
        <div className="language-area">
          <div className="language-cart bg-warning rounded-2 p-1 m-1">
            Turkish
            <span className="p-3 text-secondary">
              <i>Native</i>
            </span>
          </div>
          <div className="language-cart bg-warning rounded-2 p-1 m-1">
            English
            <span className="p-3 text-secondary">
              <i>Professional Working Profeciency</i>
            </span>
          </div>
        </div>
      </div>
      <div className="hard-skills mt-5">
        <div className="line border border-danger"></div>
        <div className="certificates-header fs-4 text-secondary">
          Technical Skills
        </div>
        <div className="container-hard-skills">
          <div className="container__progressbars">
            {data.map((skill, index) => {
              return (
                <div className="progressbar" key={index}>
                  <svg className="progressbar__svg">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      className={
                        "progressbar__svg-circle circle-" +
                        skill.name.toLowerCase() +
                        " shadow-" +
                        skill.name.toLowerCase()
                      }
                    ></circle>
                  </svg>
                  <span
                    className={
                      "progressbar__logo shadow-" + skill.name.toLowerCase()
                    }
                  >
                    <img src={skill.img} alt="" />
                  </span>
                  <span
                    className={
                      "progressbar__text shadow-" + skill.name.toLowerCase()
                    }
                  >
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="soft-skills mt-5">
        <div className="line border border-danger"></div>
        <div className="certificates-header fs-4 text-secondary">
          Soft Skills
        </div>
        <div className="container-soft-skills d-flex flex-wrap gap-3">
          {skills.map((skill, index) => {
            return (
              <div className="container-skill" key={index}>
                <label htmlFor={"skill" + index}>{skill}</label>
                <div id={"skill" + index} className="Loading-skill"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
