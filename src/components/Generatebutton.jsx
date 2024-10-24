import React from 'react';
import "./Generatebutton.css";

const Generatebutton = ({ isActive, onClick, isInputVisible }) => {
  return (
    <button
      className={`btn ${isInputVisible ? 'active' : ''}`} // Add active class based on input visibility
      title="Write with AI"
      onClick={onClick}
    >
      <svg
        height={24}
        width={24}
        fill={isActive || isInputVisible ? "black" : "#FFFFFF"} // Change fill color based on isActive or isInputVisible
        viewBox="0 0 24 24"
        data-name="Layer 1"
        id="Layer_1"
        className="sparkle"
      >
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
      </svg>
    </button>
  );
};

export default Generatebutton;
