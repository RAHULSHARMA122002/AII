import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <span className="navbar-title">Your inbox</span>
        </div>
        
        <div className="navbar-center">
          <span className="navbar-user">Luis Easton</span>
        </div>
         
        <div className="navbar-right">
          <span className="navbar-tab active">AI Copilot</span>
          <span className="navbar-tab">Details</span>
        </div>
      </div>
    </header>
  );
}
