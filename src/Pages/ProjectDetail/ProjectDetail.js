import React from "react";
import "./Detail.scss";
import { useLocation, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ProductDetail = () => {
  const { state: project } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="project-detail-container">
      <div className="detail">
        <div className="project-detail-title mt-3">{project.title}</div>
        <div className="gif-area">
          <img src={project.id} alt="" />
        </div>
        <div className="explanation">{project.explanation}</div>
        <div className="used-tools">
          {project.usedTools.map((tool, index) => {
            return (
              <div className="tool1" key={index}>
                <div className="layer">{tool[1]}</div>
                <img src={tool[0]} alt="" />
              </div>
            );
          })}
        </div>
        <div className="sources">
          <a href={project.sourceCode} className="source-code btn">
            Source Code
          </a>
          {project.liveServer !== "" && (
            <a href={project.liveServer} className="live-server btn">
              Live Server
            </a>
          )}
        </div>
        <a
          href="#projects"
          className="btn btn-danger return"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft />
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
