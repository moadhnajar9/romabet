import React from 'react';
import './compitition.css'
function Compitition(props) {
  return (
    <div className='compitition'>
      <a className='compitition__link' href={`#${props.champition.name}`}>
        <div className='compitition__link--container'>
          <div className='compitition__img'><img className='' src={props.champition.url} alt={`${props.champition.name}`} /></div>
          <button className='compitition__button'>{props.champition.name}</button>
        </div>
      </a>
    </div>
  );
}

export default Compitition;
