import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className="footer">
      <div>
        <GitHubIcon />
        <LinkedInIcon />
        <EmailIcon />
      </div>
      <p> &copy; 2022 johnnydong.me</p>
    </div>
  );
}
export default Footer;
