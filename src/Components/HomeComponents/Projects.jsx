import React from "react";
import { useNavigate } from "react-router";
import { projects } from "../../helpers/data";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="projects" id="projects">
      <div className="resume-header fs-1 fw-bold ">Portfolio</div>
      <div className="line border border-danger "></div>
      <div className="subtitle text-secondary fs-4 ">Projects</div>
      <div className="portfolio">
        {projects.map((project,index) => {
          return (
            <div key={index} className="project-area">
              <div className="project">
                <img src={project.id} alt="" />
                <div className="define text-center">
                  <div className="define-title">
                    <div>{project.title}</div>
                    <div
                      className="btn btn-success"
                      onClick={() => navigate(`${project.navto}`, {state: project})}
                    >
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
