import React from 'react';
import './slider-left.css';

import img0 from '../../assets/slider-left/5b80b6c5ea2d7bc5660cb169bd672810_1867274_sidebar.jpg'
import img1 from '../../assets/slider-left/83d744133d73020ba84606389274eed2_1867274_sidebar.jpg'
import img2 from '../../assets/slider-left/9241d09edb531ac5afa8a7530d08574e_1867274_sidebar.jpg'
import img3 from '../../assets/slider-left/454856e6cbffe7e735703988c4b29945_1867274_sidebar.jpg'
import img4 from '../../assets/slider-left/2844795cc4a3fa576b3992bae42e5781_1867274_sidebar.jpg'
import img5 from '../../assets/slider-left/da6d3869cc5d0f803bedce4d55577399_1867274_sidebar.jpg'
import img6 from '../../assets/slider-left/ee0f7544f59b032582c36c62a616bef8_1867274_sidebar.jpg'
import img7 from '../../assets/slider-left/0f2a5436b702f4b3134f824d5cf9c9f3_1867274_sidebar.jpg'
import img8 from '../../assets/slider-left/3f9132b92d92a94899b8961744bf43ca_1867274_sidebar.jpg'


const imageSliders = [img0,img1,img2,img3,img4,img5,img6,img7,img8]

const Pagination =(props)=>(
  <>
  {imageSliders.map((img,i)=><small 
  key={i}
  className={props.activeIndex === i ? 'active' :'' }
  onClick={()=>props.onClick(i)}
  ></small>)}
  </>
)
function SliderLeft() {
  const [index,setIndex]=React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => prevIndex ===  imageSliders.length - 1? 0 : prevIndex + 1 );
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const selectImg =(index)=>{
    setTimeout(()=>{
      setIndex(index)
    }, 55);
    
}
  return (
    <div className='sldier-img-left'>
      <div>
        <img className='imgslider' src={imageSliders[index]} alt="sldier-img-left" /></div>
      <div className='slider-left__small flex '><Pagination 
      className=''
      onClick={selectImg}
      activeIndex={index}
      /></div>
      
    </div>
  );
}

export default SliderLeft;
