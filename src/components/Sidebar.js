import React, { useState } from 'react';
import './Sidebar.css';
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Sidebar = ({ showSidebar, onHideSidebar }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    onHideSidebar();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop,
      });
      onHideSidebar();
    }
  };

  const scrollToContact = () => {
    scrollToSection('contact'); 
  };

  return (
    <div 
      className={`sidebar ${showSidebar || isMouseOver ? 'show' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar-content">
        <h2>Projects</h2>
        <ul>
          <li onClick={() => scrollToSection('webDesignSection')}>Website</li>
          <li onClick={() => scrollToSection('gamesSection')}>Game</li>
          <li onClick={() => scrollToSection('photoSection')}>Photo</li>
          <li id='wip'>Curation {`(WIP)`} </li>
        </ul>
        <div className="contact-icons">
          <h5>Let's Connect!</h5>
          <IoMdMail 
            className="icon" 
            onClick={scrollToContact} 
          />
          <a 
            href='https://www.linkedin.com/in/jeremyjosol/' 
            target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
          </a>
          <a 
            href='https://github.com/jeremyjosol' 
            target="_blank" 
            rel="noopener noreferrer">
              <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

