import React from "react";
import "../styles/Home.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Johnny</h2>
        <div className="location">
          <div className="location-svg">
            <LocationOnIcon />
          </div>
          <h3>Auckland, &nbsp;New Zealand</h3>
        </div>
        <div className="prompt">
          <p>
            I am an aspiring Software Developer with a passion for learning and
            building software!
          </p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>
              ReactJS, React Native, HTML, CSS, BootStrap, Material UI
            </span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>MySQL, NodeJS, ExpressJS, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, PHP, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Home;
