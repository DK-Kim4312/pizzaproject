// Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="sidebar">
      <div className="tabs">
        <button className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>Food Items</button>
        <button className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>Tab 2</button>
        {/* Add more tabs as needed */}
      </div>
      <div className="content">
        {activeTab === 0 && (
          <div>
            {/* Content for Tab 1 */}
            <p>Content for Tab 1</p>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {/* Content for Tab 2 */}
            <p>Content for Tab 2</p>
          </div>
        )}
        {/* Add more content for additional tabs */}
      </div>
    </div>
  );
};

export default Sidebar;
