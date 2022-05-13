import "./romabet583.css";
import React from "react";
import {
  Header,
  Slider,
  Compititions,
  HeaderMobile,
  Sidebar,
  SlidersMobile,
} from "./containers";

import NavigationIcons from "./components/navigation-icons/NavigationIcons";

import { IoTimerOutline } from "react-icons/io5";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
import { CgCardSpades, CgScreen } from "react-icons/cg";
import { GiWorld, GiZeppelin, GiKeyboard } from "react-icons/gi";
import { AiFillGift } from "react-icons/ai";
import { FaHorseHead } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { ImMobile } from "react-icons/im";

const navigationIconsData = [
  {
    name: "Before The Match",
    icon: <IoTimerOutline size={30} />,
  },
  {
    name: "Live Sports",
    icon: <BsFillRecordCircleFill size={30} />,
  },
  {
    name: "LIVE CASINO",
    icon: <MdLiveTv size={30} />,
  },
  {
    name: "CASINO",
    icon: <CgCardSpades size={30} />,
  },
  {
    name: "bingo",
    icon: <CgScreen size={30} />,
  },
  {
    name: "promotions",
    icon: <GiWorld size={30} />,
  },
  {
    name: "Virtual Sports",
    icon: <GiZeppelin size={30} />,
  },
  {
    name: "Betgames TV",
    icon: <GiKeyboard size={30} />,
  },
  {
    name: "Zeppelin",
    icon: <AiFillGift size={30} />,
  },
  {
    name: "E-SPORTS",
    icon: <FaHorseHead size={30} />,
  },
  {
    name: "mobile app",
    icon: <HiOutlineCurrencyDollar size={30} />,
  },
  {
    name: "TV",
    icon: <ImMobile size={30} />,
  },
];

const NavigationItem = () => {
  return (
    <div className="sidebar__navigation">
      <div className="sidebar__navigation--icons flex">
        {navigationIconsData.map((item, index) => (
          <NavigationIcons key={index} icon={item.icon} name={item.name} />
        ))}
      </div>
    </div>
  );
};

const Mobile = () => (
  <div className="Romabet583__mobile grid grid--container ">
    <div className="grid--container__header">
      <HeaderMobile />
      <div className="grid--container__navigationItem">
        <NavigationItem />
      </div>
      <div className="test flex">
        <div className="grid--container__sidebar">
          <Sidebar />
        </div>
        <div className="grid--container__sliderMobile">
          <SlidersMobile />
        </div>
      </div>
    </div>

    <div className="grid--container__main"></div>
  </div>
);

const Romabet583 = () => {
  return (
    <div className="romabet583">
      <div className="desktop container">
        <Header />
        <Slider />
        <Compititions />
      </div>
      <Mobile />
    </div>
  );
};

export default Romabet583;
