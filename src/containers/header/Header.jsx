import React from 'react';
import './header.css';
import logo from '../../assets/_logo2.gif'
import ukLogo from '../../assets/united-kingdom.png';
import {AiFillStar ,AiFillSetting} from 'react-icons/ai'
import {IoMdHelpCircle} from 'react-icons/io'
import Navbar from '../../components/navbar/Navbar';


const Items =(props)=>{
  return (
    <div className='header__links--items flex'>
      <li><div className='header__items-icon'><AiFillStar color="#fff" size={22} className='star'/></div></li> 
      <li><div className='header__items-icon'><IoMdHelpCircle color="#fff" size={22}/></div></li>
      <li><div className='header__items-icon'>{props.time}</div></li>
      <li className='flex header__items-icon uk'>
        <div className=''><img className='header__items--uk-logo' src={ukLogo} alt="uk-flag" /></div>
        <div className=''>en</div>
      </li>
      <li><div className='header__items-icon'><AiFillSetting color='#fff' size={22}/></div></li>
    </div>
  )
}

function Header() {
  
  const hourNow = ()=>{
    const date = new Date()
    
    return `${
      date.getHours() / 10 < 1 ? '0'+date.getHours() : date.getHours()
    }:${
      date.getMinutes() / 10 < 1? '0'+date.getMinutes(): date.getMinutes()
    }:${
      date.getSeconds() / 10 < 1 ? '0'+date.getSeconds(): date.getSeconds()
     }`
  } 
  const [time,setTime]=React.useState(hourNow())
setInterval(()=>{
  setTime(hourNow())
},1000)



  return (
    <div className='header '>
      <ul className='header__links flex'>
        <li className='header__links--left'><div className='header__links--logo img'><img src={logo} alt="logo" /></div></li>
        <li className='flex'>

          <ul className=' header__links--right  flex'>
            <li className='header__links--sign'>
              <ul className='header__links--sign--buttons flex'>
                <li className=''><button className='sing--buttons__sing-up btn'>sign up</button></li>
                <li><button className='sing--buttons__registre btn'>registre</button></li>
              </ul>
            </li>
            <Items time={time} />
          </ul>
        </li>
        </ul>
      <Navbar/>
    </div>
  );
}

export default Header;
