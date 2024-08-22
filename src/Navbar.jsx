import React from 'react';
import './Navbar.css';
import LogoARE from './assets/LogoARE.png';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={LogoARE} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#contact">About Us</a></li>
        <li><a href="#about">Projects </a></li>
              <li><a href="#services">Gallery</a></li>
               <li><a href="#services">Events</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;