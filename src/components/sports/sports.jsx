import React from "react";
import "./sports.css";
import Sport from "../sport/Sport";

const sports = (props) => {
  return (
    <div className="sports">
      {props.dataCategories.map((categorie, index) => {
        return (
          !categorie.isFrequentlyVisited && (
            <Sport
              key={index}
              name={categorie.name}
              icon={categorie.icon}
              color={categorie.color}
              isfavorite={categorie.isfavorite}
              isFrequentlyVisited={categorie.isFrequentlyVisited}
            />
          )
        );
      })}
    </div>
  );
};
export default sports;
