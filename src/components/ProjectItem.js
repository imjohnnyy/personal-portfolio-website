import React from "react";

function ProjectItem({ image, name, description, projectLocation, skills}) {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <button
        onClick={() => window.open(`${projectLocation}`, "_blank")}
        className="projectBtn"
      >
        Source Code
      </button>
      <div>
        <b>Skills used:</b> {skills} 
      </div>
      <h2 className="projectDescription">{description}</h2>
    </div>
  );
}
export default ProjectItem;
