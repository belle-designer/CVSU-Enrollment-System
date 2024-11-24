import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/cvsu-logo.png';
import backgroundImage from '../assets/images/cvsu-img1.jpg'; // Import background image

const Home = () => {
  return (
    <section className="home" id="home">
      <nav className="main-navbar">
        <a href="#" className="logo">
          <img src={logo} alt="CVSU Logo" />
        </a>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
        <Link to="/Application" className="get-started-btn-container">
          <button className="get-started-btn btn">Enroll Now</button>
        </Link>
        <div className="menu-btn">
          <span></span>
        </div>
      </nav>

      {/* Apply the background image as inline style */}
      <div
        className="home banner"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="banner-desc">
          {/* Add content here */}
        </div>
      </div>
    </section>
  );
};

export default Home;
