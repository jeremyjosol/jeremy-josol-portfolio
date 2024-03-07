import React, { useState } from 'react';
import './Hero.css';
import headshot from './../img/headshot.png';
import { IoMdMail } from "react-icons/io";
import { BsArrowRightCircle} from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

import Sidebar from './Sidebar';

const Hero = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="hero-container">
      <div className="headshot">
        <img src={headshot} alt="" />
      </div>
      <div className="toggle-icon-container">
        <MdKeyboardArrowRight className="toggle-icon" onMouseEnter={() => setShowSidebar(true)} />
      </div>
      <div className="hero-details">
        <h1><span className='hello-world'>Hello, World!</span>
        <br /> 
        <span className='becoming-gradient'>I'm</span> <span className='gradient'>Jeremy</span> <span className='gradient'>Josol.</span></h1>
        <p>I'm a web developer based out of Portland, OR 
        & I am passionate about implementing creative design solutions w/ clean modularized code to enhance & modernize user application experiences.</p>
        <div className='button-container'>
          <button className="about-button"> ABOUT <BsArrowRightCircle className='icons' /></button>
          <button className="contact-button"><IoMdMail className='icons' /> CONTACT</button>
        </div>
      </div>
      <Sidebar showSidebar={showSidebar} onHideSidebar={() => setShowSidebar(false)} />
    </div>
  );
}

export default Hero;
