import React from 'react';
import './slider.css'

import SliderLeft from '../../components/slider-left/SliderLeft'
import SliderRigth from '../../components/slider-right/SliderRight'
function Slider() {
  return (
    <div className='sliders flex'>
      <SliderLeft/>
      <SliderRigth/>
    </div>
  );
}

export default Slider;
