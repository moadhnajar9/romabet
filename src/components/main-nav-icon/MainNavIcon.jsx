import React from "react";
import "./main-nav-icon.css";
const MainNavIcon = ({ name, icon }) => {
  return (
    <div className="main-nav-icon__container flex">
      <div className="main-nav-icon__icon">{icon}</div>
      <div className="main-nav-icon__name">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default MainNavIcon;
