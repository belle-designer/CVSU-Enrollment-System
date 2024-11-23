import React from 'react';

const Location = () => {
  return (
    <section className="location" id="location">
      <header className="section-header">
        <h1>Location</h1>
      </header>
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          title="Location Map"
        ></iframe>
      </section>
    </section>
  );
};

export default Location;
