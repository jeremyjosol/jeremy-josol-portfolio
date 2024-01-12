import React from 'react';
import './Hero.css';
import headshot from './../img/headshot.jpg';
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="headshot">
        <img src={headshot} alt="" />
      </div>
      <div className="hero-details">
        <h1><span className='hello-world'>Hello, World!</span>
        <br /> 
        <span className='becoming-gradient'>I'm</span> <span className='gradient'>Jeremy</span> <span className='gradient'>Josol.</span></h1>
        <p>I'm a web developer based out of Portland, OR. I'm passionate about implementing creative design solutions to enhance and modernize user application experiences.</p>
        <button className="contact-button"><IoMdMail className='icons' /> CONTACT</button>
      </div>
    </div>
  );
}

export default Hero;
