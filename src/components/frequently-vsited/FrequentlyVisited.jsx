import React from "react";
import "./frequently-visited.css";

function FrequentlyVisited({
  name,
  icon,
  color,
  isfavorite,
  isFrequentlyVisited,
}) {
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
      <div className="sport__star"></div>
    </div>
  );
}

export default FrequentlyVisited;
