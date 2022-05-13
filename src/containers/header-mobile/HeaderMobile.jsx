import React from "react";
import "./header-mobile.css";
//import NavbarMobile from "../../components/navbar-mobile/NavbarMobile";
import NavbarMobile from "../../components/navbar-mobile/NavbarMobile";
import brand from "../../assets/mobile/7156930327d7370fcef9d7f4469d1e81_1867274_media.png";

function HeaderMobile() {
  return (
    <div className="header__mobile">
      <div className="header__mobile--brand">
        <img className="header__mobile--img" src={brand} alt="brand" />
      </div>
      <NavbarMobile />
    </div>
  );
}

export default HeaderMobile;
