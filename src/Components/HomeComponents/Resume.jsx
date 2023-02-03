import React from "react";
import logo from "../../Assets/ibm-logo-white.png";
import { data } from "../../helpers/data";

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div className="resume-header fs-1 fw-bold">Resume</div>
      <div className="line border border-danger"></div>
      <div className="subtitle text-secondary fs-4">Education & Experience</div>
      <div className="experience-area">
        <div className="education">
          <div className="experience-cart">
            <div className="experience-cart-date-area">
              <div className="date1">2018</div>
              <div className="area1">Middle East Technical University</div>
            </div>
            <div className="definition1">
              <div className="definition-content">
                <div className="definition1-title">Chemical Engineering</div>
                <div className="definition1-main">
                  Engineering discipline gained in an international area. Main
                  significany of the department is multidiscipliner approach of
                  it. Important effect on problem solving with different
                  perspectives. Academic and social relations shaped the future
                  carrier.
                </div>
              </div>
            </div>
          </div>
          <div className="experience-cart">
            <div className="experience-cart-date-area">
              <div className="date1">2022</div>
              <div className="area1">
                University of Economics and Human Science
              </div>
            </div>
            <div className="definition1">
              <div className="definition-content">
                <div className="definition1-title">Computer Engineering</div>
                <div className="definition1-main">
                  High motivate to have an academic career in Computer Science.
                  Beside the self-working, a professional education and an
                  academic careeer in main area.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="experience-cart">
            <div className="experience-cart-date-area">
              <div className="date1">2020</div>
              <div className="area1">Agarta Natural Cosmetics</div>
            </div>
            <div className="definition1">
              <div className="definition-content">
                <div className="definition1-title">Intern Engineer</div>
                <div className="definition1-main">
                  Development in the production process and control of the
                  machines. Fast end effective solutions under critical
                  situations.
                </div>
              </div>
            </div>
          </div>
          <div className="experience-cart">
            <div className="experience-cart-date-area">
              <div className="date1">2022</div>
              <div className="area1">Clarusway</div>
            </div>
            <div className="definition1">
              <div className="definition-content">
                <div className="definition1-title">
                  Front End Developer Trainee
                </div>
                <div className="definition1-main">
                  Worked in an agile team of 7 members and provided responsive
                  projects. Used SCRUM & Agile methodologies and JIRA while
                  working on individual & group projects.
                </div>
              </div>
            </div>
          </div>
        </div>
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
          Skills
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
                    >
                      {console.log("progressbar__svg-circle circle-" +
                        skill.name.toLowerCase() +
                        " shadow-" +
                        skill.name.toLowerCase())}
                      {" "}
                    </circle>
                  </svg>
                  <span className={"progressbar__logo shadow-" + skill.name.toLowerCase()}>
                    <img src={skill.img} alt="" />
                  </span>
                  <span className={"progressbar__text shadow-" + skill.name.toLowerCase()}>
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
