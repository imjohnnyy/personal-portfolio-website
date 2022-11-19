import React from "react";

function ProjectItem({ image, name, description, projectLocation }) {
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
      <h2 className="projectDescription">{description}</h2>
    </div>
  );
}
export default ProjectItem;
