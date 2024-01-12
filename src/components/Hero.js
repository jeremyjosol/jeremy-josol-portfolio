import React from 'react';
import './Hero.css';
import headshot from './../img/headshot.jpg';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="headshot">
        <img src={headshot} alt="" />
      </div>
      <div className="hero-details">
        <h1>Hello, World! 
        <br /> 
        I'm Jeremy Josol.</h1>
        <p>I'm a web developer based out of Portland, OR. I'm passionate about implementing creative design solutions to enhance and modernize user application experiences.</p>
        <button className="contact-button">Contact Me</button>
      </div>
    </div>
  );
}

export default Hero;
