import React from "react";
import "./navbar-mobile.css";
import logo from "../../assets/mobile/_logo.gif";

const NavbarMobile = () => {
  return (
    <div className="navbar__mobile flex">
      <div className="navbar__mobile--logo">
        <img className="navbar__mobile--logo--img" src={logo} alt="logo" />
      </div>
      <div className="navbar__mobile--login ">
        <ul className=" navbar__mobile--login--links flex">
          <li className="navbar__mobile--link">
            <a href="#join">
              <span>join</span>
            </a>
          </li>
          <li className="navbar__mobile--link">
            <a href="#login">
              <span>login</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
