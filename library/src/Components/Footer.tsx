// ** import material mui icons

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import "../style/Footer.css";

// ** Footer cods **

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div>
        <hr />
      </div>
      <div className="social-media">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <p> There is no friend as loyal as a book </p>
      <span> - Ernest Hemingway</span>
    </div>
  );
};

export default Footer;
