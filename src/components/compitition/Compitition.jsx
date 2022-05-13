import React from 'react';
import './compitition.css'
function Compitition(props) {
  return (
    <div className='compitition'>
      <a className='compitition__link' href={`#${props.champition.name}`}>
        <div className='compitition__link--container'>
          <div className='compitition__img'><img src={props.champition.url} alt={`${props.champition.name}`} /></div>
          <div className='compitition__button'><button className='compition__button--btn btn--background-top-to-bottom'>{props.champition.name}</button></div>
        </div>
      </a>
    </div>
  );
}

export default Compitition;
