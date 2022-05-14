import React from "react";
import "./main-icons.css";
import MainNavIcon from "../../components/main-nav-icon/MainNavIcon";

const MainIcons = (props) => {
  return (
    <div className="mainIcons grid">
      {props.navigationIconsData.map((item, index) => (
        <MainNavIcon key={index} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
};

export default MainIcons;
