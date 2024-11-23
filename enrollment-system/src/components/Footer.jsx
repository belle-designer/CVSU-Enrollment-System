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
            <p>Lorem ipsum dolor sit amet...</p>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>

        <div className="footer-col footer-col-2">
          <div className="col-title">
            <h3>Contact</h3>
          </div>
          <div className="col-contents">
            <div className="contact-row">
              <span>Address</span>
              <span>Soldiers Hills IV, Molino VI, Bacoor City, Cavite</span>
            </div>
            <div className="contact-row">
              <span>Phone</span>
              <span>(046) 476-5029</span>
            </div>
            <div className="contact-row">
              <span>Email</span>
              <span>cvsubacoor@cvsu.edu.ph</span>
            </div>
          </div>
        </div>

        <div className="footer-col footer-col-3">
          <div className="col-title">
            <h3>Quick Links</h3>
          </div>
          <div className="col-contents">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Gallery</a>
            <a href="#">Courses</a>
            <a href="#">Location</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="footer-col footer-col-4">
          <div className="col-title">
            <h3>Newsletter</h3>
          </div>
          <div className="col-contents">
            <form className="newsletter">
              <input type="email" placeholder="Your Email" />
              <button className="newsletter-btn btn" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="copy-rights">
        <p>Created By <b>Team Narding</b> All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
