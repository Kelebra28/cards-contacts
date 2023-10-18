import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CodeIcon from "@mui/icons-material/Code";

import "./SocialButtons.css";

const SocialButtons = ({ negative, icons }) => {
  const colorStyles= {
    '--borderIcon' : negative ? '#000000' : '#ffffff' 
  }
  if(!icons) {
    return null;
  }
  return (
    <>
    <ul className="social-buttons">
    {icons.map((icon) => {
      return(
        <li  key={icon.id}>
          <a className="fa-brands" target="_blank" href={icon.link}>
            <div className="icon-background fa-brands">
              {icon.icon}
            </div>
          </a>
        </li>
      )
    })}
    </ul>
    </>
  );
};

export default SocialButtons;
