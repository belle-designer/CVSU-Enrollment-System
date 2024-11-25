import React from 'react';
import cvsuLogo from '../assets/images/cvsu-logo.png';

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="footer-contents">
        <div className="footer-col footer-col-1">
          <div className="col-title">
            <img src={cvsuLogo} alt="CVSU Logo" />
          </div>
          <div className="col-contents">
            <p>
              Cavite State University - Bacoor Campus was created on September 28, 2007, 
              through Board Resolution No. 62, series of 2007. It is one of the campuses of 
              Cavite State University (CVSU), an institution of learning that started out
               in 1906 as the Indang Intermediate School.
            </p>
          </div>
        </div>

        <div className="footer-col footer-col-2">
          <div className="col-title">
            <h4>Contact</h4>
          </div>
          <div className="col-contents">
            <div className="contact-row">
              <span>Address</span>
              <span>Soldiers Hills IV, Molino VI, Bacoor City, Cavite</span>
            </div>
            <div className="contact-row">
              <span>Phone</span>
              <a href="tel:+63464765029" className="contact-link">
                (046) 476-5029
              </a>
            </div>
            <div className="contact-row">
              <span>Email</span>
              <a href="mailto:cvsubacoor@cvsu.edu.ph" className="contact-link">
                cvsubacoor@cvsu.edu.ph
              </a>
            </div>
          </div>
        </div>

        <div className="footer-col footer-col-3">
          <div className="col-title">
            <h4>Quick Links</h4>
          </div>
          <div className="col-contents">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#courses">Courses</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="copy-rights">
        <p>Created By <b>Vunder Team</b> All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
