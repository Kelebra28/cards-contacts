import React, { useState, useEffect} from "react";
import "./ButtonAnimation.css"; // Import your CSS file

const ButtonAnimation = ({ label, link, backgroundColor, icon, expand, textColor, negative }) => {
  const [widthButton, setWidthButton] = useState(false)
    const backgroundStyle = {
        "--background": backgroundColor,
        "--textColor": textColor,
   }
  
   useEffect(() => {

    if (label && label.length > 20 && expand) {
      setWidthButton(!widthButton)
    }

   }, [label])

    return (
    <div className="container">
      <div
        className={expand && widthButton ? 'btnL' : 'btn'}
        style={backgroundStyle}
      >
        <a target="_blank" href={link}>
          {icon && <span className="icon">{icon}</span>}
          {label}
        </a>
      </div>
    </div>
  );
};

export default ButtonAnimation;
