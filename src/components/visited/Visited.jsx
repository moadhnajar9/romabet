import React from "react";
import "./visited.css";
import FrequentlyVisited from "../frequently-vsited/FrequentlyVisited";

const Visited = (props) => {
  return (
    <div>
      {props.dataCategories.map((categorie, index) => {
        return (
          categorie.isFrequentlyVisited && (
            <FrequentlyVisited
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

export default Visited;
