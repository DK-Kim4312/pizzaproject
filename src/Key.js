import React from "react";
import "./Key.css"; // Import CSS for styling

const Key = () => {
  return (
    <div className="key">
      <div className="gradient-bar"></div>
      <div className="annotations">
        <div>0%</div>
        <div>25%</div>
        <div>50%</div>
        <div>75%</div>
        <div>100%</div>
      </div>
    </div>
  );
};

export default Key;