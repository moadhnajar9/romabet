import React from "react";
import "./sliders-mobile.css";

import imag1 from "../../assets/mobile/slider/02d545e9fe0f8cf58909a509b14daaf5_1867274_sidebar.png";
import imag2 from "../../assets/mobile/slider/4c60a2915318e11902973a66f86321a9_1867274_sidebar.jpg";
import imag3 from "../../assets/mobile/slider/5b25e006a94c91b3c68e105ca3062437_1867274_sidebar.jpg";
import imag4 from "../../assets/mobile/slider/6f681ec28d14bfb8f4a962098111a60c_1867274_sidebar.png";
import imag5 from "../../assets/mobile/slider/7e203f5170f5215e42bd726ee7505153_1867274_sidebar.png";
import imag6 from "../../assets/mobile/slider/0191e585561750ffbe6d5321522632c9_1867274_sidebar.jpg";
import imag7 from "../../assets/mobile/slider/435b2f55d4f7d45d8ce21df292fdf2ad_1867274_sidebar.jpg";
import imag8 from "../../assets/mobile/slider/591fd7bfc27bdf3ac1df329e7fc9685d_1867274_sidebar.png";
import imag9 from "../../assets/mobile/slider/931e6471399f51f371279ec766ea1f7c_1867274_sidebar.jpg";
import imag10 from "../../assets/mobile/slider/a72ca72478523977868d571e8c779955_1867274_sidebar.jpg";
import imag11 from "../../assets/mobile/slider/a9391fdfe6edbff4deb46fc318d1a773_1867274_sidebar.jpg";
import imag12 from "../../assets/mobile/slider/a203000a165bc61a72b5f91560fe5a18_1867274_sidebar.png";
import imag13 from "../../assets/mobile/slider/cea54fdaf33da6e1600d765dc4948725_1867274_sidebar.jpg";
import imag14 from "../../assets/mobile/slider/eb46ea2a5fdbf24861f3229d0918ad4c_1867274_sidebar.jpg";
import imag15 from "../../assets/mobile/slider/f67a85db1b4c42be323c0060e1f73c2c_1867274_sidebar.png";

const imageSliderMobileData = [
  imag1,
  imag2,
  imag3,
  imag4,
  imag5,
  imag6,
  imag7,
  imag8,
  imag9,
  imag10,
  imag11,
  imag12,
  imag13,
  imag14,
  imag15,
];

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
  // const [index, setIndex] = React.useState(0);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) =>
  //       prevIndex === imageSliderMobileData.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // const selectImg = (index) => {
  //   setTimeout(() => {
  //     setIndex(index);
  //   }, 55);
  // };

  return (
    <div className="sldier-img--mobile">
      <div className="sldier-img--mobile__image">
        {imageSliderMobileData.map((image, index) => (
          <img key={index} src={image} alt={`img${index}`} />
        ))}
      </div>

      <div className="slider-left__small/ flex/">
        {/*  <Pagination className="" onClick={selectImg} activeIndex={index} /> */}
        <div className="radio"></div>
      </div>
    </div>
  );
}

export default SlidersMobile;
