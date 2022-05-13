import React from "react";
import "./sidebar.css";

import Sports from "../../components/sports/sports";
import Visited from "../../components/visited/Visited";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiFillCompass } from "react-icons/ai";
import { BiFootball, BiTennisBall, BiBaseball } from "react-icons/bi";
import { FaVolleyballBall, FaTableTennis, FaHockeyPuck } from "react-icons/fa";
import { RiBoxingLine } from "react-icons/ri";
import {
  GiGameConsole,
  GiWaterPolo,
  GiAmericanFootballHelmet,
  GiThreeBurningBalls,
} from "react-icons/gi";
import { IoAmericanFootballOutline } from "react-icons/io5";

import {
  MdOutlineSportsBasketball,
  MdSportsHandball,
  MdOutlineSportsCricket,
  MdSportsMma,
} from "react-icons/md";

const dataCategories = [
  {
    name: "Football",
    icon: <BiFootball size="24" color="#ffffff" />,
    color: "#ffffff",
    isFavorite: false,
    isFrequentlyVisited: true,
  },
  {
    name: "Basketball",
    icon: <MdOutlineSportsBasketball size="24" color="#d76732" />,
    color: "#d76732",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Tennis",
    icon: <BiTennisBall size="24" color="#8c893a" />,
    color: "#8c893a",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Volleyball",
    icon: <FaVolleyballBall size="24" color="#e5e795" />,
    color: "#e5e795",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Table Tennis",
    icon: <FaTableTennis size="24" color="#0c82b3" />,
    color: "#0c82b3",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Baseball",
    icon: <BiBaseball size="24" color="#60aca9" />,
    color: "#60aca9",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "IceHockey",
    icon: <FaHockeyPuck size="24" color="#50a2c6" />,
    color: "#50a2c6",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Handball",
    icon: <MdSportsHandball size="24" color="#42777f" />,
    color: "#42777f",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Cricket",
    icon: <MdOutlineSportsCricket size="24" color="#1bab7d" />,
    color: "#1bab7d",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "E-Football",
    icon: <GiGameConsole size="24" color="#2d8134" />,
    color: "#2d8134",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "MMA",
    icon: <MdSportsMma size="24" color="#868686" />,
    color: "#868686",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Water Polo",
    icon: <GiWaterPolo size="24" color="#338fd6" />,
    color: "#338fd6",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Rugby Union",
    icon: <IoAmericanFootballOutline size="24" color="#799755" />,
    color: "#799755",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Boxing",
    icon: <RiBoxingLine size="24" color="#0e7acc" />,
    color: "#0e7acc",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Rugby League",
    icon: <GiAmericanFootballHelmet size="24" color="#799755" />,
    color: "#799755",
    isFavorite: false,
    isFrequentlyVisited: false,
  },

  /* dupli */

  {
    name: "Volleyball",
    icon: <FaVolleyballBall size="24" color="#e5e795" />,
    color: "#e5e795",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Table Tennis",
    icon: <FaTableTennis size="24" color="#0c82b3" />,
    color: "#0c82b3",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Baseball",
    icon: <BiBaseball size="24" color="#60aca9" />,
    color: "#60aca9",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "IceHockey",
    icon: <FaHockeyPuck size="24" color="#50a2c6" />,
    color: "#50a2c6",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Handball",
    icon: <MdSportsHandball size="24" color="#42777f" />,
    color: "#42777f",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Cricket",
    icon: <MdOutlineSportsCricket size="24" color="#1bab7d" />,
    color: "#1bab7d",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "E-Football",
    icon: <GiGameConsole size="24" color="#2d8134" />,
    color: "#2d8134",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "MMA",
    icon: <MdSportsMma size="24" color="#868686" />,
    color: "#868686",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Water Polo",
    icon: <GiWaterPolo size="24" color="#338fd6" />,
    color: "#338fd6",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Rugby Union",
    icon: <IoAmericanFootballOutline size="24" color="#799755" />,
    color: "#799755",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Boxing",
    icon: <RiBoxingLine size="24" color="#0e7acc" />,
    color: "#0e7acc",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
  {
    name: "Rugby League",
    icon: <GiAmericanFootballHelmet size="24" color="#799755" />,
    color: "#799755",
    isFavorite: false,
    isFrequentlyVisited: false,
  },
];

const FrequentlyVisitedContainer = () => {
  const [arrowState, setArrowSate] = React.useState(false);

  const handleArrowState = () => {
    setArrowSate((prevState) => !prevState);
  };

  return (
    <>
      <div className="sidebar__frequently--title flex ">
        <div className="flex frequently--title ">
          <div className="sidebar__frequently--title--icon flex">
            <AiFillCompass size={20} />
          </div>
          <div className="sidebar__frequently--title--text">
            <p>Frequently Visited</p>
          </div>
        </div>
        <div
          className="sidebar__frequently--title--arrow"
          onClick={handleArrowState}
        >
          {!arrowState ? (
            <IoIosArrowUp size={18} />
          ) : (
            <IoIosArrowDown size={18} />
          )}
        </div>
      </div>
      {arrowState && <Visited dataCategories={dataCategories} />}
    </>
  );
};

const SportsContainer = () => (
  <>
    <div className="sidebar__sports--title flex">
      <div className="flex sports--title ">
        <div className="sidebar__sports--title--icon flex">
          <GiThreeBurningBalls size={18} />
        </div>
        <div className="sidebar__sports--title--text">
          <p>Sports</p>
        </div>
      </div>
      <div className="sidebar__sports--title--number">
        <p>2779</p>
      </div>
    </div>
    <Sports dataCategories={dataCategories} />
  </>
);
/* 
<div className="sidebar__navigation">
        <div className="sidebar__navigation--icons flex">
          //{/* overflow }
          {navigationIconsData.map((item, index) => (
            <NavigationIcons key={index} icon={item.icon} name={item.name} />
          ))}
        </div>
      </div>

 */
function Sidebar({ navigationIconsData }) {
  return (
    <div className="sidebar">
      <div className="sidebar__frequentlyVisied">
        <FrequentlyVisitedContainer />
      </div>
      <div className="sidebar__sports">
        <SportsContainer />
      </div>
    </div>
  );
}

export default Sidebar;
//navigationIconsData
