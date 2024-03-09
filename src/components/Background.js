import React, { useEffect, useRef } from 'react';
import './Background.css';
import video from './../assets/background.mp4';

const Background = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85; 
    }
  }, []);

  return (
    <>
      <div className='shadow-overlay'></div>
      <video 
        ref={videoRef}
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
  );
}

export default Background;
