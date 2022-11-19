import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <GitHubIcon
          onClick={() => window.open('https://github.com/imjohnnyy', '_blank')}
          style={{
            fontSize: 58,
            color: "white",
            margin: 20,
            cursor: "pointer",
          }}
        />
        <LinkedInIcon
          onClick={() => window.open('https://nz.linkedin.com/in/johnny-dong-', '_blank')}
          style={{
            fontSize: 60,
            color: "white",
            margin: 20,
            cursor: "pointer",
          }}
        />
        <EmailIcon
          onClick={() => window.location = 'mailto:imjohnnydong@gmail.com'}
          style={{
            fontSize: 60,
            color: "white",
            margin: 20,
            cursor: "pointer",
          }}
        />
      </div>
      <p> &copy;2022 johnnydong.me</p>
    </div>
  );
}
export default Footer;
