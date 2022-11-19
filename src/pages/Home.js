import React from "react";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Johnny.</h2>
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
            <span>ReactJS, React Native, HTML, CSS, BootStrap, Material UI</span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>MySQL, NodeJS, ExpressJS, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Home;
