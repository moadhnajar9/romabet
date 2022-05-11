import React from 'react';
import './navbar.css';
import roma from '../../assets/roma.png'
import promo from '../../assets/promo.webp'
import logo from '../../assets/_logo2.gif'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const NavbarMobile = ()=>{
  
  const [toggleMenu,setToggleMenu] = React.useState(false)
  return (
  <div className='navbar__mobile flex'>
  {toggleMenu
      ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}  />
      : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} rotate={90} style = {{transform: 'rotate(180deg)' }} />}
    {toggleMenu && (
    <div className="navbar__mobile-container scale-up-center">
      <div className="navbar__mobile-container-links">
        <p><a href="#live">live</a></p>
        <p><a href="#sports">sports</a></p>
        <p><a href="#esports">esports</a></p>
        <p><a href="#casino">casino</a></p>
        <p><a href="#live-casino">live casino</a></p>
        <p><a href="#games">games</a></p>
        <p><a href="#tv-game">tv game</a></p>
        <p><a href="#virtual-sports">virtual sports</a></p>
        <p><a href="#tournaments">tournaments</a></p>
      </div>
      
    </div>
    )}
    <div className='header__links-mobile--logo img'><img src={logo} alt="logo" /></div>
      <div className='sing-up__mobile flex'>
    <button className='sing--buttons__sing-up btn'>sign up</button>
    <button className='sing--buttons__registre btn'>registre</button>
</div>
  </div>)
}

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
            
          </ul>
      </li>

      <div className='navbar__tablet flex'>
      <div className='navbar__menu--more'>
        <button className='button--more '>more</button>
        <div className='navbar__menu--links--more flex ' >
        
            
              <div className='navbar__menu-hoverd'><a href="#virtual-sports"  className='new'><span >virtual sports</span></a></div>
            
            
              <div className='navbar__menu-hoverd'><a href="#tournaments"><span>tournaments</span></a></div>
            
        
        </div>
      </div>
      <li className='navbar__menu--promo flex'>
        <a href="#roma"><img src={roma} alt="roma-tv" /></a>
        <a href="#promo"><img src={promo} alt="promo" /></a>
      </li>
      </div>
      <NavbarMobile />
      </ul>
  
    </div>
  );
}

export default Navbar;
