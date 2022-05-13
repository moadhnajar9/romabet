import React from "react";
import "./sport.css";
import { AiFillStar } from "react-icons/ai";

function Sport({ name, icon, color, isfavorite, isFrequentlyVisited }) {
  return (
    <div className="sport flex">
      <div className="sport__item flex">
        <div
          className="sport__item--icon"
          style={{ boxShadow: `inset 3px 0 0 ${color}` }}
        >
          {icon}
        </div>
        <div className="sport__item--name">{name}</div>
      </div>
      <div className="sport__star">
        <AiFillStar size="20" color="gray" />
      </div>
    </div>
  );
}

export default Sport;
