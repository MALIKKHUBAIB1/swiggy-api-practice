import React from 'react';
import './shimmer.css'; // Ensure you have the CSS from above

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer-card">
        <div className="shimmer-card-header">
          <div className="shimmer-avatar"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-line"></div>
        <div className="shimmer-line"></div>
        <div className="shimmer-line short"></div>
      </div>
      <div className="shimmer-card">
        <div className="shimmer-card-header">
          <div className="shimmer-avatar"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-line"></div>
        <div className="shimmer-line"></div>
        <div className="shimmer-line short"></div>
      </div>
      <div className="shimmer-card">
        <div className="shimmer-card-header">
          <div className="shimmer-avatar"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-line"></div>
        <div className="shimmer-line"></div>
        <div className="shimmer-line short"></div>
      </div>
    </div>
  );
};

export default Shimmer;
