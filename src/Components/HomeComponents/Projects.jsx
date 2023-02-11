import React from 'react'
import { useNavigate } from 'react-router'
import scandiweb from "../../Assets/preview.gif"


const Projects = () => {

    const navigate= useNavigate();
  return (
    <div className="projects" id="projects">
      <div className="resume-header fs-1 fw-bold ">Portfolio</div>
      <div className="line border border-danger "></div>
      <div className="subtitle text-secondary fs-4 ">Projects</div>
      <div className="project-area">
        <div className="project">
            <img src={scandiweb} alt="" />
            <div className="define text-center">
                <div className="define-title">
                    <div>E-commerce Site</div>
                    <div className="btn btn-success" onClick={()=>navigate("/e-commerce",{} )}>View</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects