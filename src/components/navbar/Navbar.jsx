import React from "react";
import "./navbar.css";
import roma from "../../assets/roma.png";
import promo from "../../assets/promo.webp";

const More = () => (
  <div className="navbar__menu--more dropdown">
    <button className="button--more link">more</button>
    <div className="navbar__menu--links--more dropdown__menu  flex ">
      <div className="navbar__menu-hoverd">
        <a href="#virtual-sports" className="new">
          <span>virtual sports</span>
        </a>
      </div>
      <div className="navbar__menu-hoverd">
        <a href="#tournaments" className="">
          <span>tournaments</span>
        </a>
      </div>
    </div>
  </div>
);

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar__menu flex">
        <li>
          <ul className="navbar__menu--links flex">
            <li>
              <div>
                <a href="#live">
                  <span>live</span>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="#sports">
                  <span>sports</span>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="#esports" className="new">
                  <span>esports</span>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="#casino">
                  <span>casino</span>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="#live-casino" className="new">
                  <span>live casino</span>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="#games">
                  <span>games</span>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="#tv-game" className="new">
                  <span>tv game</span>
                </a>
              </div>
            </li>
            <li>
              <div className="sr-only-tb">
                <a href="#virtual-sports" className="new">
                  <span>virtual sports</span>
                </a>
              </div>
            </li>
            <li>
              <div className="sr-only-tb">
                <a href="#tournaments" className="">
                  <span>tournaments</span>
                </a>
              </div>
            </li>
          </ul>
        </li>

        <div className="navbar__tablet flex">
          <More />
          <li className="navbar__menu--promo flex">
            <a href="#roma">
              <img src={roma} alt="roma-tv" />
            </a>
            <a href="#promo">
              <img src={promo} alt="promo" />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
