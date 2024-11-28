import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/cvsu-logo.png';
import backgroundImage from '../assets/images/cvsu-img1.jpg'; // Import background image

const Home = () => {
  // State to track menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu function
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="home" id="home">
      <nav className="main-navbar">
        <a href="#" className="logo">
          <img src={logo} alt="CVSU Logo" />
        </a>
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
          <li><a href="#courses" onClick={closeMenu}>Courses</a></li>
          <li><a href="#location" onClick={closeMenu}>Location</a></li>
          <li><a href="#footer" onClick={closeMenu}>Contact</a></li>
        </ul>
        
        <div className="buttons-container">
          <Link to="/Login" className="btn-container" onClick={closeMenu}>
            <button className="btn secondary-btn">Login</button>
          </Link>
          <Link to="/Application" className="btn-container" onClick={closeMenu}>
            <button className="btn get-started-btn">Enroll Now</button>
          </Link>
        </div>
        <div className="menu-btn" onClick={toggleMenu}>
          <span></span>
        </div>
      </nav>

      {/* Apply the background image with opacity */}
      <div
        className="home banner"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="overlay"></div> {/* Add an overlay */}
        <div className="banner-desc">
          {/* Add content here */}
        </div>
      </div>
    </section>
  );
};

export default Home;
