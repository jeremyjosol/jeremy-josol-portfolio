import React from 'react';
import './Sidebar.css';

const Sidebar = ({ showSidebar }) => {
  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <div className="sidebar-content">
        <h2>Sidebar</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
