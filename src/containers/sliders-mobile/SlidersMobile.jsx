import React from "react";
import "./sliders-mobile.css";

import imag1 from "../../assets/mobile/slider/4c60a2915318e11902973a66f86321a9_1867274_sidebar.jpg";
import imag2 from "../../assets/mobile/slider/5b25e006a94c91b3c68e105ca3062437_1867274_sidebar.jpg";
import imag3 from "../../assets/mobile/slider/6f681ec28d14bfb8f4a962098111a60c_1867274_sidebar.png";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// const Pagination = (props) => (
//   <>
//     {imageSliderMobileData.map((img, i) => (
//       <small
//         key={i}
//         className={props.activeIndex === i ? "active-mobile" : ""}
//         onClick={() => props.onClick(i)}
//       ></small>
//     ))}
//   </>
// );

function SlidersMobile() {
  return (
    <div className="sldier-img--mobile">
      <div className="sldier-img--mobile__image flex">
        <img className="sldier-img--mobile__image-1" src={imag1} alt="casino" />
        <img className="sldier-img--mobile__image-2" src={imag2} alt="casino" />
        <img className="sldier-img--mobile__image-3" src={imag3} alt="casino" />
      </div>

      <div className="sldier-img__list flex">
        {/*  <Pagination className="" onClick={selectImg} activeIndex={index} /> */}
        <div className="arrow-left">
          <MdKeyboardArrowLeft size={30} color={"rgba(142, 147, 163, 0.8)"} />
        </div>
        <div className="sldier-img__pagination">
          <small className="sldier-img--mobile--small"></small>
          <small className="sldier-img--mobile--small"></small>
          <small className="sldier-img--mobile--small"></small>
          <small className="sldier-img--mobile--small"></small>
          <small className="sldier-img--mobile--small"></small>
          <small className="sldier-img--mobile--small"></small>
          <small className="sldier-img--mobile--small"></small>
          <small className="sldier-img--mobile--small"></small>
          <small className="sldier-img--mobile--small"></small>
          <small className="sldier-img--mobile--small"></small>
          <small className="sldier-img--mobile--small"></small>
        </div>
        <div className="arrow-right">
          <MdKeyboardArrowRight size={30} color={"rgba(142, 147, 163, 0.8)"} />
        </div>
      </div>
    </div>
  );
}

export default SlidersMobile;
