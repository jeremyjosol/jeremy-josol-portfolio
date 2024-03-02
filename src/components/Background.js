import React from 'react';
import './Background.css';
import video from './../assets/background.mp4';

const Background = () => {
  return (
    <>
      <div className='shadow-overlay'></div>
      <video 
        playsInline 
        autoPlay
        muted 
        loop 
        preload='auto' 
        id='bg'
      >
        <source src={video} type='video/mp4' />
      </video>
    </>
  )
}

export default Background;