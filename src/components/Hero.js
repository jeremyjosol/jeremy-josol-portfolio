import React, { useState } from 'react';
import './Hero.css';
import headshot from './../img/headshot.png';
import { IoMdMail } from "react-icons/io";
import { BsArrowRightCircle} from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom'; 

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
        <p>A multifaceted artist and developer based out of Portland, OR—
        passionate about implementing creative web and graphic design solutions with clean modularized code to enhance & modernize user experiences.</p>
        <div className='button-container'>
          <NavLink to="/about">
            <button className='about-button'> Learn More </button>
          </NavLink>
          <button className="contact-button"><IoMdMail className='icons' /> Contact</button>
        </div>
      </div>
      <Sidebar showSidebar={showSidebar} onHideSidebar={() => setShowSidebar(false)} />
    </div>
  );
}

export default Hero;
