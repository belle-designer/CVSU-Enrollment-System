import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    '/img1.jpg', 
    '/img2.jpg', 
    '/img3.jpg', 
    '/img4.jpg', 
    '/img5.jpg', 
    '/img6.jpg', 
    '/img7.jpg',
    '/img8.jpg',
    '/img9.jpg',
    '/img10.jpg',
  ];

  const descriptions = [
    'Computer Laboratory',
    'Computer Laboratory',
    'Main Building First Floor',
    'New Building',
    'General Assembly',
    'General Assembly',
    'Campus Registrar',
    'Coaches & Athletes',
    'Main Building Fifth Floor',
    'Regular Classroom',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="gallery py-20 bg-gray-100" id="gallery">
      <header className="section-header">
        <div className="header-text">
          <h1>Gallery</h1>
          <p>Here are the various images gathered from within the campus.</p>
        </div>
      </header>

      {/* Slider Section with Bigger Background */}
      <div className="relative w-full max-w-7xl mx-auto bg-white p-24 rounded-lg shadow-lg">
        <div className="relative flex items-center justify-center">

          {/* Previous Image */}
          <img
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Previous Gallery"
            className="absolute left-0 w-[300px] h-[200px] object-cover rounded-lg transform scale-98 transition-all duration-500 z-10"
          />

          {/* Center Image with Hover Effect */}
          <div className="relative group z-20">
            <img
              src={images[currentIndex]}
              alt="Gallery"
              className="w-[300px] h-[200px] object-cover rounded-lg transition-all duration-500 transform scale-125"
            />
            {/* Hoverable Overlay */}
            <div className="absolute inset-0 bg-green-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
              <p className="text-white text-center px-4">{descriptions[currentIndex]}</p>
            </div>
          </div>

          {/* Next Image */}
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="Next Gallery"
            className="absolute right-0 w-[300px] h-[200px] object-cover rounded-lg transform scale-98 transition-all duration-500 z-10"
          />
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 px-6 py-3 bg-green-800 text-white rounded-full focus:outline-none hover:bg-gray-600"
          style={{ zIndex: 30 }}
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 px-6 py-3 bg-green-800 text-white rounded-full focus:outline-none hover:bg-gray-600"
          style={{ zIndex: 30 }}
        >
          &#10095;
        </button>

        {/* Dot Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-green-800' : 'bg-gray-400'} transition-colors duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
