import React, { useState } from 'react';
import './Sidebar.css';

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
        <h2>Sidebar</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;



