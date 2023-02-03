import React from "react";
import logo from "../../Assets/ibm-logo-white.png";
import bootstrap from "../../Assets/bootstrap.png";
import css from "../../Assets/css.png";
import git from "../../Assets/git.png";
import github from "../../Assets/github.png";
import html from "../../Assets/html.png";
import javascript from "../../Assets/javascript.png";
import linux from "../../Assets/linux.png";
import postgresql from "../../Assets/postgresql.png";
import python from "../../Assets/python.png";
import react from "../../Assets/react.png";
import redux from "../../Assets/redux.png";
import sass from "../../Assets/sass.png";



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
      <div className="hard-skills">
        <div className="line border border-danger"></div>
        <div className="certificates-header fs-4 text-secondary">
          Certificates
        </div>
        <div class="container-hard-skills">
          <div class="container__progressbars">
            <div class="progressbar">
              <svg class="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  class="progressbar__svg-circle circle-html shadow-html"
                >
                  {" "}
                </circle>
              </svg>
              <span class="progressbar__logo shadow-html"><img src={html} alt=""/></span>
              <span class="progressbar__text shadow-html">HTML</span>
            </div>

            <div class="progressbar">
              <svg class="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  class="progressbar__svg-circle circle-css shadow-css"
                >
                  {" "}
                </circle>
              </svg>
              <span class="progressbar__logo shadow-css"><img src={css} alt=""/></span>
              <span class="progressbar__text shadow-css">CSS</span>
            </div>

            <div class="progressbar">
              <svg class="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  class="progressbar__svg-circle circle-scss shadow-scss"
                >
                  {" "}
                </circle>
              </svg>
              <span class="progressbar__logo shadow-css"><img src={sass} alt="" /></span>
              <span class="progressbar__text shadow-scss">SCSS</span>
            </div>

            <div class="progressbar">
              <svg class="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  class="progressbar__svg-circle circle-js shadow-js"
                >
                  {" "}
                </circle>
              </svg>
              <span class="progressbar__logo shadow-css"><img src={javascript} alt="" /></span>
              <span class="progressbar__text shadow-js">JavaScript</span>
            </div>

            <div class="progressbar">
              <svg class="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  class="progressbar__svg-circle circle-ts shadow-ts"
                >
                  {" "}
                </circle>
              </svg>
              <span class="progressbar__text shadow-ts">TypeScript</span>
            </div>

            <div class="progressbar">
              <svg class="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  class="progressbar__svg-circle circle-node shadow-node"
                >
                  {" "}
                </circle>
              </svg>
              <span class="progressbar__text shadow-node">Node.js</span>
            </div>

            <div class="progressbar">
              <svg class="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  class="progressbar__svg-circle circle-react shadow-react"
                >
                  {" "}
                </circle>
              </svg>
              <span class="progressbar__logo shadow-css"><img src={react} alt="" /></span>
              <span class="progressbar__text shadow-react">React.js</span>
            </div>
            <div class="progressbar">
              <svg class="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  class="progressbar__svg-circle circle-angular shadow-angular"
                >
                  {" "}
                </circle>
              </svg>
              <span class="progressbar__text shadow-angular">Angular.js</span>
            </div>
            <div class="progressbar">
              <svg class="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  class="progressbar__svg-circle circle-vue shadow-vue"
                >
                  {" "}
                </circle>
              </svg>
              <span class="progressbar__text shadow-vue">Vue.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
