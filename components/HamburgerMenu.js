import React, { useState } from "react";
import './HamburgerMenu.css'; // You can create a CSS file for styling

const HamburgerMenu = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      {isOpen && (
        <div className="photo-window">
          {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
