import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Avatar } from "@mui/material";
import Johnny from "../assets/Johnny_Dong.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <Avatar
          alt="Johnny Dong"
          src={Johnny}
          sx={{ height: "250px", width: "250px" }}
        />
        <h2>Hi, I'm Johnny Dong</h2>
        <div className="location">
          <div className="location-svg">
            <LocationOnIcon />
          </div>
          <h3>Auckland, New Zealand</h3>
        </div>
        <div className="prompt">
          <p>
            I am an aspiring Software Developer with a passion for learning and
            building software!
          </p>
        </div>
      </div>
      <div className="skills">
        <ol className="list">
          <h1>Skills</h1>
          <li className="item">
            <h2>Front-end</h2>
            <span>React, React Native, HTML, CSS, BootStrap, Material UI</span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>MySQL, Node.js, Express.js, MongoDB</span>
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
