// Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true); // Initially set to true to keep it collapsed

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleCountryClick = () => {
    setCollapsed(true); // Close the sidebar when a country is clicked
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {collapsed ? '▶' : '◀'}
      </button>
      <div>
        <div className="tabs">
          <button className="tab">Tab 1</button>
          <button className="tab">Tab 2</button>
          {/* Add more tabs as needed */}
        </div>
        <div className="content">
          <div>
            {/* Content for Tab 1 */}
            <p>Content for Tab 1</p>
          </div>
          <div>
            {/* Content for Tab 2 */}
            <p>Content for Tab 2</p>
          </div>
          {/* Add more content for additional tabs */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
