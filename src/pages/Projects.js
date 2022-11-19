import React from "react";
import ProjectItem from "../components/ProjectItem";
import CabsPro from '../assets/CabsPro Website.png'
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name="CabsPro" image={CabsPro} />
      </div>
    </div>
  )
}
export default Projects