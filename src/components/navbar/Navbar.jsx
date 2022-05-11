import React from 'react';
import './navbar.css';
import roma from '../../assets/roma.png'
import promo from '../../assets/promo.webp'


function Navbar() {
  return (
    <div className='navbar'>
      <ul className='navbar__menu flex'>
        <li>
          <ul className='navbar__menu--links flex'>
            <li>
              <div><a href="#live"><span>live</span></a></div>
            </li>
            <li>
              <div><a href="#sports"><span>sports</span></a></div>
            </li>
            <li>
              <div><a href="#esports"  className='new'><span>esports</span></a></div>
            </li>
            <li>
              <div><a href="#casino"><span>casino</span></a></div>
            </li>
            <li>
              <div><a href="#live-casino"  className='new'><span>live casino</span></a></div>
            </li>
            <li>
              <div><a href="#games"><span>games</span></a></div>
            </li>
            <li>
              <div><a href="#tv-game"  className='new'><span>tv game</span></a></div>
            </li>
            <li>
              <div className='sr-only '><a href="#virtual-sports"  className='new'><span>virtual sports</span></a></div>
            </li>
            <li>
              <div className='sr-only '><a href="#tournaments"><span>tournaments</span></a></div>
            </li>
            <div className='navbar__menu--links--more flex'>
            <li>
              <div><a href="#virtual-sports"  className='new'><span>virtual sports</span></a></div>
            </li>
            <li>
              <div><a href="#tournaments"><span>tournaments</span></a></div>
            </li>
          </div>
          </ul>
         
      </li>
      
      <li className='navbar__menu--promo flex'>
        <a href="#roma"><img src={roma} alt="roma-tv" /></a>
        <a href="#promo"><img src={promo} alt="promo" /></a>
      </li>
      </ul>
    </div>
  );
}

export default Navbar;
