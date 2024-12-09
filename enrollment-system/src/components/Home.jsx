import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/cvsu-logo.png';
import backgroundImage1 from '../assets/images/cvsu-img1.jpg';
import backgroundImage3 from '../assets/images/cvsu-img3.jpg';
import backgroundImage4 from '../assets/images/cvsu-img4.jpg';
import backgroundImage5 from '../assets/images/cvsu-img5.jpg';

import moonIcon from '../assets/images/moon.png'; // Import the moon icon
import sunIcon from '../assets/images/sun.png'; // Import the sun icon

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false); // Track dark mode state
  const images = [backgroundImage3, backgroundImage1, backgroundImage4, backgroundImage5];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark'); // Toggle the dark mode class
    setIsDarkMode(!isDarkMode); // Toggle dark mode state
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  // Use effect to automatically change background image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <section className="home" id="home">
      <nav className="main-navbar flex justify-between items-center px-6 py-4">
        <a href="/" className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="CVSU Logo" className="w-24" />
        </a>
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''} flex space-x-4 md:flex-row flex-col md:space-x-8`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
          <li><a href="#courses" onClick={closeMenu}>Courses</a></li>
          <li><a href="#location" onClick={closeMenu}>Location</a></li>
          <li><a href="#footer" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className="buttons-container flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            <img src={isDarkMode ? sunIcon : moonIcon} alt="Toggle Dark Mode" className="w-6 h-6" />
          </button>
        </div>
        <div className="menu-btn" onClick={toggleMenu}>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black my-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </nav>

      <div
        className="home banner relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <div className="overlay absolute inset-0 bg-black opacity-80"></div>
        <div className="banner-desc absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="main-desc text-4xl sm:text-5xl font-extrabold mb-4">Cavite State University - Bacoor Campus</h1>
          <p className="mini-desc text-lg sm:text-xl mb-4 px-6 sm:px-12">
            Welcome to the website of the Department of Computer Studies; featuring programs in Computer Science and Information Technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 sm:space-y-0">
            <Link to="/Login" className="btn-container">
              <button className="login-btn py-3 px-8 text-lg bg-orange-500 text-white rounded-full hover:bg-green-600 transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/Application" className="btn-container">
              <button className="enroll-now-btn py-3 px-8 text-lg bg-green-500 text-white rounded-full hover:bg-yellow-600 transition duration-300">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        <button
          onClick={prevImage}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 px-6 py-3 bg-green-700 text-white rounded-full focus:outline-none hover:bg-gray-600"
          style={{ zIndex: 30 }}
        >
          &#10094;
        </button>

        <button
          onClick={nextImage}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 px-6 py-3 bg-green-700 text-white rounded-full focus:outline-none hover:bg-gray-600"
          style={{ zIndex: 30 }}
        >
          &#10095;
        </button>
      </div>

      <section className="overlay-section relative py-16 bg-gray-100">
        <div className="absolute inset-0 flex justify-center items-center z-10 mt-[-80px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-20">
            <div
              className="p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: '#208245' }}
            >
              <h3 className="text-2xl text-white font-semibold text-center mb-4">Admission</h3>
              <p className="text-center text-white">New students including the transferees, currently grade 12 student, new graduates from Senior High School and other students who are about to enroll can click "Apply Now" to register and proceed to the admission portal.</p>
            </div>
            <div
              className="p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: '#208245' }}
            >
              <h3 className="text-2xl text-white font-semibold text-center mb-4">Enrollment</h3>
              <p className="text-center text-white">Students with existing records can click "Login" to access the student portal. The "Login" button will also allow staff and administrators to access the system in order to provide updates to the students.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
