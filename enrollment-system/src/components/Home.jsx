import React from 'react';
import logo from '../assets/images/cvsu-logo.png'; 


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
        <a href="#" className="get-started-btn-container">
          <button className="get-started-btn btn">Enroll Now</button>
        </a>
        <div className="menu-btn">
          <span></span>
        </div>
      </nav>

      <div className="home banner">
        <div className="banner-desc">
          {/* <h2>Cavite State University - Bacoor Campus</h2>
          <p>Lorem ipsum dolor sit amet...</p>
          <a href="#" className="get-started-btn-container">
            <button className="get-started-btn btn">Enroll Now</button>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
