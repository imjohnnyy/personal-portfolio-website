import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div>
        <GitHubIcon  style={{ fontSize: 58, color:"white", margin: 20 }}/>
        <LinkedInIcon  style={{ fontSize: 60, color:"white", margin: 20 }}/>
        <EmailIcon  style={{ fontSize: 60, color:"white", margin: 20 }}/>
      </div>
      <p> &copy;2022 johnnydong.me</p>
    </div>
  );
}
export default Footer;
