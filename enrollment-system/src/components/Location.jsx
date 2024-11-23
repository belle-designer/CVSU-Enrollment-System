import React from 'react';

const Location = () => {
  return (
    <section className="location" id="location">
      <header className="section-header">
        <h1>Location</h1>
      </header>
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.24950090612!2d120.9767360690542!3d14.412775650847069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d22f4810979f%3A0xaf0dae4457b7d498!2sCavite%20State%20University%20-%20Bacoor%20Campus!5e0!3m2!1sen!2sph!4v1732134798833!5m2!1sen!2sph"
          title="Location Map"
        ></iframe>
      </section>
    </section>
  );
};

export default Location;
