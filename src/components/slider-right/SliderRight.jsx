import React from 'react';
import './slider-right.css';
import img0 from '../../assets/slider-right/3ff55e71bf17a429ad4d66039e02e6f7_1867274_sidebar.jpg'
import img1 from '../../assets/slider-right/0a5c72160fca84f415649bc301bd0449_1867274_sidebar.jpg'

const imageSliders = [img0,img1]

function SliderRight() {
  const [index,setIndex]=React.useState(0)
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => i === 0 ? 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mobile-stop'>
      <img src={imageSliders[index]} alt="sldier-img-right" />
    </div>
  );
}

export default SliderRight;
