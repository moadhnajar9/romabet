import React from 'react';
import './compititions.css'
import Compitition from '../../components/compitition/Compitition'

import com0 from '../../assets/compititions/fcb57433a17e3e56eeb1d1881c8e7183_1867274_sidebar.gif'
import com1 from '../../assets/compititions/20804e19ce9e5b30f2986a5b14397b6d_1867274_sidebar.gif'
import com2 from '../../assets/compititions/598fe5a5d8052d687e7e1d0ce335959a_1867274_sidebar.gif'
import com3 from '../../assets/compititions/beddeba35818fff18a4420405b36f308_1867274_sidebar.gif'
import com4 from '../../assets/compititions/27997848495cad0e3ca5c827bedf5d5e_1867274_sidebar.gif'
import com5 from '../../assets/compititions/c4b7199d88a540aa7abfe45ee53dfcb9_1867274_sidebar.gif'
import com6 from '../../assets/compititions/724916e8c889a7e0f6dc007c08f82067_1867274_sidebar.gif'

const compitionsList = [
  {
    url:com0,
    name:'CHAMPIONS LEAGUE'
  },
  {
    url:com1,
    name:'EUROPA LEAGUE'
  },
  {
    url:com2,
    name:'LALIGA'
  },
  {
    url:com3,
    name:'BUNDESLIGA'
  },
  {
    url:com4,
    name:'PREMIER LEAGUE'
  },
  {
    url:com5,
    name:'SERIE A'
  },
  {
    url:com6,
    name:'SUPER LIG'
  },
]

function Compititions() {
  return (
    <div className='compititions flex'>
      {compitionsList.map((champ,index)=><Compitition key={index} champition={champ}/>)}
    </div>
  );
}

export default Compititions;
