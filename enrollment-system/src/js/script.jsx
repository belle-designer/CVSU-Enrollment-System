import React, { useState, useEffect } from 'react';

const Home = () => {
  // State for toggling the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when clicking a menu item
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to handle page scroll
  const handleScroll = () => {
    if (window.scrollY > 120) {
      setIsHomeActive(true);
    } else {
      setIsHomeActive(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener on component mount
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`home ${isHomeActive ? 'active' : ''}`} id="home">
      <nav className="main-navbar">
        <a href="#" className="logo">
          {/* Logo here */}
        </a>
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
          <li><a href="#courses" onClick={closeMenu}>Courses</a></li>
          <li><a href="#location" onClick={closeMenu}>Location</a></li>
          <li><a href="#footer" onClick={closeMenu}>Contact</a></li>
        </ul>
        <a href="#" className="get-started-btn-container">
          <button className="get-started-btn btn">Enroll Now</button>
        </a>
        <div className={`menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="home banner">
        <div className="banner-desc">
          {/* Banner content */}
        </div>
      </div>
    </section>
  );
};

export default Home;
