import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CodeIcon from "@mui/icons-material/Code";

import "./SocialButtons.css";

const SocialButtons = () => {
  return (
    <>
      <ul className="social-buttons">
        <li>
          <a href="#">
            <div className="icon-background instagram">
              <InstagramIcon fontSize="large" />
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon-background whatsapp">
              <PersonIcon fontSize="large" />
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon-background twitter">
              <TwitterIcon fontSize="large" />
            </div>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialButtons;
