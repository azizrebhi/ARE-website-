import React from 'react';
import './FullWidthImage.css';
import family from './assets/family.jpg';

function FullWidthImage() {
  return (
    <div className="image-container">
      <img src={family} alt="Background" className="full-width-image" />
      <div className="image-overlay-text">
        <h1>Unlock the secrets of robotics</h1>
        <p>Robotic Association Ensi</p>
      </div>
    </div>
  );
}

export default FullWidthImage;