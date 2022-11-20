import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects Showcase</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return (
            <ProjectItem
              name={project.name}
              image={project.image}
              description={project.description}
              projectLocation={project.projectLocation}
              skills={project.skills}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
