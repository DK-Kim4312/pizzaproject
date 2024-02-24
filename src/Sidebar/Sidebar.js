// Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {collapsed ? 'Open' : 'Close'}
      </button>
      <div className="content">
        {/* Sidebar content goes here */}
        <p>Sidebar Content</p>
      </div>
    </div>
  );
};

export default Sidebar;
