import React, { useState } from 'react';
import './Hero.css';
import headshot from './../img/headshot.jpg';
import { IoMdMail } from "react-icons/io";
import { BsArrowRightCircle } from "react-icons/bs";
import Sidebar from './Sidebar';

const Hero = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log("showSidebar:", showSidebar); 
  };

  return (
    <div className="hero-container">
      <div className="headshot">
        <img src={headshot} alt="" />
      </div>
      <div className="hero-details">
        <h1><span className='hello-world'>Hello, World!</span>
        <br /> 
        <span className='becoming-gradient'>I'm</span> <span className='gradient'>Jeremy</span> <span className='gradient'>Josol.</span></h1>
        <p>I'm a web developer based out of Portland, OR 
        & I am passionate about implementing creative design solutions w/ clean modularized code to enhance & modernize user application experiences.</p>
        <div className='button-container'>
          <button className="toggle-button" onClick={toggleSidebar}>Toggle Sidebar</button>
          <button className="about-button"> ABOUT <BsArrowRightCircle className='icons' /></button>
          <button className="contact-button"><IoMdMail className='icons' /> CONTACT</button>
        </div>
      </div>
      {showSidebar && <Sidebar showSidebar={showSidebar} />}
    </div>
  );
}

export default Hero;

