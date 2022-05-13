import React from "react";
import "./navigation-icons.css";
const NavigationIcons = ({ icon, name }) => {
  return (
    <div className="navigation--item flex">
      <div className="navigation--item__icon">{icon}</div>
      <div className="navigation--item__text">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default NavigationIcons;
