import React from "react";

const Resume = () => {
  return (
    <div className="resume p-5" id="resume">
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
    </div>
  );
};

export default Resume;
