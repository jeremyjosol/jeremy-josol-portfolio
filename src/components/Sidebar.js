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

  return (
    <div 
      className={`sidebar ${showSidebar || isMouseOver ? 'show' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar-content">
        <h2>Projects</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <div className="contact-icons">
          <h5>Let's Connect!</h5>
          <IoMdMail className="icon" />
          <FaLinkedin className="icon" />
          <FaGithub className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;


