import React from "react";
import "./ButtonAnimation.css"; // Import your CSS file

const ButtonAnimation = ({ label, link, backgroundColor, icon }) => {
    const backgroundStyle = {
        "--background": backgroundColor
   }
  
    return (
    <div className="container">
      <div
        className="btn"
        style={backgroundStyle}
      >
        <a href={link}>
          {icon && <span className="icon">{icon}</span>}
          {label}
        </a>
      </div>
    </div>
  );
};

export default ButtonAnimation;
